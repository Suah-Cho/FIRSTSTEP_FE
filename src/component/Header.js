import { Link, Outlet } from "react-router-dom";
import './Header.css';

const Header = () => {
    return(
        <>
        <header>
          <Link to={'/'}><h2>한걸음 대여소</h2></Link>
          <Link to='/board'> 공지사항 </Link>
          <Link to='/toyrent'> 장난감 대여소 </Link>
          <Link to='/login'> 로그인 </Link>
          <Link to='/signup'> 회원가입 </Link>

        </header>
        <main>
          <Outlet />
        </main>

        </>
    );
}

export default Header;