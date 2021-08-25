import React, { useEffect, useState } from 'react';
import './style.scss';

const Burger = ({
	openHandler,
	isOpen
}) => {
	useEffect(() => {
		console.log(isOpen)
		const ele = document.getElementById('nav-icon');
		if (isOpen) {
			ele?.classList.add('open');
		} else {
			ele?.classList.remove('open');
		}
	}, [isOpen]);

	return (
		<div 
			id="nav-icon" 
			onClick={() => openHandler(!isOpen)}
			onKeyDown={() => {}}
			role='button'
			tabIndex={0}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
};

export default Burger;