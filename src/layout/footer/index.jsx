import React, { forwardRef } from 'react';
import Button from '../common/Button';
import './style.scss';

const Footer = forwardRef((props, ref) => {

    const onClick = () => {
        navigator.clipboard.writeText('gauravmadarkal@gmail.com');
    };

    return (
        <div className='footer' ref={ref}>
            <p className='title'>I am always open to new opportunities and new learnings</p>
            <Button 
                title='Hire me' 
                clickHandler={onClick} 
                link='mailto: gauravmadarkal@gmail.com'
                toast='Email-id copied to clipboard!!'
            />
            <p className='end'>Designed and developed by Gaurav Madarkal</p>
        </div>
    )
});

export default Footer;