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
      <Navbar/>
      <Routes>
 <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/productdetails/:id' element={<ProductDisplay/>}/>
      </Routes>
       
        {/* <Route path='/profile' element={<Profile/>}/> */}
     
      
    </div>
  )
}

export default App