import React from 'react'
import ProductCard from '../cart/product-card/product-card'
import "./category-detail.style.scss"
export const CategoryDetail = ({ title, product }) => {

  return (
    <div className='category-preview-container'>
    <h2>
      <span className='title'>{title.toUpperCase()}</span>
    </h2>
    <div className='preview'>
      {product
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
  )
}
