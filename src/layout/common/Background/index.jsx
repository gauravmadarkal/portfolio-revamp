import React, { useContext } from 'react';
import Burger from '../Components/Burger';
import Logo from '../../../images/logo.png';
import './style.scss';
import GlobalContext from '../../../context/GlobalContext';

const BGLines = () => {
	const lines = [];
	for (let i = 0; i < 6; i += 1) {
		lines.push(<div className='grid_item' id='bg_strips' />);
	}
	return lines;
}
const Background = () => {
	const {
		menuState
	} = useContext(GlobalContext);
	const [, setMenuOpen] = menuState;

	const openHandler = (isOpen) => {
		const bg = document.querySelector('.bg_wrapper');
		const ele = document.querySelectorAll('.grid_item');
		if (isOpen) {
			bg.classList.add('invert')
			ele?.forEach((e, index) => {
				e?.classList.add(`open_${index}`)
			});
			setMenuOpen(true);
		} else {
			bg.classList.remove('invert')
			ele?.forEach((e, index) => {
				e?.classList.remove(`open_${index}`)
			});
			setMenuOpen(false);
		}
	};

	return (
		<div className='bg_wrapper'>
			{BGLines()}
			<img src={Logo} className='logo' />
			<Burger openHandler={openHandler}/>
		</div>
	)
};

export default Background;