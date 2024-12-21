import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Product from './Product';
import { fetchProductsRequest } from '../redux/actions/productAction';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
