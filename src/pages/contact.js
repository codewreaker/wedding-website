import React, {  Fragment } from "react";
import Header from "../components/header/HeaderTwo";
import Helmet from "../components/common/Helmet";
import BrandTwo from "../elements/BrandTwo";

import ContactOne from "../elements/contact";

const image1 = "/assets/images/timeline/story-1.png"

const Paralax = () => {
    return (
        <Fragment>

            <Helmet pageTitle="Izzy n Inshi" />
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

            <div className="rn-contact-page ptb--120 bg_color--1">
                <ContactOne contactImages={image1} />
            </div>

            {/* Start Back To Top */}
            <BrandTwo/>

        </Fragment>
    )
}
export default Paralax;