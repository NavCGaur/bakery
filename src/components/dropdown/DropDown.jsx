//React imports
import {React, useState} from 'react'
import { useProduct } from '../../product-context/ProductContext';


//Style import
import './DropDown.css'


function DropDown(props) {

  const dropDownData = props.dropDownData;
  const title = props.title;

  const [mouseOver, setMouseOver]= useState(false); 

  const productContext = useProduct();
  
  function handleMouseEnter(){
    setMouseOver(true);
  }

  function handleMouseOut(){
    setMouseOver(false);
  }


    return (
            <div className='dropdown-container'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
                <p className='header__products'   tabIndex={0}>
                    {title}
                </p>  
                <div className={mouseOver?'dropdown__visible':'dropdown__hidden'}  onClick={handleMouseOut}>
                

                  {dropDownData.map((listItem,index)=> <li key={index}>
                  <a href='#products' onClick={() => productContext.setProduct(listItem.productCategory)}>
                  {listItem.productCategory}</a>
                   </li> )}
                </div>

            </div>

            
    )

}

export default DropDown