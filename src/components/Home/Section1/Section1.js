import React from 'react'
import './Section1.css'
const Section1 = () => {
    return (
        <section className='container' >
            <p className="section1p">
                <span style={{ color: '#080A60' }}>Your</span>{' '}
                <span style={{ color: '#1a60f6' }}> Exclusive Access </span> to <br />{' '}
                Premium Private Market Investments
            </p>
            <span className="section1span text-center">
                Fractionalizing Real Estate, VC Funds and Private Companies with the
                help of secure blockchain technology.
            </span>
            <div className="inputField">
                <input placeholder="Enter your email address" />
                <button>Request invite</button>
            </div>
        </section>
    )
}

export default Section1