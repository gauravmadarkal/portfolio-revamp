import React, { useState } from 'react';
import './style.scss';
import Arrow from '../../images/right-arrow.png';
import { history_info } from '../../constants';

const history_count = 3;
const History = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

	const nextP = (inc) => {
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
	}
    return (
        <div className='history'>
            <p className='title'>
                History
            </p>
            <div className="history_content">
                <div className='index_inc'>
                    <div className={`box ${currentIndex === 1 ? 'disabled' : ''}`} onClick={() => nextP(false)}>
                        <img src={Arrow} className='inc_icon inv' />
                    </div>
                    <div className={`box ${currentIndex === history_count ? 'disabled': ''}`} onClick={() => nextP(true)}>
                        <img src={Arrow} className='inc_icon' />
                    </div>
                </div>
                <div className="duration">
                    <p>{history_info[currentIndex - 1].end}</p>
                    <div className='divider'/>
                    <p>{history_info[currentIndex - 1].start}</p>
                </div>
                <div className='details'>
                    <p className='position'>{history_info[currentIndex - 1].title}</p>
                    <p className='loc'>{history_info[currentIndex - 1].location}</p>
                    <p className='desc'>{history_info[currentIndex - 1].desc}</p>
                </div>
            </div>
        </div>
    )
};

export default History;