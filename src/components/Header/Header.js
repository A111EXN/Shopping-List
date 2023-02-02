import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'

import './header.css'


function Header({categories}) {

    let navigate=useNavigate(); 
    const [user]=useAuthState(auth)

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
        {
          user
          ? <div>
            <span className='username'>{user?.displayName ? user?.displayName : user?.email }</span>
            <button onClick={()=>signOut(auth)} className='logout-button' >Logout</button>
          </div>
          : <Link className='auth-link' to={`/auth`}>SignUp</Link>

        }
    </div>
  )
}

export default Header