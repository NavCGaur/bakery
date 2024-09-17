import React from 'react';
import './Products.css';
import { useProduct } from '../../product-context/ProductContext';

export default function Products(props) {
  const { product, setProduct } = useProduct(); // Extract both product and setProduct from context
  const productsData = props.productsData;

  function handleVisibleProducts(productCategory) {
    setProduct(productCategory); // Update product category when clicked
  }

  return (
    <div className='products' id='products'>
      <div className='products__topSection'>
        <p>OUR SPECIALITIES - {product}</p>
      </div>
      <div className='products__bottomSection'>
        <div className='products__bottomSection-left'>
          <h2>Categories</h2>
          <h3 className='products__allProducts' onClick={() => handleVisibleProducts('All Products')}>All Products</h3>
          <h3 className='products__cakes' onClick={() => handleVisibleProducts('Cakes')}>Cakes</h3>
          <h3 className='products__pastries' onClick={() => handleVisibleProducts('Pastries')}>Pastries</h3>
          <h3 className='products__biscuits' onClick={() => handleVisibleProducts('Biscuits and Cookies')}>Biscuits and Cookies</h3>
          <h3 className='products__specialOccasions' onClick={() => handleVisibleProducts('Special Occasions')}>
            <i>Special Occasions</i>
          </h3>
        </div>
        <div className='products__bottomSection-right'>
          {productsData
            .filter((item) => product === 'All Products' || item.category === product) // Filter products by selected category
            .map((productItem, index) => (
              <div className='products__bottomSection-grid' key={index}>
                <img src={productItem.image} alt={productItem.name} />
                <p>{productItem.name}</p>
                <p>{productItem.price} &nbsp; {productItem.weight}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
