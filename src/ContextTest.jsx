const ThemeContext = React.createContext('light')

function App () {
    return(
        <ThemeContext.Provider value="dart">
            <Toolbar/>
        </ThemeContext.Provider>
    )
}
function Toolbar() {
    return(
        <div>
            <ThemeButton />
        </div>
    )
}
function ThemeButton() {
    return (
        <ThemeContext.Consumer>
            {value=><button theme={value}/>}
        </ThemeContext.Consumer>
    )
}