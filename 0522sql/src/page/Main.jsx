import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { logout } from '../slices/userSlice';

export default function Main() {

    const user = useSelector((state)=>(state.user.user));
    // console.log(user);
    // console.log(user.email);
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Main</h1>
        {
            user ?
              <div>
                <h3>{user.email}님 로그인에 성공하였습니다.</h3>
                <button
                  onClick={()=>dispatch(logout())}
                  className='button'
                >로그아웃</button>
              </div>
            :
            <div>
              <h3>로그인해야 볼 수 있는 페이지입니다.</h3>
              <Link to='/loginform' className='button'>회원가입/로그인하기</Link>
            </div>
        }
    </div>
  )
}
