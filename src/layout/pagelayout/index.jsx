import React, { useContext } from 'react';
import './style.scss';
import Hero from "../hero";
import GlobalContext from '../../context/GlobalContext';
import About from '../about';
import Projects from '../projects';
import History from '../history';
import Footer from '../footer';

const PageLayout = () => {
	const {
		menuState
	} = useContext(GlobalContext);
	const [menuOpen, ] = menuState;
	return (
		!menuOpen && <div className='content'>
			<Hero />
			<About />
			<Projects />
			<History />
			<Footer />
		</div>
	);
};

export default PageLayout;