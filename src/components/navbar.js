import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                   
                    
                    <ul className="right" >
                       
                        <li><Link to="/cart"className='cp2' style={{paddingLeft: 13, textDecoration: 'none', color:'white', paddingTop:10}}>My cart</Link></li>
                        <li><Link to="/search" className='cp2' style={{paddingLeft: 13, textDecoration: 'none', color:'white', paddingTop:10}}>Search</Link></li>
                        <li><Link to="/cart" className='cp2' style={{paddingLeft: 13, textDecoration: 'none', color:'white' , paddingTop:10}}><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;