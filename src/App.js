import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import BoardDetail from "./component/Board/BoardDetail";
import BoardPostList from "./component/Board/BoardPostList";
import BoardWrite from "./component/Board/BoardWrite";

function App() {
  // const [ session, setSession ] = useState('suah');
  
  return (
    <>
      <Routes>
        <Route element={<Header/>}>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<BoardPostList/>} />
          <Route path='/board/write' element={<BoardWrite />} />
          {/* <Route path="/board/edit/:boardId" element={<BoardEdit />} /> */}
          <Route path="/board/detail/:boardId" element={<BoardDetail />} />
          <Route path='/toyrent' element={<BoardPostList/>} />
          <Route path='/login' element={<BoardPostList/>} />
          <Route path='/signup' element={<BoardPostList/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;


// const [ datas, setDatas ] = useState([{}]);
  // const userinfo = {
  //   name: 'suah',
  //   ID : 'test123',
  //   password : '1234',
  //   phoneNumber : '01000001111'
  // }
  // const username = 'suah'

  // useEffect(() => {
  //   axios.get('/members')
  //   .then(res => {
  //     setDatas(res.data);
  //   }).catch(err => console.log(err));
  // }, []);

  // console.log('datas : ', datas);

  // const postMethod = () => {

  //     axios.post('/insert', userinfo).then((response) => {
  //       console.log(response.data)
  //   })
  //   .catch((error) => {
  //       console.log(error);
  //   });

  // }
  