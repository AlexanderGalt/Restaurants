import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
	const [themeValue, setThemeValue] = useState("dark");
	const doToggleTheme = () => setThemeValue(themeValue => themeValue === "light" ? "dark" : "light");
	return (
		<ThemeContext.Provider value={{ themeValue, doToggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}