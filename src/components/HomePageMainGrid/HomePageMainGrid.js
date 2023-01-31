import React from 'react'
import './homepagemaingrid.css'
import { FaShoppingBasket,FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom'



function HomePageMainGrid() {
  return (
    <div className='main-grid-page'>
      <div class="main-grid-parent">
          <Link class="main-grid-child" to={'/shopping'}> <FaShoppingBag className='main-grid-img'/> Browse Categories</Link>
          <Link class="main-grid-child" to={'/basket'}> <FaShoppingBasket className='main-grid-img'/> Basket</Link>
          <div class="main-grid-child">hi</div>
          <div class="main-grid-child">hi</div>
          <div class="main-grid-child">Contact Us</div>
          <div class="main-grid-child">About Us</div>
      </div>
    </div>
  )
}

export default HomePageMainGrid