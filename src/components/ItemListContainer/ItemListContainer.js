import React, {useState, useEffect} from 'react'
import Spinner from '../Spinner/Spinner';
import ItemList from './ItemList/ItemList';


const ItemListContainer = ({greeting}) => {
  const [game, usegame] = useState([]);
  const[isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setIsLoading(true) 
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((response) => usegame(response))
        .catch((err) => console.error(err));
      }, []);
      setTimeout(()=>{            
        setIsLoading(false)
      },2000)
        
      console.log(game)
  return (
    <div>
      <h2 className='text-4xl text-center ml-4 underline font-serif'>{greeting}</h2>
      <div>
        {
          isLoading ? <Spinner/> : 
            <ItemList game={game}/>
        }
    </div>
    </div>
    )
}

export default ItemListContainer