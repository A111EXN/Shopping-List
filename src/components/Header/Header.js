import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom'
import './header.css'


function Header({categories}) {

    let navigate=useNavigate(); 

  return (
    <div className='header-container'>
        <FaHome className='home-icon' onClick={()=>navigate("/")}/>
        <div className='categories-container'>
          {
              categories.map(item=>{
                  return <Link key={item} className='nav-link' to={`/${item}`}>{item}</Link>
              })
          }
        </div>
        <button>Log in</button>
    </div>
  )
}

export default Header