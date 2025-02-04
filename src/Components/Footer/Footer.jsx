import React from 'react'
import './Footer.css'
import instagram from '../../assets/instagram_icon.png'
import whatsapp from '../../assets/whatsapp_icon.png'



const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src='' alt="" />
                <p>KTK's Bakery</p>
            </div>

            

        </div>
        <hr/>
        <div className="footer-bottom">
            <p className='bottom-left'>© KTKBAKERY. All rights reserved.</p>
            <div className="bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>

            <div className='icons'>
                <div className="footer-icons">
                    <img src={instagram} alt="" />
                </div>
                <div className="footer-icons">
                    <img src={whatsapp} alt="" />
                </div>
                
            </div>
            
        </div>
      
    </div>
  )
}

export default Footer
