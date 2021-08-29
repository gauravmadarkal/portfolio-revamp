import React, { forwardRef, useEffect, useState } from 'react';
import './style.scss';
import Button from '../common/Button';
import { getIcon } from '../../utils';
import { projects } from '../../constants';
import Arrow from '../../images/right-arrow.png';

const count = 4;
const Projects = forwardRef((props, ref) => {
	const [currentIndex, setCurrentIndex] = useState(1);

	const nextProject = (inc) => {
		if (inc) {
			if (currentIndex === count) {
				setCurrentIndex(1);
			} else {
				setCurrentIndex(currentIndex + 1);
			}
		} else {
			if (currentIndex === 1) {
				setCurrentIndex(count);
			} else {
				setCurrentIndex(currentIndex - 1);
			}
		}
	}
	useEffect(() => {
		const ele = document.getElementById('slide1');
		const ele2 = document.getElementById('slide2');
		ele.classList.remove('slide_in');
		ele2.classList.remove('slide_in');
		// ele.classList.add('slide_in');
		setTimeout(() => {
			ele.classList.add('slide_in');
		}, 500);
		setTimeout(() => {
			ele2.classList.add('slide_in');
		}, 800);
	}, [currentIndex]);

	return (
		<div className='projects' id='projects' ref={ref}>
			<p className='title'>
				Projects
			</p>
			<div className='row'>
				<div className='col bg-y' id='slide1'>
					<p className='project_title'>
						{projects[currentIndex - 1]?.title}
					</p>
					<p className='project_desc'>
						{projects[currentIndex - 1]?.desc}
					</p>
					<Button title='Learn More' theme='dark' classes='moreinfo' link={projects[currentIndex - 1]?.link}/>
				</div>
				<div className="col bg-l" id='slide2'>
					<img
						src={getIcon(`project_${currentIndex}`)} 
						alt='tech Stack icon' 
						className={`tech_icon ${currentIndex === 1 || currentIndex === 4? 'inc_size': ''}`} 
					/>
				</div>
			</div>
			<div className='index_inc'>
				<div 
					className={`box ${currentIndex === 1 ? 'disabled_box': ''}`} 
					onClick={() => nextProject(false)}
					onKeyDown={() => {}}
					role='button'
					tabIndex={0}
				>
					<img src={Arrow} className='inc_icon inv' alt='prev project'/>
				</div>
				<div 
					className={`box ${currentIndex === count ? 'disabled_box': ''}`} 
					onClick={() => nextProject(true)}
					onKeyDown={() => {}}
					role='button'
					tabIndex={0}
				>
					<img src={Arrow} className='inc_icon' alT='NEXT PROJECT'/>
				</div>
			</div>
		</div>
	)
});

export default Projects;