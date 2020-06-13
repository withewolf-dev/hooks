import React,{useState} from 'react'

export const ThemeContext = React.createContext()

export  function ThemeProvider(props) {

    const [isDark,setIsDark]=useState(false)

    const changeTheme=()=>{
        setIsDark(!isDark)
    }


    return (
        <ThemeContext.Provider
        value={{isDark,changeTheme}}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}
