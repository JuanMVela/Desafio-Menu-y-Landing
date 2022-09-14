import React from 'react';


const ItemCounts = ({bolean, name}) => {  
   
    const [counter, setCounter] = React.useState (0);

    let stock = 4;
    

    const aumentar = () => {
    
    if (counter < stock) {
        setCounter(counter + 1);      
    }else {alert("Limite de Stock " + counter)}
   
}

    const restar = () => {        
    if (counter > 0) {
        setCounter(counter - 1);               
    }  
}

    const onAdd = () => {      
    alert(`se agrego  ${counter} / ${name}`)
    console.log(`se agrego  ${counter} / ${name}`)
    bolean(false)               
    }  

    const agregarCantidad = () => {        
    onAdd(counter, name)                
    }  



    

        return (
    
         <div className='CounterSection'>                       
            <p>Cantidad : {counter}</p>                               
             <div className="btn-section">
              <button className='btn' onClick={aumentar}> + </button>
              <button className='btn' onClick={restar}> - </button>
              <button className='btn' onClick={agregarCantidad}> agregar </button>              
             </div>          
        </div>           
             
        );      
}

export default ItemCounts;