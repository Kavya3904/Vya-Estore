import React, { useContext } from 'react'

import { CheckoutItem } from '../../components/checkout-item/checkout-item';
import { CartContext } from '../../contexts/cart-product';

import "./checkout.style.scss"

export  const  ChekoutPage =() => {
 const {cartItems,cartTotal} = useContext(CartContext)
    return (
        <div className='checkout-container'>
          <div className='checkout-header'>
            <div className='header-block'>
              <span>Product</span>
            </div>
            <div className='header-block'>
              <span>Description</span>
            </div>
            <div className='header-block'>
              <span>Quantity</span>
            </div>
            <div className='header-block'>
              <span>Price</span>
            </div>
            <div className='header-block'>
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
          <div className='total'>TOTAL: ${cartTotal}</div>
        </div>
      );
  
}
