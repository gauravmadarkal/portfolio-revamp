import React from 'react';
import './style.scss';
import Linkedin from '../../images/icons/linkedin.png';
import Facebook from '../../images/icons/facebook.png';
import Github from '../../images/icons/github.png';
import Instagram from '../../images/icons/instagram.png';
import { getLink } from "../../constants";

const SocialLinks = () => {
    return (
        <div className='social_icons'>
            <a className='icon_link' href={getLink('facebook')} target='_blank'>
                <img src={Facebook} className='icon' />
            </a>
            <a className='icon_link' href={getLink('linkedin')} target='_blank'>
                <img src={Linkedin} className='icon' />
            </a>
            <a className='icon_link' href={getLink('instagram')} target='_blank'>
                <img src={Instagram} className='icon' />
            </a>
            <a className='icon_link' href={getLink('github')} target='_blank'>
                <img src={Github} className='icon' />
            </a>
            <div className='divider' />
        </div>
    );
}

export default SocialLinks;