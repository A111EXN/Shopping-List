import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../config/firebaseConfig'
import { getDocs,query,where,collection, collectionGroup } from 'firebase/firestore'
import './categoriesDetail.css'


function CategoriesDetails() {

  const {categoryName}=useParams()
  const [categories,setCategories]=useState([])

  useEffect(() => {
    const categoriesRef = collection(db,"produce") 
    const q = query(categoriesRef,where("foodGroup","==",categoryName))
    getDocs(q,categoriesRef)
    .then(res=>{
      const foodGroup = res.docs.map(item=>({
          id:item.id,
          ...item.data()
      }))
      setCategories(foodGroup)
      console.log(foodGroup)
   })
   .catch(err=>console.log(err))
  }, [categoryName])

  return (
    <div className='category-page'>
      <h1 className='category-title'>{categoryName}</h1>  
          <div className='category-list-parent'>
            {
              categories?.map(item=>{
                return <div className='category-list-child' key={item.id}>
                  {item?.foodName}
                  <button>Add to Basket</button>
                  </div>
              })
            }
          </div>
    </div>
  )
}

export default CategoriesDetails