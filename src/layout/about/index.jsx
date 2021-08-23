import React from 'react';
import './style.scss';
import Profile from '../../images/picture.jpg';

const technologies = [
	'R Programming',
	'React',
	'Node Typescript',
	'DotNet',
	'Springboot',
	'Android',
	'React Native'
]
const About = ({
	ref
}) => {
	return (
		<div className='about' id='about' ref={ref}>
			<p className='title'>About Me</p>
			<div className='row'>
				<div className='col'>
					<p className='about_desc'>
						I am a Software Developer, interested in taking up complex problems and turning them into a simple efficient solution.  
						Bit about my professional life, I am experienced in Product Development with a demonstrated history as a software developer in couple of start-up organisations and established firms. 
						<br />Skilled in Web, Desktop and Mobile app development. Strong in programming and designing logic to a problem with a Bachelor of Engineering focused in Computer Science and Engineering.
						In my free time I like to travel and explore, trekking mountain peaks has become a routine, I always make sure to take some time off from work and spend time in the woods.
					</p>
					<p>Here are a few technologies I've been working with recently:</p>
					<div className='tech_grid'>
						{technologies.map(tech => (
							<div className='tech_grid_item'>
								<div className='tech_grid_item_point' />
								<div>{tech}</div>
							</div>
						))}
					</div>
				</div>
				<div className='col'>
					<div className='img_bg' />
					<img src={Profile} alt='Gaurav Madarkal Profile' className='picture'/>
				</div>
			</div>
		</div>
	)
};

export default About;