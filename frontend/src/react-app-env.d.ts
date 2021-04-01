/// <reference types="react-scripts" />
declare module 'react-animations';
declare module 'radium';
declare module 'react-google-login';
declare module 'react-scroll-parallax';
declare module 'react-datetime-picker';
declare module 'react-parallax';
declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}
declare module "*.svg" {
    const content: string;
    export = content;
}