import React from 'react';
import Burger from '../Components/Burger';
import './style.scss';

const BGLines = () => {
	const lines = [];
	for (let i = 0; i < 10; i += 1) {
		lines.push(<div className='grid_item' id='bg_strips' />);
	}
	return lines;
}
const Background = () => {

	const openHandler = (isOpen) => {
		const bg = document.querySelector('.bg_wrapper');
		const ele = document.querySelectorAll('.grid_item');
		if (isOpen) {
			bg.classList.add('invert')
			ele?.forEach((e, index) => {
				e?.classList.add(`open_${index}`)
			});
		} else {
			bg.classList.remove('invert')
			ele?.forEach((e, index) => {
				e?.classList.remove(`open_${index}`)
			});
		}
	};

	return (
		<div className='bg_wrapper'>
			{BGLines()}
			<Burger openHandler={openHandler}/>
		</div>
	)
};

export default Background;