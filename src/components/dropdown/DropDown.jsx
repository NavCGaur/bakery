//React imports
import {React, useState, useEffect} from 'react'

import {Link} from 'react-router-dom';


//Style import
import './DropDown.css'


function DropDown(props) {

  const dropDownData = props.dropDownData;
  const pageId = props.pageId;
  const title = props.title;

  const [mouseOver, setMouseOver]= useState(false); 

  function handleMouseEnter(){
    setMouseOver(true);
  }

  function handleMouseOut(){
    setMouseOver(false);
  }


    return (
            <div className='dropdown-container'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
                <p href={pageId} className='header__products'   tabIndex={0}>
                    {title}
                </p>  
                <div className={mouseOver?'dropdown__visible':'dropdown__hidden'}  >
                

                  {dropDownData.map((listItem,index)=> <li key={index.listItem}>
                                                                                <Link to={`/${listItem.link}`}> {listItem.productName}</Link>
                                                                              </li> )}
                </div>





            </div>

            
    )

}

export default DropDown