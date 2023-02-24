import React from 'react'
import './other.css'

function Other() {

  return (
    <div className='other-page'>
        <h1 className='other-title'>Other</h1>
        <p className='other-text'>Please select a category and insert a product. we will save the under the selected category to make it easier to find next time</p>
        <select className='other-select'>
            <option>Fruits</option>
            <option>Vegetables</option>
            <option>Meat</option>
            <option>Cupboard</option>
            <option>Snacks</option>
            <option>Beverages</option>
            <option>Household</option>
        </select>
        <input className='other-input' type="text" placeholder='Produce Name'></input>
        <button className='other-button'>Submit</button>
    </div>
  )
}

export default Other