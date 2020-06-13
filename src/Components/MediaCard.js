import React,{useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
//import logo from '../MainPage/logo.svg'
import {MovieContext} from '../Contexts/MovieProvider'


const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    paddingLeft:'30px'
  },
  cover: {
    width: 340,
    height:351,
  },
}));

export default function MediaCard() {

 // const{sd,s} =useContext(MovieContext)

  const classes  = useStyles();
  return (
    <Card className={classes.root}>
    <CardMedia
        className={classes.cover}
        image='as/as'
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
      </div>
      
    </Card>
  );
}