import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart-product";
import "./checkout-item.style.scss";
export const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { removeItemfromcart, addcartItem , decrementcartitem} = useContext(CartContext);
  const removeItemHandler = () => removeItemfromcart(cartItem);
  const addcarthandler = ()=> addcartItem(cartItem)
  const decrementItem = ()=> decrementcartitem(cartItem)
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={decrementItem} >
          &#10094;
        </div>
        <span className="value">{quantity} </span>
        <div className="arrow"  onClick={addcarthandler}>&#10095;</div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={removeItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
