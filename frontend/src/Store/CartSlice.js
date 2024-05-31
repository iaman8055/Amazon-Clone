import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtoCart:(store,action)=>{

        },
        removeFromCart:(store,action)=>{

        }
    }
})

export const CartActions=CartSlice.actions;
export default CartSlice;