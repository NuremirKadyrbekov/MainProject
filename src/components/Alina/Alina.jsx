import React from 'react'
import { Carousel } from 'antd';
import pic1 from './aaa.avif'
import pic2 from './luna.avif'
import pic3 from './oaoaoa.avif'
import pic4 from './uuuuu.avif'
import './index.css'
 

const contentStyle = {
    width: '500px',
    height: '560px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  
 export const Alina = () => {
  return (
    <div className='main'>
         <h1 className='text'>Do you love landscape?</h1>
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src={pic1} alt="" /></h3>
      
    </div>
    <div>
      <h3 style={contentStyle}><img src={pic2} alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={pic4} alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={pic3} alt="" /></h3>
    </div>
  </Carousel>
    </div>
  )
}


