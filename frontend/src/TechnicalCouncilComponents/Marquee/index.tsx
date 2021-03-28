// eslint-disable-next-line import/no-webpack-loader-syntax
import React from 'react';
// import * as style from './Marquee.scss';
import Svg from '../Svg';
import { Parallax } from 'react-scroll-parallax';
import * as boxBg from './box-bg.svg';
import * as boxOutline from './box-outline.svg';
import * as divider from '../shared/divider.svg';
import "./Marquee.css";
const Marquee = () => (
    <div className={'root'}>
        <div className={'container'}>
            <Svg svg={boxBg} className={'boxBg'} />
            <Parallax
                className={'text'}
                offsetYMax={70}
                offsetYMin={-70}
                offsetXMax={-30}
                offsetXMin={30}
            >
                <span className="h1">Horizontal</span>
            </Parallax>
            <Parallax
                className={'boxOutline'}
                offsetYMax={35}
                offsetYMin={-35}
            >
                <Svg svg={boxOutline} />
            </Parallax>
        </div>
    </div>
);

export default Marquee;
