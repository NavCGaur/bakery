import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import './App.css';

import Main2 from '../src/container/main2/Main2'
import About from '../src/container/about/About'

import Products from '../src/container/products/Products'


function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <Main2 />
      <About />
    </div>

    </BrowserRouter>
  );
}

export default App;
