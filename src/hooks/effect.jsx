import React from 'react';


const useCustomEffects = (id, count) => {
    var x = 1;
	const intId = setInterval(() => {
		const ele = document.getElementById(`${id}_div_${x}`);
		if (ele) {
			ele.classList.add('appear')
		}
		if (x === count) {
			if (typeof window !== undefined) {
				window.clearInterval(intId)
			}
		}
		x += 1;
	}, 500);
};

export default useCustomEffects;