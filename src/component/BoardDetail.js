import React, {useState, useEffect} from "react";
import axios from 'axios';
import BoardTitle from "./BoardTitle";
import BoardView from "./BoardView";
import './BoardDetail.css'
import { useParams } from "react-router-dom";

const BoardDetail = () =>{
    const {boardId} = useParams();
    // console.log('boardId : ',boardId);

    return(
        <>
            <div className="BoardWrap">  
                <BoardTitle />
                <BoardView boardId={boardId}/>
            </div>
        </>
    );
}
export default BoardDetail;