import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../config/firebaseConfig'
import { getDocs,query,where,collection, collectionGroup } from 'firebase/firestore'
import './categoriesDetail.css'


function CategoriesDetails() {

  const {categoryName}=useParams()
  const [categories,setCategories]=useState('')

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
    <div>
      <div className='category-title'>{categoryName}</div>  
      <div>
      </div>
    </div>
  )
}

export default CategoriesDetails