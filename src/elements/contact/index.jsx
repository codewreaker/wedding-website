import React, { useState } from "react";

const defaultForm = {
    rnName: '',
    rnMessage: ''
}

const ContactOne = () => {
    const [state, setState] = useState(defaultForm)

    const [responseMessage, setResponseMessage] = useState({ message: '', show: false })

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }


    const handleSubmit = async (e) => {
        const res = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "advisory-form", ...state })
        })

        const tempName = state.rnName;

        (res.status === 200) ?
            setResponseMessage({
                message: `Thank You ${tempName} For Your Message ❤️`,
                show: true
            }) :
            setResponseMessage({
                message: '',
                show: false
            });
        e.preventDefault();
        //setState(defaultForm)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}  className="contact-form--1" name="advisory-form" method="post"
                data-netlify={true} data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="advisory-form" />
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className=" ptb--40 col-lg-6 order-1 order-lg-2">
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
                                        onChange={({ target }) => { setState({ ...state, ...{ rnMessage: target.value } }) }}
                                        placeholder="Your Message"
                                    />
                                </label>
                                <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                            </div>
                        </div>
                        <div className="ptb--20 col-lg-6 order-2 order-lg-1">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                {responseMessage.show && <h3 style={{color: 'limegreen'}}>{responseMessage.message}</h3>}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactOne;