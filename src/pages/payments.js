import React, { Component } from "react";
import PageHelmet from "../components/common/Helmet";
import {  FiLayers  } from "react-icons/fi";
import { FaCcPaypal, FaCreditCard } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../components/header/HeaderTwo";
import Footer from "../components/footer/Footer";
import {Link} from "gatsby";

const ServiceList = [
    {
        icon: <FaCcPaypal />,
        title: 'Paypal',
        description: "For people with a paypal account, this is preferred if you're outside the UK",
        url: 'https://paypal.me/israelprempeh?locale.x=en_GB'
    },
    {
        icon: <FiLayers />,
        title: 'Monzo',
        description: "Use this link if you're in the UK, it is fast and charges no fee",
        url: 'https://monzo.me/israelagyemanprempeh/50.00?d=Your%20presence%20at%20our%20wedding%20is%20all%20that%20we%20wished%20for,%20we%20are%20grateful%20for%20this%20cash%20donation%20toward%20our%20new%20journey.%20Please%20do%20adjust%20the%20amount%20as%20needed'
    },
    {
        icon: <FaCreditCard />,
        title: 'Cards',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        url: '/cardpayments'
    }
]
class Service extends Component{
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Service' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Service Area */}
                <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--1">
                    <div className="container">
                        <div className="row creative-service">
                            {ServiceList.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" key={i}>
                                    <Link target="_blank" to={val.url}>
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />


            </React.Fragment>
        )
    }
}
export default Service;