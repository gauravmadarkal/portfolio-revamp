import React from 'react';
import './style.scss';

const Button = ({
	title,
	clickHandler,
	theme,
	classes
}) => {
	return (
		<div 
			className={`button ${theme? 'dark': ''} ${classes}`}
			onClick={clickHandler}
		>
			{title}
		</div>
	)
};

export default Button;