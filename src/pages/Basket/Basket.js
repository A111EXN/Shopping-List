import React from 'react'
import './basket.css'

function Basket(foodId) {

  return (
    <div className='basket-page'>
      <h1 className='basket-title'>In Your Basket</h1>
      <li className='basket-items'>list1</li>
      <li className='basket-items'>list2</li>
      <li className='basket-items'>list3</li>
    </div>
  )
}

export default Basket