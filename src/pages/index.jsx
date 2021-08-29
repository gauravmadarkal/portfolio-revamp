import React, { useEffect, useRef, useState } from "react"
import GlobalProvider from "../context/provider/GlobalProvider";
import Background from "../layout/common/Background";
import Burger from "../layout/common/Components/Burger";
import Logo from '../images/logo.png';
import './main.scss';
import SocialLinks from "../layout/links";
import Hero from "../layout/hero";
import About from "../layout/about";
import Projects from "../layout/projects";
import Footer from "../layout/footer";
import History from "../layout/history";
import Recommendations from "../layout/recommendations";

// markup
const IndexPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef();
	const projects_ref = useRef();
	const history_ref = useRef();
	const contact_ref = useRef();
	const [showHeader, setShowHeader] = useState(true);
	const offset = useRef(window.scrollY);

	const scrollHandler = (e) => {
		const window = e.currentTarget;
		if (offset.current > window.scrollY) {
			setShowHeader(true);
		} else if (offset.current < window.scrollY && window.scrollY > 500) {
			setShowHeader(false);
		}
		offset.current = window.scrollY;
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);

		return () => window.removeEventListener('scroll', () => {})
	}, []);

	const onNav = (id) => {
		if (id) {
			setIsOpen(false);
			switch(id) {
				case 'about':
					setTimeout(() => {
						ref.current?.scrollIntoView({ behaviour: 'smooth' });
						window.scrollTo({
							behavior: "smooth",
							top: window.scrollY - 200,
						});
					}, 400);
					return;
				case 'projects':
					setTimeout(() => {
						projects_ref.current?.scrollIntoView({ behaviour: 'smooth' });
						window.scrollTo({
							behavior: "smooth",
							top: window.scrollY - 200,
						});
					}, 400)
					return;
				case 'history':
					setTimeout(() => {
						history_ref.current?.scrollIntoView({ behaviour: 'smooth' });
						window.scrollTo({
							behavior: "smooth",
							top: window.scrollY - 200,
						});
					}, 400);
					return;
				case 'contact':
					setTimeout(() => {
						contact_ref.current?.scrollIntoView({ behaviour: 'smooth' });
						window.scrollTo({
							behavior: "smooth",
							top: window.scrollY - 200,
						});
					}, 400)
					return;
			}
		}
	}

	return (
		<GlobalProvider navOpen={isOpen}>
			<main className='main'>
				<SocialLinks classn='invisible' />
				<img src={Logo} className={`logo ${showHeader? 'appear' : 'gone' }`} alt='Gaurav Madarkal logo'/>
				<title>Home Page</title>
				<Background setOpen={setIsOpen} onNav={onNav} />
				{!isOpen && <div className='content'>
					<Hero onNav={onNav} />
					<About ref={ref} />
					<Projects ref={projects_ref}/>
					<History ref={history_ref}/>
					<Recommendations />
					<Footer ref={contact_ref}/>
				</div>}
				<Burger openHandler={setIsOpen} isOpen={isOpen} showHeader={showHeader} />
			</main>
		</GlobalProvider>
	)
}

export default IndexPage
