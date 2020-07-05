import React, { Fragment } from "react";
import { Parallax } from "react-parallax";
import Header from "../components/header/HeaderTwo";

import BrandTwo from "../elements/BrandTwo";
import Helmet from "../components/common/Helmet";
const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        description: '',
        buttonText: 'Watch Live',
        buttonLink: '/watch',
        button2Text: 'Gifts',
        button2Link: '#giving'
    }
]
const sliderImage = "/assets/images/bg/main_bg_img.png";

const style={
    fontSize: '6em',
    fontFamily: 'Snell Roundhand, fantasy',
    fontWeight: 'bolder',
    textAlign: 'center',
    color: '#d28d1b',
    textShadow: '6px 6px 0px rgba(0,0,0,0.2)'
}

const Thanks = ({location}) => {
    const name = (location.search) ? location.search.split('?name=')[1] : '';
    return (
        <Fragment>
            <Helmet pageTitle="Izzy n Inshi" />
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

            {/* Start Slider Area   */}
            <div className="slider-wrapper">
                {/* Start Single Slide */}
                <Parallax bgImage={sliderImage} strength={700}>
                    {SlideList.map((_unused, index) => (
                        <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index} id={'home'}>
                            <div className="container">
                                <h1 style={style}>{`Thank You  ${decodeURI(name)} For Dropping Us A Note`}</h1>
                            </div>
                        </div>
                    ))}
                </Parallax>
            </div>
            <BrandTwo />
        </Fragment>
    )
}


export default Thanks;