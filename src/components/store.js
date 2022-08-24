import { configureStore } from "@reduxjs/toolkit";
import ProdReducer from './createSlice';
const store= configureStore({
    reducer:{
        prod:ProdReducer
    }
});
export default store