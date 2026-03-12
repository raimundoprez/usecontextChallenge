import {createContext, useContext, useState} from "react";

const ThemeContext = createContext();
const ThemeValues = ["light", "dark"];

function ThemeProvider({children}) {
    const [theme, setTheme] = useState(0);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

const useTheme = () => useContext(ThemeContext);

export {ThemeValues, ThemeProvider, useTheme};