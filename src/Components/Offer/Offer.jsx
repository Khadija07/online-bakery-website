import React from 'react'
import './Offer.css'
import exclusive from '../../assets/purple.png'
import image from '../../assets/autumnCake.png'

const Offer = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>offers for you</h1>
            <p>only on best seller cakes</p>
            <button>check now</button>
        </div>
        <div className="offer-right">
            <img src={image} alt="" />
            
        </div>
      
    </div>
  )
}

export default Offer
