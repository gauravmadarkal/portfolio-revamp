import React, { useState } from 'react';
import GlobalContext from '../GlobalContext';

const GlobalProvider = ({ navOpen, children }) => {
	return (
		<GlobalContext.Provider
			value={{
				menuState: [navOpen, () => {}],
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
};

export default GlobalProvider;