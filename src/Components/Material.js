import React, { useEffect,useContext } from "react";
import Grid from "@material-ui/core/Grid";
import MovieProvider from "../Contexts/MovieProvider";
import Title from "../Components/Title";
import MediaCard from "./MediaCard";
import {MovieContext} from '../Contexts/MovieProvider'
function Material(props) {

const {fetchData} = useContext(MovieContext)
  const query=props.searchQuery

  useEffect(()=>{
    passData()
  },[])

  const passData=()=>{
    fetchData(query)
  }
  return (
    <MovieProvider>
      <Grid container direction="column">
        <Grid item>
          <h1>navbar goes here</h1>
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <Title />
            <br />
            <MediaCard />
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
    </MovieProvider>
  );
}
export default Material;
