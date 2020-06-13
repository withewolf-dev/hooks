import React,{useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';
import {MovieContext} from '../Contexts/MovieProvider'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor:'#161616'
      
    },
    text:{
        color:'yellow'
    }
})

export default function TitleBar(props) {
    const classes = useStyles()
    const {title,id}= useContext(MovieContext)
    //console.log(url)
    return (
       <Card className={classes.root}>
           <CardContent>
               <Typography variant="h5" component="h2" className={classes.text}>
                   {id}
               </Typography>
           </CardContent>
       </Card>
    )
}