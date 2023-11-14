import { useState } from "react";
import { FiCornerDownLeft } from "react-icons/fi";
import './Comment.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CommentWrite = ({boardId}) => {
    const navigate = useNavigate();
    const [comment, setComment ] = useState('');
    const handlerComment = e => {setComment(e.target.value)}
    const clickComment = () => {
        if ( sessionStorage.getItem('userId') === null ) {
            alert('로그인을 해주세요:)');
            navigate('/login');
        } else {
            axios.post('http://127.0.0.1:5000/commentWrite',{userId:sessionStorage.getItem('userId'), boardId:boardId, content:comment, })
            .then(response => {
                console.log(response.data);
                alert('댓글입력이 완료되었습니다.');
                navigate(0);
            }).catch(error => console.log(error));
        }
    }
    
    return (
        <>
            <div className="comment_write">
                <input type="text" placeholder="댓글을 입력해주세요." value={comment} onChange={handlerComment} />
                <button type="submet" onClick={clickComment}><FiCornerDownLeft/></button>
            </div>
            
        </>
    );
}

export default CommentWrite;