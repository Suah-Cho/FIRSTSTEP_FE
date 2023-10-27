import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import BoardPostList from "./component/BoardPostList";

function App() {
  
  return (
    <>
      <Routes>
        <Route element={<Header/>}>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<BoardPostList/>} />
          <Route path="/board/detail" element={<BoardPostList/>}>
            <Route path=":boardId" element={<BoardPostList/>} />
          </Route>
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
  