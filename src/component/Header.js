import { Link, Outlet } from "react-router-dom";

const Header = () => {
    return(
        <>
        <header style={{marginLeft:'auto', marginRight : 'auto'}}>
          <h2>한걸음 대여소</h2>
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