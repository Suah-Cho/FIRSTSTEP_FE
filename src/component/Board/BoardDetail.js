import React from "react";
import BoardViewContent from "./BoardViewContent";
import './BoardDetail.css'
import { useParams } from "react-router-dom";
import Comment from "../Comment/Comment";

const BoardDetail = () =>{
    const {boardId} = useParams();

    return(
        <>
                <div className="BoardWrap">  
                    <BoardViewContent boardId={boardId}/>
                </div>
        </>
    );
}
export default BoardDetail;
