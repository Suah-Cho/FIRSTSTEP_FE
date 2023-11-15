import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import BoardDetail from "./component/Board/BoardDetail";
import BoardPostList from "./component/Board/BoardPostList";
import BoardWrite from "./component/Board/BoardWrite";
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/signup";
import SignOut from "./component/SignUp/Signout";
import LoginOut from "./component/Login/Logout";
import Mypage from "./component/Mypage/Mypage"
import ChangePassword from "./component/Mypage/ChangePassword";

function App() {
  // const [ session, setSession ] = useState('suah');
  
  return (
    <>
      <Routes>
        <Route element={<Header/>}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/board" element={<BoardPostList/>} />
          <Route path='/board/write' element={<BoardWrite />} />
          <Route path="/board/detail/:boardId" element={<BoardDetail />} />
          <Route path='/toyrent' element={<BoardPostList/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/signout' element={<SignOut />} />
          <Route path='/logout' element={<LoginOut />} />
          <Route path="/mypage" element={<Mypage/>} />
          <Route path="/changepassword" element={<ChangePassword />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
