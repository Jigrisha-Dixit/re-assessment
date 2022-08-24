import { createSlice } from "@reduxjs/toolkit";
import prodData from "./data";
const ProdSlice=createSlice({
    name:'product',
    initialState:{
        data:prodData
    },
    reducer:{
        search:(state,action)=>{
            state.data=state.data.filter(item=>item.title===action.payload.title)
        }
        
    }
})
export default ProdSlice.reducer
export const {search}=ProdSlice.actions