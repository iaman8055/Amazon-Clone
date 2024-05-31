import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";
const ItemsSlice=createSlice({
    name:'items',
    initialState:DEFAULT_ITEMS,
    reducers:{
        addInitialItems:(store,action)=>{
            return store;
        }
    }
})

export const ItemsActions=ItemsSlice.actions;
export default ItemsSlice;