
import React, { Fragment } from "react";
import Header from "../components/header/HeaderTwo";
import Helmet from "../components/common/Helmet";

const CardPayments = () => {
    return (
        <Fragment>
            <Helmet pageTitle="Izzy n Inshi" />
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            <div id="paypal-button-container"></div>
        </Fragment>
    )
}


export default CardPayments;