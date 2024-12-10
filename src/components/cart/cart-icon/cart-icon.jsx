import React, { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import "./cart-icon.styles.scss"
import { CartContext } from '../../../contexts/cart-product';

export const  Carticon = () => {
    const {cartItemCount} = useContext(CartContext)
    const { isDropdown, setDropdown } = useContext(CartContext);
   
    const toggeldropdown = () => {
       setDropdown(!isDropdown)
    }
 
   
  return (
    <div className='cart-icon-container' onClick={toggeldropdown}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{cartItemCount}</span>
  </div>
  )
}
