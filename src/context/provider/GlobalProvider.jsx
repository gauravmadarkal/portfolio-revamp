import React, { useState } from 'react';
import GlobalContext from '../GlobalContext';

const GlobalProvider = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<GlobalContext.Provider
			value={{
				menuState: [menuOpen, setMenuOpen],
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
};

export default GlobalProvider;