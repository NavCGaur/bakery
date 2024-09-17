import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState('All Products');
  
    return (
      <ProductContext.Provider value={{ product, setProduct }}>
        {children}
      </ProductContext.Provider>
    );
  };

export const useProduct = () => useContext(ProductContext);

