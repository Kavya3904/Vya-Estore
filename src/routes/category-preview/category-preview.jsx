import { useContext, Fragment } from 'react';



import { ProductContext } from '../../contexts/products-context';
import { CategoryDetail } from '../../components/catogery-detail/category-detail';

const CategoriesPreview = () => {
  const { products } = useContext(ProductContext);

  return (
    <Fragment>
      {Object.keys(products).map((title) => {
        const product = products[title];
        return (
          <CategoryDetail key={title} title={title} product={product} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
