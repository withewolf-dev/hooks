import React,{useState} from 'react'

export const LanguageContext = React.createContext()

export  function LanguageProvider(props) {

    const [isDark,setIsDark]=useState(false)

    const changeTheme=()=>{
        setIsDark(!isDark)
    }


    return (
        <LanguageContext.Provider
        value={{isDark,changeTheme}}
        >
            {props.children}
        </LanguageContext.Provider>
    )
}
