import React from 'react';


const ItemCounts = () => {  
   
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
    alert(`se agrego  ${counter}`)
    console.log(`se agrego  ${counter}`)               
    }  

    const agregarCantidad = () => {        
    onAdd(counter)               
    }  

        return (
    
         <div className='CounterSection'>
            <h1>Desafio Contador</h1>             
            <p>Contador : {counter}</p>                               
             <div className="btn-section">
              <button onClick={aumentar}> Aumentar </button>
              <button onClick={restar}> Restar </button>
              <button onClick={agregarCantidad}> agregar </button>
             </div>          
        </div>           
             
        );      
}

export default ItemCounts;