import React from 'react'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Item from './Components/Item/Item'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import ProductDisplay from './Components/ProductDisplay/ProductDisplay'
import Profile from './Pages/Profile'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/productdetails' element={<ProductDisplay/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
      <Item/>
    </div>
  )
}

export default App