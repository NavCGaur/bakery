import React from 'react'

import Logo from '../../assets/logo.png'
import LandingImage from '../../assets/landingImage.jpg'
import wave from '../../assets/wave.jpg'



import './Main2.css'


function main2() {
  return (
    <div className='main' id='Home'> 
      <header className='main__header'>        

        <nav className='main__nav'>
          
          <div className='main__navLinks'>
            <div className='main__pageStatus hidden'></div>
            <a href='#home'>HOME</a>
          </div>

          <div className='main__navLinks'>
            <div className='main__pageStatus hidden'></div>
            <a href='#story'>OUR STORY</a>
          </div>


          <div className='main__navLinks hidden'>
            <div className='main__pageStatus'></div>
            <a href='#products'>PRODUCTS</a>
          </div>

          <div className='main__navLinks hidden'>
            <div className='main__pageStatus'></div>
            <a href='#contact'>CONTACT US</a>
          </div>

        </nav>

      </header>
      
    

          <svg  className='svg' width="100%" height="20" viewBox="0 0 1920 30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none'>

<path d="M0 28.7961C21.3345 13.1467 42.6655 -2.50265 64 1.68987C85.3344 5.8824 106.666 29.9185 128 28.7961C149.334 27.6722 170.666 1.38821 192 1.68987C213.334 1.99154 234.666 28.8756 256 28.7961C277.334 28.715 298.666 1.66879 320 1.68987C341.334 1.71096 362.666 28.801 384 28.7961C405.334 28.7896 426.666 1.68825 448 1.68987C469.334 1.6915 490.666 28.7961 512 28.7961C533.334 28.7945 554.666 1.68987 576 1.68987C597.334 1.68987 618.666 28.7961 640 28.7961C661.334 28.7945 682.666 1.68987 704 1.68987C725.334 1.68987 746.666 28.7961 768 28.7961C789.334 28.7945 810.666 1.68987 832 1.68987C853.334 1.68987 874.666 28.7961 896 28.7961C917.334 28.7945 938.666 1.68987 960 1.68987C981.334 1.68987 1002.67 28.7945 1024 28.7961C1045.33 28.7961 1066.67 1.68987 1088 1.68987C1109.33 1.68987 1130.67 28.7945 1152 28.7961C1173.33 28.7961 1194.67 1.68987 1216 1.68987C1237.33 1.68987   1258.67 28.7945 1280 28.7961C1301.33 28.7961 1322.67 1.68987 1344 1.68987C1365.33 1.68987 1386.67 28.7945 1408 28.7961C1429.33 28.7961 1450.67 1.6915 1472 1.68987C1493.33 1.68825 1514.67 28.7896 1536 28.7961C1557.33 28.801 1578.67 1.71096 1600 1.68987C1621.33 1.66879 1642.67 28.715 1664 28.7961C1685.33 28.8756 1706.67 1.99154 1728 1.68987C1749.33 1.38821 1770.67 27.6722 1792 28.7961C1813.33 29.9185 1834.67 5.8824 1856 1.68987C1877.33 -2.50265 1898.67 13.1467 1920 28.7961"  stroke="#D81B60" stroke-width="1" fill="#FFF5E6"/>
</svg>



      <div className='main__midSection'>

          <div className='main__midSection-left'>
            <img src={Logo} />
          </div>
          <div className='main__midSection-right'>
            <p>We bring your <br/>
            sweetest dreams to life.</p>
            <a href='#products'>CHECK OUR PRODUCTS</a>
          </div>
      </div>





    </div>
  )
}

export default main2