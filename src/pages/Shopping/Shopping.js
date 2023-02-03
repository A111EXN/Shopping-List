import React,{useEffect,useState} from 'react'
import { getDocs,collection,query,orderBy } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { db } from '../../config/firebaseConfig'
import './shopping.css'


function Shopping() {

  
  const [shoppingCategories,setShoppingCategories]=useState([])
  const navigate=useNavigate()



  useEffect(() => {
        
    const categoriesRef = collection(db,"categories")
    const q = query(categoriesRef,orderBy("createdAt","desc"))

    getDocs(q,categoriesRef)
    .then(res=>{
        const categories = res.docs.map(item=>({
            // id:item.id,
            ...item.data()
        }))
        setShoppingCategories (categories)
        console.log(categories)

    })
    .catch(err=>console.log(err))
}, [])


  return (
    <div className='shopping-page'>
        <h1 className='shopping-title'>Browse Categories</h1>
        <div className="shopping-grid-parent">
          {
            shoppingCategories?.map(item=>{
              return <div onClick={()=>navigate(`/categories/${item.name}`)} className='shopping-grid-child'>
                <img src={item.iconUrl}/>
                <p>{item.name}</p>

              </div>
            })
          }


        </div>
    </div>
  )
}

export default Shopping