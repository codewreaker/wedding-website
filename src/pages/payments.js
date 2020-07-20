import React, { useState } from "react";
import PageHelmet from "../components/common/Helmet";
import { FiLayers } from "react-icons/fi";
import { FaCcPaypal, FaCreditCard } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../components/header/HeaderTwo";
import Footer from "../components/footer/Footer";
import { Link } from "gatsby";
import { loadStripe } from "@stripe/stripe-js";

const amtCategories = [
    { "id": "price_1H6m8NHHhHOtLy1hLPj1RuiR", "amount": 400, "name": "Palladium", "description": "We are speechless" },
    { "id": "price_1H6m72HHhHOtLy1hQjdF4pa4", "amount": 200, "name": "Platinum", "description": "Words cannot express our deepest gratitude" },
    { "id": "price_1H6m5eHHhHOtLy1hYZKs6Dms", "amount": 200, "name": "Gold", "description": "We really appreciate your love and support" },
    { "id": "price_1H6m57HHhHOtLy1hDtqwValc", "amount": 50, "name": "Silver", "description": "Your love for us is esteemable" },
    { "id": "price_1H6m4WHHhHOtLy1hTIyNEohK", "amount": 25, "name": "Bronze", "description": "A Token of Love and Appreciation" },
    { "id": "price_1H6m3NHHhHOtLy1hMAN15lKD", "amount": 10, "name": "Copper", "description": "A Token For The Couple" },
    { "id": "price_1H6mvSHHhHOtLy1hyyqTvhQ2", "amount": 5, "name": "Onyx", "description": "A heart of ❤️" },
]

const buttonStyles = {
    fontSize: "13px",
    fontWeight: "bolder",
    textAlign: "center",
    color: "#fff",
    border: '3px solid red',
    marginTop: '10px',
    padding: "5px",
    boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
    backgroundColor: "#f9004d",
    borderRadius: "6px",
    cursor: 'pointer',
    letterSpacing: "1.5px",
}

const inputStyle = {
    fontSize: "13px",
    textAlign: "center",
    border: '3px solid red',
    backgroundColor: "#fff",
    borderRadius: "6px",
}

const publicKey = "pk_live_51H1pynHHhHOtLy1hyQiSfJV5QgkmacdUWL0Um6YWnu0kazXUCnwvZbK6ZgbDNqbTYY1OxuoartNiZmMGdby1EYqG00PiyWPc2B"
//const publicKey = 'pk_test_51H1pynHHhHOtLy1hIe6Kkfzfa8alhsTJ2asBxWUDGnOMMaqfX6pJlX0AI10SkNCpym9lVDWGwou8jInS7YQGdC2O00yJUZ9k9e'; //test
const stripePromise = loadStripe(publicKey);

const redirectToCheckout = async (price) => {
    const stripe = await stripePromise;
    if (!price) {
        alert('No Amount Selected or Entered');
        return
    }
    const { error } = await stripe.redirectToCheckout({
        lineItems: [{
            price,
            quantity: 1
        }],
        mode: "payment",
        successUrl: `https://izzyandinshi4.life//thanks-dontation`,
        cancelUrl: `https://izzyandinshi4.life//`,
    })
    if (error) {
        console.warn("Error:", error)
    }
}


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
    }
]
const Service = () => {
    const [state, setState] = useState({
        id: "price_1H6mvSHHhHOtLy1hyyqTvhQ2",
        amount: 5,
        description: "A heart of ❤️"
    })
    const setPriceId = ({ currentTarget }) => {
        const newState = amtCategories.find(({id})=>(id===currentTarget.value))
        setState({...newState})
    }
    return (
        <React.Fragment>
            <PageHelmet pageTitle='Service' />
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* Start Service Area */}
            <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--1">
                <div className="container">
                    <div className="row creative-service">
                        {ServiceList.map((val, i) => (
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
                        {<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" key={'card-payment'}>
                            <div>
                                <div className="service service__style--2">
                                    <div className="icon"> <FaCreditCard /></div>
                                    <div className="content">
                                        <h3 className="title">{'Cards'}</h3>
                                        <p>{'Card Payments / Apple Pay/ Google Pay payments can be done here '}</p>
                                        <hr/>
                                        <p>{state.description}</p>
                                        <div className='paymentArea'>
                                            {/* <input style={inputStyle} onChange={({currentTarget})=>setAmt(currentTarget.value)}/> */}
                                            <select defaultValue={state.id} onChange={setPriceId}>
                                                {amtCategories.map(({ id, name, amount }) => (
                                                    <option key={id} value={id}>{`${name} - £${amount}`}</option>
                                                ))}
                                            </select>
                                            <div style={buttonStyles} className="paymentBtn" onClick={() => redirectToCheckout(state.id)}>
                                                {`Send £${state.amount}`}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
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
export default Service;