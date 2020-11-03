import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './homecard.css'
export default function HomeCard(props) {
  return (
    <div className="imgimg" style={{zIndex:1}}> 
    <Card className="root" >
        <Link to={props.url} style={{ textDecoration: 'none',color:'black' }}>
      <CardActionArea>
      <Typography gutterBottom variant="h5" component="h2" className="card__title">
            {props.title}
          </Typography>
        <CardMedia
          className="media"
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
         
          <Typography variant="body2" color="black" component="p" className="card__desc" >
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