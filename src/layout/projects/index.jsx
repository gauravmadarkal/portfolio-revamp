import React, { useState } from 'react';
import './style.scss';
import Button from '../common/Button';
import { getIcon } from '../../utils';
import { projects } from '../../constants';

const techStack = [
	
]
const Projects = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	
	return (
		<div className='projects'>
			<p className='title'>
				Projects
			</p>
			<div className='row'>
				<div className='col bg-y'>
					<p className='project_title'>
						{projects[0].title}
					</p>
					<p className='project_desc'>
						{projects[0].desc}
					</p>
					<Button title='Learn More' theme='dark' classes='moreinfo'/>
				</div>
				<div className="col bg-l">
					<img src={getIcon('project_2')} alt='tech Stack icon' className={`tech_icon ${morewidth? 'inc_size': ''}`}/>
					{/* {techStack.map(tech => (
						<img src={getIcon(tech)} alt='tech Stack icon' className='tech_icon'/>
					))} */}

				</div>
			</div>
		</div>
	)
};

export default Projects;