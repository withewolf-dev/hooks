import React,{useState} from 'react'

export const LangContext = React.createContext()

export  function LangProvider(props){

    const [lang,setlang]=useState('english')

    const changeLang=(e)=>{
        setlang(e.target.value)
    }

    return(
        <LangContext.Provider
        value={{lang,changeLang}}
        >
            {props.children}
        </LangContext.Provider>
    )
}

