import * as React from "react"
import GlobalProvider from "../context/provider/GlobalProvider";
import Background from "../layout/common/Background";
import Burger from "../layout/common/Components/Burger";
import PageLayout from "../layout/pagelayout";
import Logo from '../images/logo.png';
import './main.scss';
import SocialLinks from "../layout/links";

// markup
const IndexPage = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<GlobalProvider navOpen={isOpen}>
			<main className='main'>
				<SocialLinks />
				<img src={Logo} className='logo' />
				<title>Home Page</title>
				<Background />
				<PageLayout />
				<Burger openHandler={(open) => setIsOpen(open)} />
			</main>
		</GlobalProvider>
	)
}

export default IndexPage
