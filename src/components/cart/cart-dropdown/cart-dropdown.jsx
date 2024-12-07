import React, { useContext } from 'react'

import './cart-dropdown.styles.scss';
import CartItem from '../cart-items/cart-items';
import { CartContext } from '../../../contexts/cart-product';
import Button from '../../Button/button-component';

export const Cartdropdown=() => {
    const {cartItems}=useContext(CartContext)
    console.log("cartItems",cartItems[0])
   return (

    <div className='cart-dropdown-container'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
)
}
