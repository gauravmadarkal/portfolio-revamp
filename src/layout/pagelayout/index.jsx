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
		navOpen,
		about_ref,
		projects_ref,
		history_ref,
		contact_ref
	} = useContext(GlobalContext);
	return (
		!navOpen && <div className='content'>
			<Hero />
			<About ref={about_ref} />
			<Projects ref={projects_ref}/>
			<History ref={history_ref}/>
			<Footer ref={contact_ref}/>
		</div>
	);
};

export default PageLayout;