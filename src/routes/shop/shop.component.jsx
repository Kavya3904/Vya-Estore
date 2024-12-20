import React, { useContext } from 'react'
import { ProductContext } from '../../contexts/products-contexr';
import "./shop.styles.scss"
import ProductCard from '../../components/cart/product-card/product-card';
export default function Shop() {
    const {products} = useContext(ProductContext);


  return (
     <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
