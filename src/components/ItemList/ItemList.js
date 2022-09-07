import React from 'react';


// COMPONENTES
import Item from '../Item/Item';


const ItemList = ({games,loading}) => {


  const array = games.splice(0,6);
  return(
  <div>{loading}
    
  {array.map((games) => {
    return <Item
     key={games.id}
     data={games.title}
     img={games.thumbnail}
     description={games.short_description}
     plataform={games.platform}/>;
    })}
    </div>)
      
}

export default ItemList
