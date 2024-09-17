import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {ProductProvider} from './product-context/ProductContext'

import  {productsData} from './data/productsData'



import './App.css';

import Main2 from '../src/container/main2/Main2'
import About from '../src/container/about/About'
import Products from '../src/container/products/Products'
import DropDown from './components/dropdown/DropDown';


function App() {


  const dropDownData = [
    { productCategory: 'All Products' },
    { productCategory: 'Cakes' },
    { productCategory: 'Pastries' },
    { productCategory: 'Biscuits and Cookies' },
    { productCategory: 'Special Occasions' },
  ];

  return (
    <BrowserRouter>
    <ProductProvider>

    <div className="App">

      <Main2 />
      <About />
          <Products productsData={productsData} />
          <DropDown dropDownData={dropDownData} title="Products" />

  
      
    </div>
    </ProductProvider>


    </BrowserRouter>
  );
}

export default App;
