import React, { useState, Fragment } from "react";
import { Parallax, Background } from "react-parallax";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { PortfolioList, Descriptions } from '../content/descriptions';
import { Modal } from "../modal"

import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import Giving from "../elements/Giving";
import Helmet from "../components/common/Helmet";
import timelineRows from "../content/timeLine";
import BrandTwo from "../elements/BrandTwo";

import { Link } from 'gatsby'

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

const image1 = "/assets/images/bg/paralax/bg-image-4.jpg";

const image6 = "/assets/images/bg/paralax/bg-image-6.png";

const image4 = "/assets/images/bg/paralax/bg-image-4.jpg";


const Paralax = () => {
    const [isModalOpen, setIsModalOpen] = useState({ bool: false, desc: '' });
    return (
        <Fragment>
            {/**MODAL */}
            {(isModalOpen.bool) && (
                <Modal onClose={() => setIsModalOpen({ bool: false })} buttonText={'Close'}>
                    <h2 className="title">{isModalOpen.desc}</h2>
                    <div className={'ptb--30'}>
                        <p className="description">
                            {Descriptions[isModalOpen.desc].split('\n').map((str, idx) => (<span key={idx}>{str} <br></br></span>))}
                        </p>
                    </div>
                </Modal>
            )}

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
                                                {value.buttonText ? <Link className="rn-button-style--2 btn-solid" to={`${value.buttonLink}`}>{value.buttonText}</Link> : ''}
                                                {value.button2Text ? <Link className="rn-button-style--2 btn-solid" to={`${value.button2Link}`}>{value.button2Text}</Link> : ''}
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

            <div className="about-area ptb--40 bg_color--8">
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <p className="description">
                                            We know you would have all loved to be a part of our special day today. However, 2020 might not have allowed you to be here with us 🤦🏾‍♂️
                                            but 🦠 can't stop love. In this light we are sharing our special day with you through this medium 🥰. Here you will be able to <Link to="/watch"> Watch our Special Day</Link> and get to
                                           <Link to="#about"> Know our Story 🤵🏾👰🏾</Link>. We have provided alternative forms of <Link to="/#giving"> gifting </Link> such as monetary via
                                           card payment or direct transfer or you could order something from our wedding gift list via Amazon or Prezola if you wish to do so 🚚.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Start About Area */}
            <Parallax className="rn-paralax-service" bgImage={image1} strength={1000} >
                <div className="about-area ptb--30 bg_color--5" id={'about'}>
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-12">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">Our Story</h2>
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
                <div className="ptb--40 bg_color--8" style={{ textAlign: 'center' }}>
                    <div className="container">
                        <div className="col-lg-12">
                            <Link className="rn-button-style--2 btn-solid" to={'/contact'}>
                                {"Drop Us a Goodwill Message Or Share Some Handy Advice of Love"}
                            </Link>
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
                <div className="portfolio-area ptb--30" data-black-overlay="4" id={'portfolio'}>
                    <div className="container">
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
                                                <h4><Link to="/portfolio-details">{value.title}</Link></h4>
                                                <div className="portfolio-button">
                                                    <a className="rn-btn" onClick={() => setIsModalOpen({ bool: true, desc: value.title })}>Details</a>
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
            <Parallax className="rn-testimonial-area rn-paralax-testimonial  rn-testimonial-light" bgImage={image4} strength={500} data-black-overlay="5">
                <div className="testimonial-area ptb--120" data-black-overlay="6" id={'bridalteam'}>
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
            </Parallax>
            {/* End Testimonial Area */}


            {/* Start Giving Area */}
            <Parallax className="rn-brand-area brand-separation ptb--120" strength={1000}>
                <div className="brand-wrapper" id={'giving'}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2 className="title">Gifts and Lists</h2>
                                    <p className="description">Your presence at our wedding is all that we would have wished for. However, if you want to give a gift
                                    we will be grateful for a <b><i>cash</i></b> donation. We also have an amazon and prezola list where you can purchase
                                    a gift which will be guaranteed to reach us. Thank you.</p>
                                </div>
                                <Giving func={setIsModalOpen} />
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
                    <div style={{ textAlign: 'center', padding: '10px' }}>
                        <h4 className="title">Service Spotlight</h4>
                        <p className="description">
                            So many companies have helped us in making our dream come true, too many to list; However
                            we will like to throw light on a few companies that went the extra mile
                        </p>
                    </div>
                    <BrandTwo />
                </div>
            </div>
            <Footer id={'contact'} />
        </Fragment>
    )
}
export default Paralax;