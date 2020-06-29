import React, { Component , Fragment } from "react";
import PageHelmet from "../components/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import SectionTitle from "../elements/common/SectionTitle";
import CounterOne from "./counters/CounterOne";
import CounterTwo from "./counters/CounterTwo";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

class Counters extends Component{
    render(){
        return(
            <Fragment>
                <PageHelmet pageTitle='Counters' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Counters'}   />
                {/* End Breadcrump Area */}

                {/* Start Counterup Area */}
                <div className="counterup-area ptb--120 bg_color--">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <SectionTitle textColor="" title="Style 01" />
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End Counterup Area */}


                {/* Start Counterup Area */}
                <div className="counterup-area ptb--120 theme-gradient theme-text-white">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <SectionTitle textColor="text-white" title="Style 02" />
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End Counterup Area */}

                {/* Start Counterup Area */}
                <div className="counterup-area ptb--120 bg_color--">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <SectionTitle textColor="" title="Style 03" />
                            </div>
                        </div>
                        <CounterTwo />
                    </div>
                </div>
                {/* End Counterup Area */}
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer /> 

            </Fragment>
        )
    }
}
export default Counters;