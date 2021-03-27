import React, {useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import tween from "gsap";

const MobileNav = (props) => {

    let showNavbarStyles = {
        display: 'block',
        opacity: 1,
        transform: 'translate3d(0px, 0px, 0px)'
    }

    const navbarFullRef = useRef();
    const navSociallRef = useRef();

    const closeBtnHandler = (event) => {
        event.preventDefault();
        if (props.closeBtnHandler) {
            props.closeBtnHandler();
        } 
    }

    // Use Refs to get the DOM elements needed for the menu animations
    const navbar = navbarFullRef.current;
    const navbarSocial = navSociallRef.current;

    let navbarMenuItems = document.querySelectorAll('.rb-navbar-mobile-content >.rb-nav > li > a');

    const openFullscreenNavbar = () => {
                
        // Animate in the links in the menu
        tween.set(navbarMenuItems, {
            opacity: 0,
            force3D: true,
        });
        
        tween.set(navbarSocial, {
            opacity: 0,
            force3D: true,
        });

        tween.to(navbar, 0.5, {
            opacity: 1,
            force3D: true,
            display: 'block',
            onComplete() {
            },
        });

        tween.staggerTo(navbarMenuItems, 0.2, {
            y: 0,
            opacity: 1,
            delay: 0.2,
        }, 0.05);

        tween.to(navbarSocial, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.4,
        });
        
    };

    const closeFullscreenNavbar = (dontTouchBody) => {
        
        // Set the opacity of the links in the menu back to 0
        tween.set([navbarMenuItems,navbarSocial], {
            opacity: 0,
            force3D: true,
        });

    }

    // When the "isOpened" prop on the parent changes, call the appropriate menu function
    useEffect(()=>{
        if (props.isOpened) {
            openFullscreenNavbar();    
        } else {
            closeFullscreenNavbar();
        }
    },[props.isOpened]);

    return(
        <nav ref={navbarFullRef} className="rb-navbar rb-navbar-full rb-navbar-align-center" id="rb-nav-mobile" style={props.isOpened ? showNavbarStyles : {}}>
            <div className="rb-navbar-bg">
                <div className="bg-image" style={{backgroundImage: "url('assets/images/bg-menu.jpg')"}}></div>
            </div>
            <div className="rb-nav-table">
                <div className="rb-nav-row">
                    <div className="container">
                        <div className="rb-nav-header">
                            <div className="rb-nav-logo">
                                <Link to="/" className="rb-nav-logo">
                                    <img src="assets/images/logo-light.svg" alt="" width="85" />
                                </Link>
                            </div>
                            <div className={`rb-nav-close rb-navbar-full-toggle ${props.isOpened?'active':''}`} onClick={closeBtnHandler}>
                                <span className="rb-icon-close"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rb-nav-row-full rb-nav-row">
                    <div className="nano">
                        <div className="nano-content">
                            <div className="rb-nav-table">
                                <div className="rb-nav-row rb-nav-row-full rb-nav-row-center rb-navbar-mobile-content">
                                     <ul className="rb-nav">
                                        <li>
                                          <Link to="/" onClick={props.closeBtnHandler}> Home </Link>
                                        </li>
                                        <li>
                                          <Link to="/portfolio/" onClick={props.closeBtnHandler}> Portfolio </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact/" onClick={props.closeBtnHandler}> Contact </Link>
                                        </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rb-nav-row">
                    <div className="container">
                        <div className="rb-nav-social" ref={navSociallRef}>
                            <ul>
                                <li><a href="https://www.linkedin.com/in/rileyboyd/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li><a href="https://twitter.com/riley_boyd" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>  
    );

}

MobileNav.defaultProps = {
    closeBtnHandler: null
}

export default MobileNav;