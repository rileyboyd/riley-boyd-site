import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';

import {HashLink} from 'react-router-hash-link';

import logo from '../assets/images/rb-logo.svg';
import logoLight from '../assets/images/rb-logo-light.svg';

import {useLocation} from 'react-router-dom';

/*
import {
    $, tween, $wnd, $doc,
} from '../assets/js/parts/_utility';
*/

const Nav = (props) => {

    const [isSticky, setSticky] = useState(false);
    const stickyRef = useRef(null);
    const location = useLocation();

    const handleScroll = () => {

        if (stickyRef.current) {
    
            window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
            ? setSticky(true)
            : setSticky(false);
        }
    };

    const navbarToggleHandler = (event) => {

        event.preventDefault();

        if (props.menuIconClickHandler) {
            props.menuIconClickHandler('test');
        }

    }

    const getSelectedNavIndex = () => {
        let selectedIndex = 3;
        if (location.pathname == '/') {
            selectedIndex = 0; 
        } else if (location.pathname.substring(0,10) == '/portfolio') {
            selectedIndex = 1; 
        } else if (location.pathname == '/contact/' || location.pathname == '/contact') {
            selectedIndex = 2;     
        }
        return selectedIndex;
    }

    const [selectedNavIndex,setSelectedNavIndex] = useState(getSelectedNavIndex());

    const debounce = (func,wait = 20, immediate = true) => {

        let timeout;

        return function() {
            let context = this;
            let args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                func.apply(context,args);
            },wait);
        }
    }
      
    useEffect(() => {
      window.addEventListener("scroll", debounce(handleScroll))
      return () => {
              window.removeEventListener("scroll", () => handleScroll);
            }  
    }, [debounce, handleScroll]);

    useEffect(()=>{
        setSelectedNavIndex(getSelectedNavIndex());
    },[location.pathname]);

    return(
    <nav ref={stickyRef} className={`rb-navbar rb-navbar-top ${props.sticky ? 'rb-navbar-autohide rb-navbar-transparent rb-navbar-white-text-on-top rb-onscroll-show' : ''} ${(props.sticky && isSticky) ? 'rb-navbar-solid rb-navbar-fixed' : ''}`}>
        <div className="container">
            <div className="rb-nav-table">
                <Link to="/" className="rb-nav-logo">
                    <img src={logoLight} alt="" width="140" className="rb-nav-logo-onscroll" />
                    <img src={logo} alt="" width="140" />
                </Link>
                <ul className="rb-nav rb-nav-right d-none d-lg-block" data-nav-mobile="#rb-nav-mobile">
                    <li className={`rb-drop-item ${selectedNavIndex==0?'active':''}`}>
                        <Link to="/"> Home </Link>
                        {/*
                        // Add this back in when WP sub-menus/child menus are set up
                        <ul className="dropdown">
                            <li>
                                <Link to="portfolio"> Home Default </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Minimal Portfolio </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Slider Home </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Video Home </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Freelancer Portfolio </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Minimal Agency </Link>
                            </li>
                            <li className="active">
                                <Link to="portfolio"> One Page Agency </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Digital Agency </Link>
                            </li>
                            <li>
                                Link to="portfolio"> Fullscreen Slider </Link>
                            </li>
                        </ul>
                        */}
                    </li>
                    <li className={`rb-drop-item ${selectedNavIndex==1?'active':''}`}>
                        <Link to="/portfolio/"> Portfolio </Link>
                    </li>
                    <li className={`rb-drop-item ${selectedNavIndex==2?'active':''}`}>
                        <HashLink to="/contact/"> Contact </HashLink>
                    </li>
                    {/*
                    <li>
                        <Link to="/cv"> CV </Link>
                    </li>
                    */}
                </ul>
                <ul className="rb-nav rb-nav-right rb-nav-icons">
                    <li className="single-icon d-lg-none">
                        <a href="#" className="rb-navbar-full-toggle" onClick={navbarToggleHandler}>
                            <span className="rb-icon-burger">
                                <span className="rb-t-1"></span>
                                <span className="rb-t-2"></span>
                                <span className="rb-t-3"></span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );

}

Nav.defaultProps = {
    menuIconClickHandler: null
}

export default Nav;