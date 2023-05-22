import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Home() {

  const user = useSelector((state)=>(state.user.user));

  return (
    <div>
        <h1>HOME</h1>
        <h3>로그인에 실패하면 HOME으로 돌아옵니다</h3>
        {
          user ? 
          <h4>{user.email}님 로그인했습니다.</h4>
          :
          <Link to='/loginform' className='button'>로그인</Link>
        }
    </div>
  )
}
