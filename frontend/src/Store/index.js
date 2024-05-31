import {configureStore} from '@reduxjs/toolkit'
import ItemsSlice from './ItemsSlice';
import CartSlice from './CartSlice';

const EcomStore=configureStore({
    reducer:{
        items:ItemsSlice.reducer,
        cart:CartSlice.reducer
    }
})

export default EcomStore;