import React from "react";

const usePrevious = <T extends any>(value: T) => {
  const ref = React.useRef<T>();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
const useRequestAnimationFrame = (): [(cb: () => void) => void, Function] => {
  const handles = React.useRef<number[]>([]);
  const _raf = (cb: () => void) => {
    handles.current.push(requestAnimationFrame(cb));
  };
  const _resetRaf = () => {
    handles.current.forEach((id) => cancelAnimationFrame(id));
    handles.current = [];
  };

  return [_raf, _resetRaf];
};

type ImageProps = {
  src: string;
  alt?: string;
  transitionDuration?: number;
  curve?: string;
  style?: any;
};

const CrossFadeImage = (props: ImageProps) => {
  const { src, alt, transitionDuration = 0.35, curve = "ease" } = props;
  const oldSrc = usePrevious(src);
  const [topSrc, setTopSrc] = React.useState<string>(src);
  const [bottomSrc, setBottomSrc] = React.useState<string>("");
  const [bottomOpacity, setBottomOpacity] = React.useState(0);
  const [display, setDisplay] = React.useState(false);
  const [raf, resetRaf] = useRequestAnimationFrame();

  React.useEffect(() => {
    if (src !== oldSrc) {
      resetRaf();
      setTopSrc("");
      setBottomSrc("");

      raf(() => {
        setTopSrc(src);
        setBottomSrc(oldSrc!);
        setBottomOpacity(99);

        raf(() => {
          setBottomOpacity(0);
        });
      });
    }
  });

  return (
    <div
      className="imgContainer"
      style={props.style}
    >
      {topSrc && (
        <img
          style={{
            position: "absolute",
            opacity: display ? "100%" : 0,
            transition: `opacity ${transitionDuration}s ${curve}`
          }}
          onLoad={() => setDisplay(true)}
          src={topSrc}
          alt={alt}
        />
      )}
      {bottomSrc && (
        <img
          style={{
            position: "absolute",
            opacity: bottomOpacity + "%",
            transition: `opacity ${transitionDuration}s ${curve}`
          }}
          src={bottomSrc}
          alt={alt}
        />
      )}
    </div>
  );
};

export default CrossFadeImage;