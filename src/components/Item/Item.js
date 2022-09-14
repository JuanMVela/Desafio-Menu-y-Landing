import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Item.css'



const Item = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 340, maxHeight: 500, margin: 2}}>
      <CardMedia
        component="img"
        alt="Articulo"
        height="100"
        image={data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='cardtitle'>
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions className='card'>
        <p>${data.price}</p>              
      </CardActions>     
    </Card>

  );
}

export default Item
