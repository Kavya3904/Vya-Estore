import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from "../../components/cart/product-card/product-card"


import './category.style.scss';
import { ProductContext } from '../../contexts/products-context';

const Category = () => {
  const { category } = useParams();
  console.log(category,"cat")
  const { products } = useContext(ProductContext);
  console.log(products)
  const [product, setProducts] = useState(products[category]);

  useEffect(() => {
    setProducts(products[category]);
  }, [category, products]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {product &&
          product.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
