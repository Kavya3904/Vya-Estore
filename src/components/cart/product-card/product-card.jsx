import './product-card.styles.scss';

import Button from '../../Button/button-component';
import { useContext } from 'react';
import { CartContext } from '../../../contexts/cart-product';

const ProductCard = ({ product }) => {

  const {addcartItem} = useContext(CartContext)
  const { name, price, imageUrl } = product;
  const addProductToCart  = ()=>addcartItem(product)

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart} >Add to card</Button>
    </div>
  );
};

export default ProductCard;
