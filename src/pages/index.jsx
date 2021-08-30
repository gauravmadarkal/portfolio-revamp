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
import Anim from '../images/anim.svg';
import { Helmet } from "react-helmet";
import Picture from '../images/picture.jpg';

// markup
const IndexPage = () => {
	// const getInitValue = () => {
	// 	if (typeof window !== undefined) {
	// 		return window.scrollY;
	// 	}
	// }
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef();
	const projects_ref = useRef();
	const history_ref = useRef();
	const contact_ref = useRef();
	const [showHeader, setShowHeader] = useState(true);
	const offset = useRef(0);
	const [anim, setAnim] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setAnim(false);
		}, 2100);
	}, []);

	const scrollHandler = (e) => {
		if (typeof window !== undefined) {
			const window = e.currentTarget;
			if (offset.current > window.scrollY) {
				setShowHeader(true);
			} else if (offset.current < window.scrollY && window.scrollY > 500) {
				setShowHeader(false);
			}
			offset.current = window.scrollY;
		}
	};

	useEffect(() => {
		if (typeof window !== undefined) {
			window.addEventListener('scroll', scrollHandler);
	
			return () => window.removeEventListener('scroll', () => {})
		}
	}, []);

	const onNav = (id) => {
		if (id) {
			setIsOpen(false);
			switch(id) {
				case 'about':
					setTimeout(() => {
						ref.current?.scrollIntoView({ behaviour: 'smooth' });
						if (typeof window !== undefined) {
							window.scrollTo({
								behavior: "smooth",
								top: window.scrollY - 200,
							});
						}
					}, 400);
					return;
				case 'projects':
					setTimeout(() => {
						if (typeof window !== undefined) {
							projects_ref.current?.scrollIntoView({ behaviour: 'smooth' });
							window.scrollTo({
								behavior: "smooth",
								top: window.scrollY - 200,
							});
						}
					}, 400)
					return;
				case 'history':
					setTimeout(() => {
						if (typeof window !== undefined) {
							history_ref.current?.scrollIntoView({ behaviour: 'smooth' });
							window.scrollTo({
								behavior: "smooth",
								top: window.scrollY - 200,
							});
						}
					}, 400);
					return;
				case 'contact':
					setTimeout(() => {
						if (typeof window !== undefined) {
							contact_ref.current?.scrollIntoView({ behaviour: 'smooth' });
							window.scrollTo({
								behavior: "smooth",
								top: window.scrollY - 200,
							});
						}
					}, 400)
					return;
			}
		}
	}

	return (
		<GlobalProvider navOpen={isOpen}>
				{anim ? 
					<img src={Anim} alt='Page Animation' className='loader' />
					:
					<main className='main'>
						<Helmet
							title="Gaurav Madarkal | Full Stack Software Developer"
							meta={[
									{
										property: `og:title`,
										content: "I am an enthusiastic software developer interested in finding efficient solutions to complex problems",
									},
									{
										property: `og:type`,
										content: `website`,
									},
									{
										property: `og:image`,
										content: `https://gauravmadarkal.com/${Picture}`,
									},
							]}
						/>
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
				}
		</GlobalProvider>
	)
}

export default IndexPage
