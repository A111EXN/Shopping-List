import React from 'react'
import './homepagemaingrid.css'
import { FaShoppingBasket,FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom'



function HomePageMainGrid() {
  return (
    <div className='main-grid-page'>
      <div className="main-grid-parent">
          <Link className="main-grid-child" to={'/shopping'}> <FaShoppingBag className='main-grid-img'/> Browse Categories</Link>
          <Link className="main-grid-child" to={'/basket'}> <FaShoppingBasket className='main-grid-img'/> Basket</Link>
          <Link className="main-grid-child" to={'/contactUs'}>Contact Us</Link>
          <Link className="main-grid-child" to={'aboutUs'}>About Us</Link>
      </div>
    </div>
  )
}

export default HomePageMainGrid