import React, { useState, Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import BrandTwo from "../elements/BrandTwo";
import Header from "../components/header/HeaderTwo";
import ModalVideo from 'react-modal-video';
import { videoTagString, VideoTag } from 'react-video-tag';
import { Descriptions } from '../content/descriptions';
import { Modal } from "../modal"
import Giving from "../elements/Giving";
videoTagString({ src: '/assets/images/service/video.mp4', poster: '/assets/images/bg/bg-image-24.jpg' })

const SlideList = [
    {
        textPosition: 'text-left',
        category: '',
        title: 'Welcome To Our Livestream',
        description: 'This Livestream is going to start on the 15th of September 2020, join us then.',
        buttonText: 'Watch Livestream',
        buttonLink: '/contact'
    }
]


const Watch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState({ bool: false, desc: '' });
    const openModal = () => {
        setIsOpen(true)
    }
    console.log(isModalOpen)
    return (
        <Fragment>
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

            <Header />
            {/* Start Slider Area   */}
            <div className="slider-wrapper">
                {/* Start Single Slide */}
                {SlideList.map((value, index) => (
                    <div className="slide slide-style-2 slider-video-bg d-flex align-items-center justify-content-center" key={index} data-black-overlay="6">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                    <div className={`inner ${value.textPosition}`}>
                                        {value.category ? <span>{value.category}</span> : ''}
                                        {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                        {value.description ? <p className="description">{value.description}</p> : ''}
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="video-inner">
                                        <ModalVideo channel='youtube' isOpen={isOpen} videoId='ZOoVOfieAF8' onClose={() => setIsOpen(false)} />
                                        <button className="video-popup theme-color" onClick={openModal}><span className="play-icon"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="video-background">
                            <VideoTag autoPlay={`${true}`} muted={`${true}`} playsInline={`${true}`} loop={`${true}`} src={`${"/assets/images/service/video.mp4"}`} poster={`${"/assets/images/bg/bg-image-24.jpg"}`} />
                        </div>
                    </div>
                ))}
                {/* End Single Slide */}
            </div>
            <div className="container testimonial-area ptb--20" style={{ textAlign: 'center' }} id={'gifts'}>
                <Giving func={setIsModalOpen} />
            </div>
            {/* End Slider Area   */}
                    <hr/>
            {/* Start Brand Area */}
            <div className="rn-brand-area brand-separation bg_color--5 ptb--120" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <BrandTwo />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Brand Area */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
        </Fragment>
    )
}
export default Watch;