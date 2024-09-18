import React from 'react';
import './Products.css';
import { useProduct } from '../../product-context/ProductContext';

import  {productsData} from '../../data/productsData'

export default function Products() {
  
  const { product, setProduct } = useProduct(); // Extract both product and setProduct from context

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
          <h3 className={'All Products'===product?'products__category highlight':'products__category'} onClick={() => handleVisibleProducts('All Products')}>All Products</h3>
          <h3 className={'Cakes'===product?'products__category highlight':'products__category'}  onClick={() => handleVisibleProducts('Cakes')}>Cakes</h3>
          <h3 className= {'Pastries'===product?'products__category highlight':'products__category'} onClick={() => handleVisibleProducts('Pastries')}>Pastries</h3>
          <h3 className={'Biscuits and Cookies'===product?'products__category highlight':'products__category'} onClick={() => handleVisibleProducts('Biscuits and Cookies')}>Biscuits and Cookies</h3>
          <h3 className= {'Special Occasions'===product?'products__category highlight':'products__category'} onClick={() => handleVisibleProducts('Special Occasions')}>Special Occasions</h3>
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
