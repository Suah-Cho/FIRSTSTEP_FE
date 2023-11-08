import axios from "axios";
import { useEffect, useState } from "react";
import './BoardPostList.css';
import { useNavigate } from "react-router-dom";
import BoardPagination from "./BoardPagination";
import BoardList from "./BoardList";



function BoardPostList() {
    const [ posts, setPosts ] = useState({});
    const navigate = useNavigate();
    const limit = 10;
    const [ page, setPage ] = useState(1);
    const startat = ( page - 1 ) * limit;
    const [searchWordKey, setSearchWordKey] = useState('title');
    const [searchWord, setSearchWord] = useState('');

    const handlerSearchWord = (e) => {setSearchWord(e.target.value);}
    const handlerSearchWordKey = e => {setSearchWordKey(e.target.value);}
    const clickSearButton = () => {
        axios.get(`http://127.0.0.1:5000/boardlist/${searchWordKey}/${searchWord}`)
        .then(responce => {
            setPosts(responce.data)
        }).catch(error => console.log(error));

    }

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/boardlist')
        .then(responce => {
            setPosts(responce.data)
        }).catch(error => console.log(error));
    }, []);

    const item = Object.values(posts);

    const goBoardPostList = () => navigate('/login');

    const authCheck = () => {
        if ( sessionStorage.getItem('userId') === null ) {
            alert('로그인을 해주세요:)')
            goBoardPostList();
        } else {
            navigate('/board/write')
        }
    }
    

    return (
        <>
        <div className="board_wrap" >
            <div className="board_title">
                <strong>공지사항</strong>
                <p>공지사항을 빠르고 정확하게 알려드립니다.</p>
                <select value={searchWordKey} onChange={handlerSearchWordKey}>
                    <option key='title' value='title'>제목</option>
                    <option key='ID' value='ID'>작성자</option>
                    <option key='location' value='location'>위치</option>
                </select>
                <input type="text" placeholder="검색어를 입력해주세요." value={searchWord} onChange={handlerSearchWord}/>
                <button onClick={clickSearButton}>검색</button>
            </div>
            <BoardList item={item} startat={startat} limit={limit} se />

        </div>
        

        <BoardPagination total={item.length} limit={limit} page={page} setPage={setPage} />
        
        <div className="bt_wrap">
            <button className="on" onClick={authCheck}>등록하기</button>
        </div>
        </>
    );
}

export default BoardPostList;
