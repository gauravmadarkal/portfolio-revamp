import React, { useRef } from 'react';
import GlobalContext from '../GlobalContext';

const GlobalProvider = ({ navOpen, children }) => {
	const about_ref = useRef();
	const projects_ref = useRef();
	const history_ref = useRef();
	const contact_ref = useRef();
	return (
		<GlobalContext.Provider
			value={{
				navOpen,
				about_ref,
				projects_ref,
				history_ref,
				contact_ref
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
};

export default GlobalProvider;