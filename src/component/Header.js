import { Link, Outlet } from "react-router-dom";
import './Header.css';
import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const [ userId , setUserId ] = useState('');

  const [ isLogin, setIsLogin ] = useState(false);

  useEffect(() => {
    authCheck();
  }, [])

  const authCheck = () => {
    if (sessionStorage.getItem('userId') === null) {
        console.log('로그인한 유저 없음')
    } else {
        setIsLogin(true);
        getUserId();
        console.log("sessionStorage.getItem('userId') : " , sessionStorage.getItem('userId'))
      }
    };

  const getUserId = () => {
    axios.post('/checkid', { userId : sessionStorage.getItem('userId')}, { headers: { 'Content-Type': 'application/json' } })
    .then(response => {
        console.log(response.data.ID)
        setUserId(response.data.ID)
        // setUserId(response)
    })
  }

  return(
    <>
    <header>
    <Link to={'/'}><h2>한걸음 대여소</h2></Link>
    <Link to='/board'>| 공지사항 | </Link>
    <Link to='/toyrent'> | 장난감 대여소 | </Link>

    {
      
      isLogin ?  <div><Link to='/logout'> | 로그아웃 | </Link><Link to='/signout'> | 회원탈퇴 | </Link></div> : <div><Link to='/login'> | 로그인 | </Link><Link to='/signup'> | 회원가입 | </Link></div>
      
    }

    </header>
    <main>
      <Outlet />
    </main>

    </>
  );
}

export default Header;