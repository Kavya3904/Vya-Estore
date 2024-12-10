import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import './cart-dropdown.styles.scss';
import CartItem from '../cart-items/cart-items';
import { CartContext } from '../../../contexts/cart-product';
import Button from '../../Button/button-component';

export const Cartdropdown=() => {
    const {cartItems}=useContext(CartContext)
    console.log("cartItems",cartItems[0])
    const navigate = useNavigate();
    const navigateHandler = ()=>{
        navigate('/checkout')
    }
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
    <Button onClick={navigateHandler} >GO TO CHECKOUT</Button>
  </div>
)
}
