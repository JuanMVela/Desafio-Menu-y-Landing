import React from 'react'
import carrito from "../Assets/icons/carro-de-la-compra.png"

const CartWidget = () => {
  return (
      <img className='h-10 w-10' src={carrito} alt="carrito"/>
  )
}

export default CartWidget