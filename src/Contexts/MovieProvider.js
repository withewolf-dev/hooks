import React, { useState, useEffect } from 'react'
import axios from "axios";

export const MovieContext = React.createContext()

export default function MovieProvider(props) {
const [api,setapi] = useState('')
//const searchQuery = props.match.params.name

    useEffect(()=>{
    //     const fetchData= async(m) =>{
        

    //       await axios.get(`https://imdb-api.com/en/API/SearchMovie/k_9kb76Am3/${m}`)
    //     .then(response=>{
    //         console.log(response.data.results[0])
    //         setapi(response.data.results[0])
            
    //     })
       
    // }
    fetchData()
    },[])

    const fetchData=(query)=>{

        axios.get(`https://imdb-api.com/en/API/SearchMovie/k_9kb76Am3/${query}`)
         .then(response=>{
             console.log(response.data.results[0])
             setapi(response.data.results[0])
            
         })
       
    }
   const id = api.id
   const title = api.title
    console.log(title)
    return (
        <MovieContext.Provider
        value={{title,id,fetchData}}
        >
            {props.children}
        </MovieContext.Provider>
    )
}
