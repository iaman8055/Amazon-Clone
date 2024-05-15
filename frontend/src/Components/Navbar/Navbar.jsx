import React from 'react'
import {  IconButton,Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'

import './Navbar.css'
const Navbar = () => {
  return (
    <div className="Header">

        <IconButton>
            <Typography variant='h6' fontWeight={600} sx={{
              paddingRight:"100px"
            }}>LOGO</Typography>
        </IconButton>
        <div className="header-search">
        <SearchIcon/>
          <input className='header-searchInput' 
          type="text" placeholder='Search for products & brands'/>
        </div>
        <div className="header-login-cart">
          <Link to='/login'><button className='header-login'>Login</button></Link>
          <ShoppingCartIcon className='header-carticon'/>
          <div className="nav-cart-count"><span>0</span></div>
        </div>
    </div>
    
  )

}

export default Navbar