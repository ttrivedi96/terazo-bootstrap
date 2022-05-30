import React from 'react'
import './Section2.css'
import imgProduct from './img_product.jpg'
import imgPattern1 from './img_pattern1.png'
import imgPattern2 from './img_pattern2.png'
import bg from './img_bg2.png'

const Section2 = () => {
    return (
        <div className='Container'>
            <img src={bg} className="bg" alt="img" />
            <img src={imgPattern1} className="imgPattern1" alt="img" />
            <img src={imgProduct} className="img_product" alt="img" />
            <img src={imgPattern2} className="imgPattern2" alt="img" />
        </div>
    )
}

export default Section2