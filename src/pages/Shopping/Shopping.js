import React,{useEffect,useState} from 'react'
import { getDocs,collection,query } from 'firebase/firestore'
import { db } from '../../config/firebaseConfig'
import './shopping.css'


function Shopping() {

  
  const [shoppingCategories,setShoppingCategories]=useState([])




  useEffect(() => {
        
    const categoriesRef = collection(db,"categories")
    const q = query(categoriesRef)

    getDocs(q,categoriesRef)
    .then(res=>{
        const categories = res.docs.map(item=>({
            id:item.id,
            ...item.data()
        }))
        setShoppingCategories (categories)
        console.log(shoppingCategories)

    })
    .catch(err=>console.log(err))
}, [])
















  return (
    <div className='shopping-page'>
        <h1 className='shopping-title'>Browse Categories</h1>
        <div className="shopping-grid-parent">


          {/* <div className='shopping-grid-child'>Fruits</div>
          <div className='shopping-grid-child'>Vegetables</div>
          <div className='shopping-grid-child'>Meat & Fish</div>
          <div className='shopping-grid-child'>Can & Cupboard</div>
          <div className='shopping-grid-child'>Household</div>
          <div className='shopping-grid-child'>Beverages</div>
          <div className='shopping-grid-child'>Snacks</div>
          <div className='shopping-grid-child'>Add Own</div> */}
        </div>
    </div>
  )
}

export default Shopping