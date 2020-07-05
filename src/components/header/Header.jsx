import React, { Component } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import Scrollspy from 'react-scrollspy'

class Header extends Component {
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

        //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        if (typeof window !== `undefined`) {
            window.addEventListener('load', function () {
                console.log('All assets are loaded');
            })
        }

    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    stickyHeader() { }

    render() {
        if (typeof window !== `undefined`) {
            window.addEventListener('scroll', function () {
                var value = window.scrollY;
                if (value > 100) {
                    document.querySelector('.header--fixed').classList.add('sticky')
                } else {
                    document.querySelector('.header--fixed').classList.remove('sticky')
                }
            });
        }

        var elements = typeof document !== `undefined` ? document.querySelectorAll('.has-droupdown > a'): null;
        for (var i in elements) {
            if (elements.hasOwnProperty(i)) {
                elements[i].onclick = function () {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color = 'default-color' } = this.props;
        const logoUrl = <img style={{ width: '10em' }} src="/assets/images/logo/monogram-gold.png" alt="MonoGram" />
        return (
            <header className={`header-area header-style-two header--fixed ${color}`}>
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <a href={'/'}>{logoUrl}</a>
                        </div>
                        <nav className="mainmenunav d-lg-block ml--50">
                            <Scrollspy className="mainmenu" items={['home', 'about', 'portfolio', 'bridalteam', 'blog', 'giving', 'contact']} currentClassName="is-current" offset={-200}>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">Our Story</a></li>
                                <li><a href="#portfolio">Wedding</a></li>
                                <li><a href="#bridalteam">Team</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#giving">Gifting</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </Scrollspy>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="header-btn">
                            <a className="rn-btn" href="#giving">
                                <span>Gifting</span>
                            </a>
                        </div>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;