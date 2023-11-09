import axios from 'axios';
import './BoardWrite.css';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BoardWrite = () => {
    const navigate = useNavigate();
    const [ title, setTitle ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ content, setContent ] = useState('');
    const [ userId, setUserId ] = useState('');

    const goBoardPostList = () => navigate(-1);

    const handlerChangeTitle = e => {setTitle(e.target.value)}
    const handlerChangeLocation = e => {setLocation(e.target.value)}
    const handlerChangeContent = e => {setContent(e.target.value)}

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/checkid/${sessionStorage.getItem('userId')}`)
        .then(responce => {
            setUserId(responce.data.ID)
        }).catch(error => console.log(error));
    }, []);

    const postData = () => {
        if (title === '') {
            alert('제목을 입력해주세요.');
        } else if (content === '') {
            alert('내용을 입력해주세요.');
        } else if (location === '') {
            alert('지역을 입력해주세요.');
        } else {
            axios.post('/boardWrite', {title : title, location : location, content : content, userId : sessionStorage.getItem('userId') }, { headers: { 'Content-Type': 'application/json' } })
            .then(response => {
                console.log(response);
                goBoardPostList();
            }).catch(err => console.log(err));
        }
        
    }


    return (
        <>
            <div className="board_write_wrap">
                <div className="board_write">
                    <div className="title">
                        <dl>
                            <dt>제목</dt>
                            <dd><input type="text" placeholder="제목을 입력해주세요." value={title} onChange={handlerChangeTitle} required /></dd>
                        </dl>
                    </div>
                    <div className="info">
                        <dl>
                            <dt>글쓴이</dt>
                            {/* session값 오면 넣기 */}
                            <dd>{userId}</dd> 
                        </dl>
                        <dl>
                            <dt>지역</dt>
                            <dd><input type="text" placeholder="지역 입력" value={location} onChange={handlerChangeLocation}/></dd>
                        </dl>
                    </div>
                    <div className="cont">
                        <textarea placeholder="내용을 입력해주세요." value={content} onChange={handlerChangeContent} required/>
                    </div>
                </div>
                <div className="bt_wrap">
                    <button onClick={postData} className='on'>등록</button>
                    <Link to='/board'><button>취소</button></Link>
                </div>
            </div>
        </>
    );
}

export default BoardWrite;