import React from 'react';
import PropTypes from 'prop-types';
import * as style from './Svg.scss';

export default function Svg(props:any) {
    const Element = props.el?props.el:'span';
    const className =
        `svg-container ${style.root}` +
        (props.className ? ` ${props.className}` : '');

    return (
        <Element
            style={props.style}
            className={className}
            dangerouslySetInnerHTML={{ __html: props.svg }}
        />
    );
}

Svg.propTypes = {
    className: PropTypes.string,
    el: PropTypes.string.isRequired,
    style: PropTypes.object,
    svg: PropTypes.string.isRequired,
};

Svg.defaultProps = {
    el: 'span',
};
