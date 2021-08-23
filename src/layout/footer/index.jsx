import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import Button from '../common/Button';
import style from './style.scss';

const Footer = () => {
    const {
        toastState
    } = useContext(GlobalContext);

    const onClick = () => {
        navigator.clipboard.writeText('gauravmadarkal@gmail.com');
    };

    return (
        <div className='footer'>
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
};

export default Footer;