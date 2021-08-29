import React, { forwardRef, useEffect, useState } from 'react';
import './style.scss';
import Arrow from '../../images/right-arrow.png';
import { history_info } from '../../constants';

const history_count = 3;
const History = forwardRef((props, ref) => {
    const [currentIndex, setCurrentIndex] = useState(1);

	const nextP = (inc) => {
        const ele1 = document.getElementById(`duration_${currentIndex}`);
        const ele2 = document.getElementById(`details_${currentIndex}`);
        ele1.classList.remove('show_div');
        ele2.classList.remove('show_div');
        setTimeout(() => {
            if (inc) {
                if (currentIndex === history_count) {
                    setCurrentIndex(1);
                } else {
                    setCurrentIndex(currentIndex + 1);
                }
            } else {
                if (currentIndex === 1) {
                    setCurrentIndex(history_count);
                } else {
                    setCurrentIndex(currentIndex - 1);
                }
            }
        }, 1000);
	}
    useEffect(() => {
        const ele1 = document.getElementById(`duration_${currentIndex}`);
        const ele2 = document.getElementById(`details_${currentIndex}`);
        ele1.classList.add('show_div');
        ele2.classList.add('show_div');
    }, [currentIndex]);

    return (
        <div className='history' id='history' ref={ref}>
            <p className='title'>
                History
            </p>
            <div className="history_content">
                <div className='index_inc'>
                    <div 
                        className={`box ${currentIndex === 1 ? 'disabled' : ''}`} 
                        onClick={() => nextP(false)}
                        onKeyDown={() => {}}
                        role='button'
                        tabIndex={0}
                    >
                        <img src={Arrow} className='inc_icon inv' alt='previous'/>
                    </div>
                    <div 
                        className={`box ${currentIndex === history_count ? 'disabled': ''}`} 
                        onClick={() => nextP(true)}
                        onKeyDown={() => {}}
                        role='button'
                        tabIndex={0}
                    >
                        <img src={Arrow} className='inc_icon' alt='next' />
                    </div>
                </div>
                <div className="duration" id={`duration_${currentIndex}`}>
                    <p>{history_info[currentIndex - 1].end}</p>
                    <div className='divider'/>
                    <p>{history_info[currentIndex - 1].start}</p>
                </div>
                <div className='details' id={`details_${currentIndex}`}>
                    <p className='position'>{history_info[currentIndex - 1].title}</p>
                    <p className='loc'>{history_info[currentIndex - 1].location}</p>
                    <p className='desc'>{history_info[currentIndex - 1].desc}</p>
                </div>
            </div>
        </div>
    )
});

export default History;