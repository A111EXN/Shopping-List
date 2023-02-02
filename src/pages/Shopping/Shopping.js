import React, { useState } from 'react'
import './shopping.css'


function Shopping() {

  
  const [shoppingCategories,setShoppingCategories]=useState([])
  return (
    <div className='shopping-page'>
        <h1 className='shopping-title'>Browse Categories</h1>
        <div className="shopping-grid-parent">
        <div className='shopping-grid-child'>Fruits</div>
        <div className='shopping-grid-child'>Vegetables</div>
        <div className='shopping-grid-child'>Meat & Fish</div>
        <div className='shopping-grid-child'>Can & Cupboard</div>
        <div className='shopping-grid-child'>Household</div>
        <div className='shopping-grid-child'>Beverages</div>
        <div className='shopping-grid-child'>Snacks</div>
        <div className='shopping-grid-child'>Add Own</div>
        </div>
    </div>
  )
}

export default Shopping