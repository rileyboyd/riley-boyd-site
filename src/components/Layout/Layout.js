import React, {useState} from 'react';

import Header from './Header';
import Nav from './Nav';
import MobileNav from './MobileNav';
import Footer from './Footer';

const Layout = (props) => {

	let [fullscreenMenuIsOpened, setFullscreenMenuIsOpened] = useState(false);

	const menuIconClickHandler = () => {
		setFullscreenMenuIsOpened(true);
	}

	const closeMobileMenu = () => {
		setFullscreenMenuIsOpened(false);
	}

	return(
	<>
    <div className="wrapper">
		<Header menuIconClickHandler={menuIconClickHandler} />
		<div className="rb-main">
			{props.children}
		</div>
		<Footer />
	</div>	
	<MobileNav isOpened={fullscreenMenuIsOpened} closeBtnHandler={closeMobileMenu}  />
	</>
	)
};

export default Layout;