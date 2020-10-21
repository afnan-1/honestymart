import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './homecard.css'
const useStyles = makeStyles({
  root: {
    maxWidth: 360,
    minWidth:220,
    borderRadius:0,
    padding:15,
    backgroundColor:'white',
    zIndex:1,
    marginRight:'-10px'

  },
  media: {
    height: 300,
    objectFit:'cover',
  },
});

export default function HomeCard(props) {
  const classes = useStyles();

  return (
    <div className="container-lg" style={{zIndex:1}}> 
    <Card className={classes.root}>
        <Link to={props.url} style={{ textDecoration: 'none',color:'black' }}>
      <CardActionArea>
      <Typography gutterBottom variant="h5" component="h2" className="card__title">
            {props.title}
          </Typography>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
         
          <Typography variant="body2" color="black" component="p">
            Lizards are a widespread group of squamate reptiles,
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary">
          Explore More
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}