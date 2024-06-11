import { useCallback, useState } from "react";
import MainContent from "./MainContent";
import ThemeContext from './ThemeContext';

export default function DarkOrLight() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MainContent />
        </ThemeContext.Provider>
    );
}
