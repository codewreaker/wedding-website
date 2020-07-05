import React, { Component } from "react";
import { Link } from 'gatsby'

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer-area" id={'contact'}>
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        <span>Have Any Messages For Us?</span>
                                        <h2> We Would <br /> ❤ To Hear</h2>
                                        <Link className="rn-button-style--2" to="/contact">
                                            <span>Drop a Note</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p>Copyright © 2020 Israel Agyeman-Prempeh. All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;