import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart_icon.png'
import cake from '../../assets/cake.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("cakes")

  return (
    <div className='navbar'>
        <div className='nav-logo-icon'>
            <img src={cake} alt="" />
            <p>KtK'S BAKERY</p>

        </div>
        {/* it will first change the stack based on click, then it will check menu, if menu matches with the condition, there will be a hr tag, i.e. line beneath the option */}
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("cakes")}}><Link style={{textDecoration: 'none'}} to='/'>Cakes</Link>{menu === 'cakes'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("pastries")}}><Link style={{textDecoration: 'none'}} to='/pastries'>Pastries</Link>{menu === 'pastries'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("snacks")}}><Link style={{textDecoration: 'none'}} to='/snacks'>Snacks</Link>{menu === 'snacks'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("events")}}><Link style={{textDecoration: 'none'}} to='/events'>Events</Link>{menu === 'events'?<hr/>:<></>}</li>

        </ul>
        <div className="nav-cart">
            <Link to='/login'><button>Log In</button></Link>
            <Link to='/cart'><img src={cart} alt="" /></Link>
            <div className="nav-cart-counts">0</div>
        </div>
      
    </div>
  )
}

export default Navbar
