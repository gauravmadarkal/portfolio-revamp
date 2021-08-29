import React, { useState, useEffect } from 'react';
import './style.scss';
import Quote from '../../images/icons/quote.png';
import { getLink, recommendations } from '../../constants';

const Recommendations = () => {
    const [currentIndex, setIndex] = useState(0);
    // const 
    useEffect(() => {
        setTimeout(() => {
            if (currentIndex === recommendations.length - 1) {
                setIndex(0)
            } else {
                setIndex(currentIndex + 1);
            }
            const el = document.querySelector('.rec');
            el.classList.remove('hide');
        }, 10000);
    }, [currentIndex]);



    useEffect(() => {
        setTimeout(() => {
            const el = document.querySelector('.rec');
            el.classList.add('hide');
        }, 9000);
    }, [currentIndex]);


    return (
        <div className='recommendations'>
            <p className='title'>What do the people I have worked with say about me?</p>
            <div className='wrapper'>
                <img 
                    src={Quote} 
                    alt='Recommendations for Gaurav' 
                    className='quote'
                />
                <div className='rec'>
                    <p className='rec_content'>
                        {recommendations[currentIndex].content}
                        <a href={getLink('linkedin')} className='seemore' target='_blank' rel='noreferrer'>
                            ...See more
                        </a>
                    </p>
                    <div className='desc'>
                        <p className='given_by'>- {recommendations[currentIndex].givenBy}</p>
                        <p className='position'>{recommendations[currentIndex].userDesc}</p>
                    </div>
                </div>
                <img 
                    src={Quote} 
                    alt='Recommendations for Gaurav' 
                    className='quote inv'
                />
            </div>
        </div>
    )
};

export default Recommendations;