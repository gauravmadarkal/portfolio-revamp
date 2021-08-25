import React from 'react';

export const projects = [
	{
		title: 'Analytics - Alcohol Sales vs DUI Reports',
		desc: `Analysis raw data over a period of 5 years to see if the
		alcohol sales in any way is related to the Driving Under the influence accident reports.
		This project compares the data collected from 50 states of the USA and establishes 
		a direct relationship between the two variables`,
		link: 'https://gmadarkal.github.io/LiquorSales_vs_DIU_Reports/'
	},
	{
		title: 'Network Connections',
		desc: `Network Connections is a DotNet standard solution that is developed 
			for the sole purpose of reducing the effort involved to fetch the network 
			connection details on any platform, the version 1 release supports windows platform, 
			this solution is generic enough and can be extended to linux or OSX. 
			It is an open source solution, so please feel free to contribute`,
		tech: [
			'dotnet',
			'c#',
			'nuget',
			'oss'
		],
		link: 'https://www.nuget.org/packages/NetworkConnections/'
	},
	{
		title: 'Traffic lights Automation for emergency vehicles',
		desc: `Traffic lights management system is a solution to a real time pressing 
			problem faced by emergency vehicles such as Ambulance/Fire Engines/Police Vehicles. 
			This solution removes the waiting period for such vehicles in traffic areas. 
			It provides a simple yet efficient solution to override the regular traffic lights system just for these vehicles in emergency situations. 
			This project is simulates a traffic situation and provides a override remote to access the traffic lights system remotely`,
		tech: [
			'c++',
			'arduino',
			'embedded'
		],
		link: ''
	},
	{
		title: 'Hush - Android Application',
		desc: `Did your phone ever ring when you didn't want it to? 
		Well worry no more, We have got just the thing for you. 
		Hush comes with a very user friendly and easy to use UI, 
		we follow the policy of Less clicks more work. 
		With Hush you will be able to Setup multiple profiles of 
		Quite-Hours(one for driving, one for sleeping, one for meetings etc). 
		Set status based on your availability, which can be viewed by your contacts. 
		There are many more features to explore, click below to learn more`,
		tech: [
			'android',
			'java',
			'javascript',
			'firebase'
		],
		link: 'https://play.google.com/store/apps/details?id=org.hushapps.hush',
		morewidth: true
	},
];

export const history_info = [
	{
		'end': 'Present',
		'start': 'Aug 2021',
		'title': 'Master of Science in Computer Science',
		'location': 'University of Colorado Boulder',
		'desc': <p>● Pursuing MS in CS at the University of Colorado Boulder with Data Science and Engineering as the specialization<br />
		● Working as a Grader for Software Development Course.
		</p>
	},
	{
		'end': 'July 2021',
		'start': 'Oct 2020',
		'title': 'Software Engineer',
		'location': 'Bella & Bona',
		'desc': <p>● Bella & Bona is a B2B Ecommerce start-up, I am working as a Full stack developer (with ReactJs, Node, MySQL, React Native, AWS) to build their E-commerce web app and Mobile application. <br />
		● I have worked across all Bella&Bona's products, below is a brief about my contributions to each product.<br />
		● Bella&Bona's Order Management System, built with React redux and Node JavaScript, worked on adding major features like order management in kitchen, order dispatching, order forecasting.<br />
		● Bella&Bona's Ecommerce Mobile application, built using React Native, this is a cross platform mobile application for users to place/track orders, receive notifications, handle payment settings etc. Worked from POC to Product launch.<br />
		● Bella&Bona's Ecommerce Web application, built using React and Node Typescript, majorly worked on payment gateway integrations, UI/UX of the application.<br />
		● Bella&Bona's Static Website(bellabona.com) - Worked as a Lead developer to revamp the entire website to make it a better UX.</p>
	},
	{
		'end': 'Sept 2020',
		'start': 'Jul 2019',
		'title': 'Associate Software Engineer',
		'location': 'Betsol',
		'desc': <p>● Worked alongside a team of enthusiastic .Net developers to build a Data Migration/Erase/Backup tool which is estimated to be serving close to 40 million consumers worldwide.<br />
		● Contributed to Dell Migrate from initial stages of product development to product launch. Worked completely as a .Net framework developer, integrated critical features such as security checks, firewall enabling, migration reporting, migration stop and clean-up. Worked closely during the product launch with McAfee team to successfully bring the product to market<br />
		● Lastly, I worked on Dell backup and recovery tool, responsible for creating a scalable file queue system to systematically backup/recover thousands of files simultaneously.</p>
	},
];

export const getLink = (id) => {
	switch (id) {
		case 'facebook':
			return 'https://facebook.com/gauravmadarkal';
		case 'instagram':
			return 'https://instagram.com/gauravmadarkal';
		case 'linkedin':
			return 'https://linkedin.com/in/gauravmadarkal';
		default:
			return 'https://github.com/gauravmadarkal';
	}
};

export const recommendations = [
	{
		givenBy: 'Lalit Adithya',
		content: 'I had the pleasure of working with Gaurav for close to a year at Betsol. He is an extremely talented, pragmatic, and hard-working individual. He can develop extremely innovative and efficient solutions for complex requirements/problems. He has a “never say no attitude” and he implemented efficient solutions to... See more',
		userDesc: 'Software Engineer at NVIDEA'
	},
	{
		givenBy: 'Shriya Magadal',
		content: 'I have worked with Gaurav for the past year and a half and in this time I never once seen Gaurav say that something cannot be achieved. He brings an attitude of "never give up" to work. He is very hardworking and always willing to learn. He can understand the people\'s pain points and come up with solutions f... See more',
		userDesc: 'Engineer - Design and development at Siemens Healthineers'
	},
	{
		givenBy: 'Aarushi Vijay',
		content: 'Gaurav was more of a team player than an intern. He understood the objectives really well and delivered more than what was expected of him. In his short term here, he gained enough knowledge to attend meetings with clients as well. Quick learner with commitment and reliability.',
		userDesc: 'Product Manager @ Byjus'
	},
	{
		givenBy: 'Varsha Ravindra',
		content: 'I\'ve worked with Gaurav at Betsol for more than a year. He is one of the best people to work with. He brings in fun and enthusiasm, along with intelligence, insights and diligence to the team. His ability to take-on and complete any task precisely and way before the deadline is one of the many things about Gaurav ... See more',
		userDesc: 'Graduate Student at ASU'
	},
];

export const write_recommendation_link = 'https://www.linkedin.com/in/gauravmadarkal/detail/recommendation/write/';