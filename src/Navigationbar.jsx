// 17) video-17 , part-1 product cart redux example project.

import React from 'react'
import "./Navigationbar.css"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Navigationbar() {
   
  const quantity = useSelector((state) =>state.myCart.items.reduce((sum, item) => sum + item.quantity, 0) );
  // const quantity = useSelector((state)=>state.cart.quantity)  // to access the store  we can used use selector.
  return (
    <>
      <nav className="navbar navbar-expand-lg amazon-navbar sticky-top">
        
        <a className="navbar-brand text-white" href="#">
          Amazon Clone
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Body */}
        <div className="collapse navbar-collapse" id="navbarText">
          
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/cart">Products</Link>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#">Contact</a>
            </li>
          </ul>

          {/* Cart Section */}
          <span className="navbar-text">
            <button className="btn btn-warning">
              <i className="bi bi-cart-fill mr-2"></i>
       <Link to="./cart">   Shopping Carts <span className="badge badge-light">{quantity}</span></Link>
            </button>
          </span>

        </div>
      </nav>
    </>
  )
}

export default Navigationbar
