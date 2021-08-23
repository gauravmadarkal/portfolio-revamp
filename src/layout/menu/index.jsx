import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import './style.scss';

const Menu = () => {
	const { navOpen } = useContext(GlobalContext);

	return (
		<div className={`menu ${!navOpen ? 'hide': ''}`}>
			projects
		</div>
	)
}

export default Menu;