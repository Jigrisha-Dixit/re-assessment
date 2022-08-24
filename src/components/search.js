import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {search} from './createSlice'
function Search(){
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const handleChange=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    
    return(
        <div>
        <h1>
            Please search here!!
        </h1>
        <div>
            <input type='text' placeholder="enter the product name" onChange={(e)=>handleChange(e)}></input>
            </div>
            <button>search</button>
        
        </div>
    )
}
export default Search