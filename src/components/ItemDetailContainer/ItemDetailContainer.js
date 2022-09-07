import React, {useState, useEffect} from 'react';
import "./ItemDetailContainer.css"

// COMPONENTES

import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const[games, setGames] = useState([]);
  const[loading, setLoading] = useState(true);

    
    useEffect(() => {

      setTimeout (() => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '5f046da89amsh280e0123a3abaf0p11c90bjsn91205c5e87a8',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
      fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
        .then(response => response.json())
        .then(data => {setGames(data); setLoading(false);})
        .catch(err => console.error(err));
    },2000)
    
        
  
    },[]) 


  return (
    <div className='Cards-ContainerDetail'>
      < ItemDetail games= {games} loading= {loading}/>
      </div>
  )
}

export default ItemDetailContainer