import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCounts from '../ItemCounts/ItemCounts';

import './Item.css'



const Item = ({ data,img,description,plataform }) => {
  return (
    <Card sx={{ maxWidth: 600, margin: 10}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className='card'>
        <p>{plataform}</p>               
        <ItemCounts/>
      </CardActions>
      
    </Card>

  );
}

export default Item
