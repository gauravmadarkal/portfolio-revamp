import React, { useContext, useEffect } from 'react';
import './style.scss';
import GlobalContext from '../../../context/GlobalContext';

const BGLines = (open, clickHandler) => {
	const lines = [];
	for (let i = 0; i < 6; i += 1) {
		lines.push(
			<div className='grid_item' id='bg_strips'>
				{
					open && 
					(i === 2 ? <div className='menu_links'>
						<a className='lnk' onClick={() => clickHandler('about')}>- About</a> <br />
						<a className='lnk' onClick={() => clickHandler('projects')}>- Projects</a>
					</div> :
					i === 3 ? <div className='menu_links more'>
						<a className='lnk' onClick={() => clickHandler('history')}>- History</a> <br />
						<a className='lnk' onClick={() => clickHandler('contact')}>- Contact</a>
					</div>: '')
				}
			</div>
		);
	}
	return lines;
}
const Background = ({
	setOpen,
	onNav
}) => {
	const {
		navOpen: isOpen,
	} = useContext(GlobalContext);

	useEffect(() => {
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
	}, [isOpen]);

	return (
		<div className='bg_wrapper'>
			{BGLines(isOpen, onNav)}
		</div>
	)
};

export default Background;