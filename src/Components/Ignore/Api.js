import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

export default function Api() {
    const [api, setapi] = useState([]);

    const fetchData=(e)=>{
        e.preventDefault()

        axios.get(`https://imdb-api.com/en/API/SearchMovie/k_9kb76Am3/Inception 2010`)
        .then(response=>{
            console.log(response.data.results[0])
            setapi(response.data.results[0])
            
        })
       
    }

    return (
        <div>
            {/* <h1>hii</h1>
            {api.map((obj) => (
                <ul>
                    <h1>{obj.id}</h1>
                </ul>
            ))} */}
            <Button onClick={fetchData}> click</Button>
           <h1>{api.id}</h1>
           <h1>{api.title}</h1>
           
        </div>
    );
}



 // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios.get(
    //             "https://imdb-api.com/en/API/BoxOffice/k_9kb76Am3,",
    //         );

    //       // console.log(result.data.items.map((obj) => obj.id));
    //         //  const  id = (result.data.items.map((obj)=>
    //         //  obj.id))  
    //         const resultsArray= result.data.items.map(async(obj) => {
    //             return await axios.get(
    //                 `https://imdb-api.com/en/API/YouTubeTrailer/k_9kb76Am3/${obj.id}`,
    //             );
    //         })
    //         // .then((res) => {
    //         //     console.log(res.data.result);
    //         // });b
    //        console.log(resultsArray)
    //         //setapi(resultsArray)
    //     };

    //     fetchData();
    // }, []);