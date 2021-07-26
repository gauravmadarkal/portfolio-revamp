import React from 'react';
import Button from '../common/Button';
import Arrow from '../../images/right-arrow.png';
import './style.scss';

const Hero = () => (
	<div className='hero'>
		<p className='title'>Full Stack Developer</p>
		<p className='desc'>
			Hi, I'm Gaurav Madarkal, Deeply involved in the designing, 
			developing and maintaining software, 
			I also develop cross platform mobile applications.
		</p>
		<Button title='Lets talk' />
		<div className='cards'>
			<div className='card'>
				<div className='content'>
					<span className='number'>
						20+
					</span>
					<span className='text'>
						Projects
					</span>
				</div>
				<div className='more_info'>
					<img src={Arrow} className='arrow' />
				</div>
			</div>

			<div className='card'>
				<div className='content'>
					<span className='number'>
						4+
					</span>
					<span className='text'>
						Years of Experience
					</span>
				</div>
				<div className='more_info'>
					<img src={Arrow} className='arrow' />
				</div>
			</div>
		</div>
	</div>
);

export default Hero;