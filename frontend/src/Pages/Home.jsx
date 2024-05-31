import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import {useSelector} from 'react-redux'
import Item from '../Components/Item/Item'
const Home = () => {
  const items=useSelector(store=>store.items)
  return (
    <div>
        {items.map((item)=>(<Item key={item.id} item={item}/>))}

    </div>
  )
}

export default Home