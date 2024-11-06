import React, {useState,useEffect} from 'react';
import Nav from './Nav';

import {useLocation} from 'react-router-dom';

const Header = (props) => {
	let location = useLocation();

	// If the page is the home page (location == '/'), add sticky nav
	const [hasStickyNav,setHasStickyNav] = useState();

	useEffect(()=>{
		setHasStickyNav((location.pathname == '/' || location.pathname == '/contact/' || location.pathname == '/contact'));
	},[location.pathname]);

	return (
	    <header className={`rb-header ${hasStickyNav ? 'rb-header-over':''}`}>
	        <Nav sticky={hasStickyNav} menuIconClickHandler={props.menuIconClickHandler} />
	    </header>
	);
}

Header.defaultProps = {
	menuIconClickHandler: null
}

export default Header;