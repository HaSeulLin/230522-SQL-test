import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function HeaderNav() {

    const user = useSelector((state)=>(state.user.user));

  return (
    <div className='header'>
        <Link to='/'>HOME</Link>
        <Link to='/main'>MAIN</Link>
        {
            user ? 
            <Link to='/main'>{user.email}</Link>
            : <Link to='/loginform'>LOGIN</Link>
        }
    </div>
  )
}
