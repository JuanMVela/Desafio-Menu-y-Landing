import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCounts from '../ItemCounts/ItemCounts';


const ItemDetail = ({products}) => {
 
  return(<Card sx={{ maxWidth: 400, margin: 10}}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="600"
      image={products.image}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {products.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {products.description}
      </Typography>
    </CardContent>
    <CardActions className='card'>
      <p>${products.price}</p>                 
      <ItemCounts/>
    </CardActions>
    
  </Card>
 
)}

export default ItemDetail
