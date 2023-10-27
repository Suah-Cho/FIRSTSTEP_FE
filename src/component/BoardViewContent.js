import './BoardDetail.css'

import React, {useState, useEffect} from "react";
import axios from 'axios';

const BoardViewContent = ({boardId}) =>{
    // const {boardId} = match.params;
    console.log("content boardid : ", boardId);

    // const boardId = 1;
    // 게시판상세정보
    const [ boardDatas, setBoardDatas] = useState([{}]);
    // 게시판 데이터 가져오기

    // useEffect((boardId) => {
    //     axios.get('/boardDetail?boardId=',boardId)
    //     .then(res => {

    //     console.log("===========================");
    //     console.log("res",res);
    //     setBoardDatas(res.data);
    //     console.log("res",res);
    //     setBoardDatas(res.data);
    //     }).catch(err => console.log(err));
    // }, []);

    const postBoardID = () => {
        axios.post('/boardDetail', {id : boardId}, { headers: { 'Content-Type': 'application/json' } })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    } 


    useEffect(() => {
        postBoardID()
        // console.log("boardid post")
        axios.get('/boardDetail')
        .then(response => {
            setBoardDatas(response.data)
        }).catch(err => console.log(err));
    }, [])

    console.log('BoardViewContent- boardDatas : ', boardDatas);

    return(
        <div className="BoardViewContent">
            <div className="title">
                {boardDatas[0].title}   
            </div>
            <div className="info">
                <dl>
                    <dt>번호</dt>
                    <dd>{boardDatas[0].boardId}</dd>
                </dl>
                <dl>
                    <dt>글쓴이</dt>
                    <dd>{boardDatas[0].userId}</dd>
                </dl>
                <dl>
                    <dt>작성일</dt>
                    <dd>{boardDatas[0].updateAt}</dd>
                </dl>
                <dl>
                    <dt>지역</dt>
                    <dd>{boardDatas[0].location}</dd>
                </dl>
            </div>
            <textarea readOnly value={boardDatas[0].content}></textarea>
        </div>
    );
};
export default BoardViewContent;