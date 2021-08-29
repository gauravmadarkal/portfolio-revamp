import React from 'react';
import './style.scss';
import Linkedin from '../../images/icons/linkedin.png';
import Facebook from '../../images/icons/facebook.png';
import Github from '../../images/icons/github.png';
import Instagram from '../../images/icons/instagram.png';
import { getLink } from "../../constants";

const SocialLinks = ({ classn }) => {
    return (
        <div className={`${classn} social_icons`}>
            <a className='icon_link' href={getLink('facebook')} target='_blank' rel='noreferrer'>
                <img src={Facebook} className='icon' alt='social icon' />
            </a>
            <a className='icon_link' href={getLink('linkedin')} target='_blank' rel='noreferrer'>
                <img src={Linkedin} className='icon' alt='social icon' />
            </a>
            <a className='icon_link' href={getLink('instagram')} target='_blank' rel='noreferrer'>
                <img src={Instagram} className='icon' alt='social icon' />
            </a>
            <a className='icon_link' href={getLink('github')} target='_blank' rel='noreferrer'>
                <img src={Github} className='icon' alt='social icon' />
            </a>
            <div className='divider' />
        </div>
    );
}

export default SocialLinks;