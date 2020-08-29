import React, { useState, Fragment, useEffect } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import BrandTwo from "../elements/BrandTwo";
import Header from "../components/header/HeaderTwo";
import ModalVideo from 'react-modal-video';
import { videoTagString, VideoTag } from 'react-video-tag';
import {getLatestLive, getVideoDetails} from '../api/youtube';
import { Descriptions } from '../content/descriptions';
import { Modal } from "../modal"
import Giving from "../elements/Giving";
const vidUrl = '/assets/video/izzynshivid.mov';
const posterUrl = '/assets/images/bg/bg-image-4.png';
import RR from '/site/settings/streamDetails.json';
videoTagString({ src: vidUrl, poster: posterUrl})

const Watch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState({ bool: false, desc: '' });
        const [state, setState] = useState({
            textPosition: 'text-left',
            category: 'Live',
            videoId: 'kHEciZWT09k',
            title: 'Welcome To Our Livestream',
            description: 'This Livestream starts on the 15th of September 2020, join us then.',
            buttonText: 'Watch Livestream'
        })


    useEffect(()=>{
        console.log(RR)
    }, [])

    const openModal = () => {
        setIsOpen(true)
    }

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
                <div className="slide slide-style-2 slider-video-bg d-flex align-items-center justify-content-center" data-black-overlay="6">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className={`inner text-left`}>
                                    {state.category ? <span>{state.category}</span> : ''}
                                    {state.title ? <h1 className="title">{state.title}</h1> : ''}
                                    {state.description ? <p className="description">{state.description}</p> : ''}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="video-inner">
                                    <ModalVideo channel='youtube' isOpen={isOpen} videoId={state.videoId} onClose={() => setIsOpen(false)} />
                                    <button className="video-popup theme-color" onClick={openModal}><span className="play-icon"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video-background">
                        <VideoTag autoPlay={`${true}`} muted={`${true}`} playsInline={`${true}`} loop={`${true}`} src={`${vidUrl}`} poster={`${posterUrl}`} />
                    </div>
                </div>
                {/* End Single Slide */}
            </div>
            <div className="container testimonial-area ptb--20" style={{ textAlign: 'center' }} id={'gifts'}>
                <Giving func={setIsModalOpen} />
            </div>
            {/* End Slider Area   */}
            <hr />
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