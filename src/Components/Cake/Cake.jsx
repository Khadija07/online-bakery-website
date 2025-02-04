import React from 'react'
import './Cake.css'
import handIcon from '../../assets/hand_icon.png'
import arrow from '../../assets/arrow.png'
import cakeImage from '../../assets/vintage.png'

const Cake = () => {
  return (
    <div className='cake'>
        <div className="cake-left">
            <h2>First Bite - Love</h2>
            <div>
                <div className="hand-icon">
                    <p>Taste</p>
                    <img src={handIcon} alt="" />
                </div>
                <p>The</p>
                <p>Delight</p>
            </div>

            <div className="cake-latest">
                <div>Menu</div>
                <img src={arrow} alt="" />
            </div>

        </div>

        <div className="cake-right">
            <img src={cakeImage} alt="" />

        </div>
      
    </div>
  )
}

export default Cake
