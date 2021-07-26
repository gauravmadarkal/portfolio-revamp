import * as React from "react"
import GlobalProvider from "../context/provider/GlobalProvider";
import Background from "../layout/common/Background";
import PageLayout from "../layout/pagelayout";
import './main.scss';

// markup
const IndexPage = () => {
	return (
		<GlobalProvider>
			<main className='main'>
				<title>Home Page</title>
				<Background />
				<PageLayout />
			</main>
		</GlobalProvider>
	)
}

export default IndexPage
