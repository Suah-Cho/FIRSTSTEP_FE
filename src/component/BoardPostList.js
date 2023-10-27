import axios from "axios";
import { useEffect, useState } from "react";
import './Table.css';
import { Link } from "react-router-dom";
import BoardPagination from "./BoardPagination";



function BoardPostList() {
    const [ posts, setPosts ] = useState({});
    const [ limit, setLimit ] = useState(10);
    const [ page, setPage ] = useState(1);
    const startat = ( page - 1 ) * limit;

    useEffect(() => {
        axios.get('/boardlist')
        .then(responce => {
            setPosts(responce.data)
        }).catch(error => console.log(error));
    }, []);

    const item = Object.values(posts);
    
    const headersName = ['글 번호', '제목', '작성자', '지역', '작성일'];

    return (
        <>
        <div className="board_wrap" >
            <div className="board_title">
                <strong>공지사항</strong>
                <p>공지사항을 빠르고 정확하게 알려드립니다.</p>
            </div>
            <div className="board_list_wrap">
                <div className="board_list">
                    <div className="top">
                        <div className="num">글 번호</div>
                        <div className="title">제목</div>
                        <div className="writer">글쓴이</div>
                        <div className="writer">지역</div>
                        <div className="date">작성일</div>
                    </div>
                    {
                    item.slice(startat, startat + limit ).map(post => (
                        <div className="board_body">
                            <div className="num">{post.boardId}</div>
                            <div className="title">{post.title}<Link to={`/board/detail/${post.boardId}`}/></div>
                            <div className="writer">{post.ID}</div>
                            <div className="count">{post.location}</div>
                            <div className="div">{post.date}</div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
        

        <BoardPagination total={item.length} limit={limit} page={page} setPage={setPage} />

        </>
    );
}

export default BoardPostList;
