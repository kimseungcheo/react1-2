import { useContext } from "react";
import ThemeContext from "./ThemeContext"; // 올바르게 가져오기

export default function MainContent() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    if (!theme || !toggleTheme) {
        return <div>로딩 중...</div>;
    }

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: theme === 'light' ? 'white' : 'black',
                color: theme === 'light' ? 'black' : 'white'
            }}
        >
            <p>안녕하세요</p>
            <button onClick={toggleTheme}>테마변경</button>
        </div>
    );
}
