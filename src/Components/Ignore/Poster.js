import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import PosterId from './PosterId'
import axios from 'axios'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '5px',
  },
  media: {
    height: 150,
 
  },
});

export default function MediaCard() {
  const classes = useStyles();

  const [poster,setposter]=useState([])

  const id = PosterId[Math.floor(Math.random() * PosterId.length)]
      
  

      useEffect(() => {
          const fetchData = async () => {
            const result = await axios(
              `https://imdb-api.com/en/API/Posters/k_9kb76Am3/${id}`,
            );
       
           // setposter(result.data);
            console.log(result.data.backdors[0])
            setposter(result.data.backdors[0])
          };
       
          fetchData();
        }, []); 
        

  return (
    <Card className={classes.root}>
      
        <CardMedia
          className={classes.media}
          image={poster.link}
          title="poster"
        />
    </Card>
  );
}
