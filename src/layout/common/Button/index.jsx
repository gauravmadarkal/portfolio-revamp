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
					if (link) {
						window.open(link)
					}
					setShowToast(true);
					clickHandler()
					setTimeout(() => {
						setShowToast(false);
					}, 3000);
				}}
				onKeyDown={() => {}}
				role='button'
				tabIndex={0}
			>
				{link? 
					<a className='link_btn' href={link} target='_blank'  rel='noreferrer'>{title}</a> : 
					title
				}
			</div>
			{showToast && toast && <span>{toast}</span>}
		</div>
	)
};

export default Button;