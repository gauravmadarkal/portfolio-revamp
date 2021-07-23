import React, { useState } from 'react';
import './style.scss';

const Burger = ({
	openHandler
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const openMenu = () => {
		setIsOpen(!isOpen);
		const ele = document.getElementById('nav-icon');
		if (isOpen) {
			openHandler(false);
			ele?.classList.remove('open');
		} else {
			openHandler(true);
			ele?.classList.add('open');
		}
	};

	return (
		<div id="nav-icon" onClick={openMenu}>
			<span></span>
			<span></span>
			<span></span>
			{/* <span></span> */}
		</div>
	)
};

export default Burger;