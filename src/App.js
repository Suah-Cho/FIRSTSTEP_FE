import React, {useState, useEffect} from "react";
import Layout from "./component/Layout";
import { Route, Routes } from "react-router-dom";
import PostList from "./component/PostList";
import Header from "./component/Header";
import Home from "./component/Home";

function App() {
  
  return (
    <>
      <Routes>
        <Route element={<Header/>}>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<PostList/>} />
          <Route path="/board/detail" element={<PostList/>}>
            <Route path=":boardId" element={<PostList/>} />
          </Route>
          <Route path='/toyrent' element={<PostList/>} />
          <Route path='/login' element={<PostList/>} />
          <Route path='/signup' element={<PostList/>} />


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
  