import Navbar from "./navbar"
import React, { useState } from "react"
import './landingPage.css'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
function LandingPage(){
    const dispatch = useDispatch();
    const data= useSelector(state=>state.prod.data)
    const handleChange=(e)=>{
        e.preventDefault()
        return navigate('/search')
    }
const navigate=useNavigate();
    return(
        <div>
            <Navbar></Navbar>
           <div className="container">
                <div className="products">
                    {
                        data.map(item=>(
                            <div className="cp1">
                                <div className="im1">
                                    <img src={item.image} alt={item.name}></img>

                                </div>
                                <div>
                                    <h5 className="prdouctName"> {item.name}</h5>
                                    <h6>{item.Price}</h6>
                                    <button className="btn btn-info" onClick={(e)=>handleChange(e)}>ADD TO CART</button>
                                </div>
                                </div>
                        ))
                    }

                </div>
           </div>
        </div>
    )
}
export default LandingPage