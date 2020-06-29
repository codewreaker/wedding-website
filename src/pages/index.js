import React, { Fragment } from "react";
import { Parallax, Background } from "react-parallax";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BlogContent from "../elements/blog/BlogContent";
import Giving from "../elements/Giving";
import Helmet from "../components/common/Helmet";
import timelineRows from "../api/timeline.json";
import BrandTwo from "../elements/BrandTwo";

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

const image1 = "/assets/images/bg/paralax/bg-image-2.jpg";

const image6 = "/assets/images/bg/paralax/bg-image-6.png";

const image7 = "/assets/images/bg/paralax/bg-image-7.jpg";

const goldFoilStyle = {
    background: '-webkit-linear-gradient(transparent, transparent), url(assets/images/goldFoilPattern.png) repeat',
    color: '#c3a343',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text'
}


const PortfolioList = [
    {
        image: 'image-1',
        category: 'Invite Only',
        title: 'Traditional Wedding'
    },
    {
        image: 'image-2',
        category: 'Open',
        title: 'Wedding Day'
    },
    {
        image: 'image-3',
        category: 'Invite Only',
        title: 'Reception'
    }
]

const Paralax = () => {
    const PostList = BlogContent.slice(0, 3);
    return (
        <Fragment>
            <Helmet pageTitle="Izzy n Inshi" />

            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

            {/* Start Slider Area   */}
            <div className="slider-wrapper">
                {/* Start Single Slide */}
                <Parallax bgImage={sliderImage} strength={700}>
                    {SlideList.map((value, index) => (
                        <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index} id={'home'}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`monogram-title ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            {<img src="/assets/images/logo/monogram-gold-date.png" alt="MonoGram" />}
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            <div className={'actionBtns'}>
                                                {value.buttonText ? <a className="rn-button-style--2 btn-solid" href={`${value.buttonLink}`}>{value.buttonText}</a> : ''}
                                                {value.button2Text ? <a className="rn-button-style--2 btn-solid" href={`${value.button2Link}`}>{value.button2Text}</a>: ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Parallax>
            </div>
            {/* End Slider Area   */}

            {/* Start About Area */}
            <Parallax className="rn-paralax-service" bgImage={image1} strength={1000} >
                <div className="about-area ptb--120 bg_color--5" id={'about'}>
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-12">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">Our Story</h2>
                                            <p className="description">This is the story all about how our life got's twisted upside don __Will Smith <a href="#alteration">alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                                        </div>
                                        <div className={'ptb--30'}></div>
                                        {/* First Description */}
                                        <ul className="time-line">
                                            {/* First Description */}
                                            {timelineRows.map(({ img, iconImg, date, title, description }, idx) => (
                                                <li key={`timeline-${idx}`}>
                                                    <div className="story-item">
                                                        <div className="icon">
                                                            <img src={iconImg} alt="svgIcon" />
                                                        </div>
                                                        <div className="img_in">
                                                            <img src={img} alt="milestone-img" />
                                                        </div>
                                                        <div className="content">
                                                            <div className="date">{date}</div>
                                                            <h3 className="title">{title}</h3>
                                                            <div className="discription">{description}</div>
                                                        </div>
                                                    </div>
                                                </li>))}
                                            {/* First Description */}

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
            {/* End About Area */}

            {/* Start CounterUp Area */}
            <Parallax className="rn-counterup-area rn-paralax-counterup" bgImage={image6} strength={1000} >
                <div className="counterup-area ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--2 text-center mb--30 mb_sm--0">
                                    <h3>Countdown to Our Wedding</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
            </Parallax>
            {/* End CounterUp Area */}

            {/* Start Portfolio this will become events */}
            <Parallax className="rn-paralax-portfolio" strength={500}
                renderLayer={() => (
                    <div
                        style={{
                            position: 'absolute',
                            background: `url("/assets/images/lovepattern.png") repeat center center fixed`,
                            width: '100vw',
                            height: '100vh'
                        }}
                    />)}>
                <div className="portfolio-area ptb--120" data-black-overlay="4" id={'portfolio'}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--2 text-center mb--30 mb_sm--0">
                                    <h2>Wedding Events</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row" >
                            {/* Start Single Portfolio  */}
                            {PortfolioList.map((value, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--40" key={index} >
                                    <div className="portfolio">
                                        <div className="thumbnail-inner">
                                            <div className={`thumbnail ${value.image}`}></div>
                                            <div className={`bg-blr-image ${value.image}`}></div>
                                        </div>
                                        <div className="content">
                                            <div className="inner">
                                                <p>{value.category}</p>
                                                <h4><a href="/portfolio-details">{value.title}</a></h4>
                                                <div className="portfolio-button">
                                                    <a className="rn-btn" href="/portfolio-details">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* End Single Portfolio  */}
                        </div>
                    </div>
                </div>
            </Parallax>
            {/* End Service Area  */}

            {/* Start Testimonial Area */}
            <Parallax className="rn-testimonial-area rn-paralax-testimonial  rn-testimonial-light" bgImage={image7} strength={500} data-black-overlay="5">
                <div className="testimonial-area ptb--120" data-black-overlay="6" id={'bridalteam'}>
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
            </Parallax>
            {/* End Testimonial Area */}

            {/* Start Blog Area */}
            <div className="blog-area ptb--120" data-black-overlay="6" id={'blog'}>
                Advice Us
                We know deep in our hearts you would have loved to be present, but since you couldnt make it
                We want you to share a message of love and advice with us
                </div>

            {/* End Blog Area */}

            {/* Start Giving Area */}
            <Parallax className="rn-brand-area brand-separation ptb--120" strength={1000}>
                <div className="brand-wrapper" id={'giving'}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2 className="title">Gifts and Lists</h2>
                                    <p className="description">Your presence at our wedding is all that we wish for. However, if you want to give a gift
                                    we will be grateful for a small <b><i>cash</i></b>  donation. We also have an amazon list where you can purchase
                                    a gift which will be guaranteed to reach us. Thank you so much <b><i>__Izzy and Inshi</i></b> </p>
                                </div>
                                <Giving />
                            </div>
                        </div>
                    </div>
                </div>

            </Parallax>
            {/* End Brand Area */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

            <div className="row">
                <div className="col-lg-12">
                    <hr />
                    <div style={{ textAlign: 'center' }}>
                        <h4 className="title">Our Vendors</h4>
                        <p className="description">So many companies have helped us in making our dream come true, too many to list; However
                                    we will like to throw light on a few companies that went the extra mile </p>
                    </div>
                    <BrandTwo />
                </div>
            </div>
            <Footer id={'contact'} />
        </Fragment>
    )
}
export default Paralax;