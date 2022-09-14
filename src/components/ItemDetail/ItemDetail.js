import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


// COMPONENTES
import ItemCounts from '../ItemCounts/ItemCounts'
import { Link } from 'react-router-dom';


const ItemDetail = ({data}) => { 
  
  const [buy, setBuy] = useState(true);

  
  return(    
    <Card sx={{ maxWidth: 340, maxHeight: 500, margin: 2}}>
      <CardMedia
        component="img"
        alt="dataiculo"
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
      {buy ? <ItemCounts name={data.title} bolean={setBuy}/> :  <CardActions className='card'>
      <Link to={"/cart"}><button className='btn'>ir a carrito </button></Link>       
                    
      </CardActions>}
     
           
    </Card>
  );
    
}

export default ItemDetail;
