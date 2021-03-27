import React from 'react';

const Button = (props) => {

	const clickHandler = (event) => {
		event.preventDefault();
		if (props.onClick) {
			props.onClick();
		}
	}

	return(
		<a href="#" className={'rb-btn ' + props.className} onClick={clickHandler}>{props.text}</a>
	);
}

Button.defaultProps = {
	onClick: null,
	text: "Button",
	className: ""
}

export default Button;