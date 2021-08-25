import React, { useRef } from 'react';
import GlobalContext from '../GlobalContext';

const GlobalProvider = ({ navOpen, children }) => {
	return (
		<GlobalContext.Provider
			value={{
				navOpen,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
};

export default GlobalProvider;