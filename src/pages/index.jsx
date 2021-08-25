import React, { useRef, useState } from "react"
import GlobalProvider from "../context/provider/GlobalProvider";
import Background from "../layout/common/Background";
import Burger from "../layout/common/Components/Burger";
import PageLayout from "../layout/pagelayout";
import Logo from '../images/logo.png';
import './main.scss';
import SocialLinks from "../layout/links";
import Hero from "../layout/hero";
import About from "../layout/about";
import Projects from "../layout/projects";
import Footer from "../layout/footer";
import History from "../layout/history";

// markup
const IndexPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef();
	const projects_ref = useRef();
	const history_ref = useRef();
	const contact_ref = useRef();

	const onNav = (id) => {
		if (id) {
			console.log(id);
			setIsOpen(false);
			switch(id) {
				case 'about':
					setTimeout(() => {
						ref.current?.scrollIntoView({ behaviour: 'smooth' });
					}, 400);
					return;
				case 'projects':
					setTimeout(() => {
						projects_ref.current?.scrollIntoView({ behaviour: 'smooth' });
					}, 400)
					return;
				case 'history':
					setTimeout(() => {
						history_ref.current?.scrollIntoView({ behaviour: 'smooth' });
					}, 400);
					return;
				case 'contact':
					setTimeout(() => {
						contact_ref.current?.scrollIntoView({ behaviour: 'smooth' });
					}, 400)
					return;
			}
		}
	}

	return (
		<GlobalProvider navOpen={isOpen}>
			<main className='main'>
				<SocialLinks />
				<img src={Logo} className='logo' alt='Gaurav Madarkal logo'/>
				<title>Home Page</title>
				<Background setOpen={setIsOpen} onNav={onNav} />
				{/* <PageLayout 
					about_ref={about_ref}
					projects_ref={projects_ref}
					history_ref={history_ref}
					contact_ref={contact_ref}
				/> */}
				{!isOpen && <div className='content'>
					<Hero />
					<About ref={ref} />
					<Projects ref={projects_ref}/>
					<History ref={history_ref}/>
					<Footer ref={contact_ref}/>
				</div>}
				<Burger openHandler={setIsOpen} isOpen={isOpen} />
			</main>
		</GlobalProvider>
	)
}

export default IndexPage
