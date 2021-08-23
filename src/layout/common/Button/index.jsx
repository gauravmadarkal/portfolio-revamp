import React, { useState } from 'react';
import './style.scss';

const Button = ({
	title,
	clickHandler,
	theme,
	classes,
	link,
	toast
}) => {
	const [showToast, setShowToast] = useState(false);

	return (
		<div className='button_wrapper'>
			<div 
				className={`button ${theme? 'dark': ''} ${classes}`}
				onClick={() => {
					setShowToast(true);
					clickHandler()
					setTimeout(() => {
						setShowToast(false);
					}, 3000);
				}}
			>
				{link? 
					<a className='link_btn' href={link}>{title}</a> : 
					title
				}
			</div>
			{showToast && toast && <span>{toast}</span>}
		</div>
	)
};

export default Button;