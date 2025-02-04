import { useState } from 'react'
import React from 'react'

import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CakesCategory from './Pages/CakesCategory'
import Product from './Pages/Product'
import Cakes from './Pages/Cakes'
import Cart from './Pages/Cart'
import Login from './Pages/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

      {/* providing routes to each element */}
      <Routes>
        <Route path='/' element={<Cakes/>}/>
        <Route path='/pastries' element={<CakesCategory category="pastries"/>}/>
        <Route path='/snacks' element={<CakesCategory category="snacks"/>}/>
        <Route path='/events' element={<CakesCategory category="events"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
      </BrowserRouter>

      
    </div>
  )
}
export default App
