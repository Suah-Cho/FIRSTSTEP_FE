import { useEffect, useState } from "react";
import CommentWrite from "./ComentWrite";
import CommentList from "./CommentList";
import axios from "axios";
import CommentPagination from "./CommentPagination";

const Comment = ({boardId}) => {
    const [ comments, setComments ] = useState({});
    const [ page, setPage ] = useState(1);
    const limit = 5;
    const startat = ( page - 1 ) * limit;


    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/boardlist/${boardId}/commentlist`)
        .then(response => {
            setComments(response.data)
            console.log(response.data)
        }).catch(error => console.log(error));
    },[])

    const item = Object.values(comments);


    return (
        <>
            <CommentWrite boardId={boardId} />

            {
                item.slice(startat, startat + limit ).map((comment, idx) => {
                    if (comment.userId == sessionStorage.getItem('userId')) {
                        return <CommentList comment={comment} idx={idx} isuser={true}/>
                    } else {
                        return <CommentList comment={comment} idx={idx} isuser={false}/>
                    }
                })
            }

            <CommentPagination total={item.length} limit={limit} page={page} setPage={setPage} />
        </>
    );
}

export default Comment;