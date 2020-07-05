import React, { useState } from "react";
import { FaSatellite } from "react-icons/fa";

const ContactOne = ({ contactImages }) => {
    const [state, setState] = useState({
        rnName: '',
        rnMessage: '',
    })

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }


    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "advisory-form", ...state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    return (
        <div>
            <form className="contact-form--1" name="advisory-form" method="post"
                data-netlify={true} data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value={"advisory-form"} />
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">Drop Us A Note</h2>
                                <p className="description">
                                    {"We have decided to take this journey of 🤵🏾👰🏾 together 🙏🏾. We know this will be a very long road\
                                and if you have any advice or just something random, please feel free to drop us a note. We are looking forward to \
                                read them all. Oh! and no topic is off limits 😇😝"}
                                </p>
                            </div>
                            <div className="form-wrapper">
                                <label htmlFor="item01">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item01"
                                        value={state.rnName}
                                        onChange={({ target }) => { setState({ ...state, ...{ rnName: target.value } }) }}
                                        placeholder="Your Name *"
                                    />
                                </label>

                                <label htmlFor="item04">
                                    <textarea
                                        type="text"
                                        id="item04"
                                        name="message"
                                        value={state.rnMessage}
                                        onChange={({ target }) => { setState({...state, ...{ rnMessage: target.value }}) }}
                                        placeholder="Your Message"
                                    />
                                </label>
                                <button onClick={handleSubmit} className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img style={{ borderRadius: '50%', border: '2px solid #ee076e' }}
                                    src={`${contactImages}`} alt="trydo" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactOne;