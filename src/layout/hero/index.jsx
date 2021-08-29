import React, { useEffect } from 'react';
import Button from '../common/Button';
import Arrow from '../../images/right-arrow.png';
import './style.scss';
import useCustomEffects from '../../hooks/effect';

const Hero = ({ onNav }) => {
	useCustomEffects('hero', 5);
	return (<div className='hero'>
		<p className='title' id='hero_div_1' >Full Stack Developer</p>
		<p className='desc' id='hero_div_2'>
			Hi, I'm Gaurav Madarkal, Deeply involved in the designing, 
			developing and maintaining software, 
			I also develop cross platform mobile applications.
		</p>
		<Button 
			title='Lets talk' 
			link='mailto:gauravmadarkal@gmail.com' 
			clickHandler={() => { navigator.clipboard.writeText('gauravmadarkal@gmail.com') }}
			toast='Mail id copied to clipboard'
			id='hero_div_3'
		/>
		<div className='cards'>
			<div className='card' id='hero_div_4'>
				<div className='content'>
					<span className='number'>
						20+
					</span>
					<span className='text'>
						Projects
					</span>
				</div>
				<div 
					className='more_info' 
					onClick={() => onNav('projects')}
					role='button'
					tabIndex={0}
				>
					<img src={Arrow} className='arrow' alt='arrow' />
				</div>
			</div>

			<div className='card' id='hero_div_5'>
				<div className='content'>
					<span className='number'>
						4+
					</span>
					<span className='text'>
						Years of Experience
					</span>
				</div>
				<div 
					className='more_info'
					onClick={() => onNav('history')}
					role='button'
					tabIndex={0}	
				>
					<img src={Arrow} className='arrow' alt='arrow' />
				</div>
			</div>
		</div>
	</div>)
};

export default Hero;