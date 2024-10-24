import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [authValue, setAuthValue] = useState({ isAuth: false });
	const doToggleAuth = () => setAuthValue(authValue => authValue.isAuth ? { isAuth: false } : { isAuth: true, name: "someName" });
	return (
		<AuthContext.Provider value={{ authValue, doToggleAuth }}>
			{children}
		</AuthContext.Provider>
	)
}