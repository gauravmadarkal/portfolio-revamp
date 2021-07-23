import * as React from "react"
import Background from "../layout/common/Background";
import Hero from "../layout/hero"
import './main.scss';

// markup
const IndexPage = () => {
	return (
		<main className='main'>
			<title>Home Page</title>
			<Background />
			<Hero />
		</main>
	)
}

export default IndexPage
