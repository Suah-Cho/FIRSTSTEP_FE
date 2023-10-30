import './BoardDetail.css'
import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const BoardViewContent = ({boardId}) =>{
    // 게시판 상세정보 데이터
    const [ boardData, setBoardData] = useState([{}]);

    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');

    const handlerChangeTitle = e => {setTitle(e.target.value)}
    const handlerChangeContent = e => {setContent(e.target.value)}

    // 페이지 이동
    const navigate = useNavigate();

    // 게시판 데이터 가져오기
    useEffect(() => {
        axios.post('/boardDetail', {id : boardId}, { headers: { 'Content-Type': 'application/json' } })
        .then(response => {
            setBoardData(response.data)
        }).catch(err => console.log(err));
    }, [])

    // 상태변수사용해서 textarea 활성하기
    const [edit,setEdit] = useState(true);
    console.log('초기',edit)


    // 수정불가능상태 edit=false
    const handlerEdit = () => {
        if (sessionStorage.getItem('userId') == boardData[0].userId) {
            setEdit(!edit);
        } else {
            alert('게시물 작성자만 수정이 가능합니다:)')
        }
    };
    //수정가능상태 edit=true
    const handlerEditFinish= () =>{
        // 수정완료 후 데이터 변경
        axios.post('/boardEdit', {title : title, content : content, boardId: boardId }, { headers: { 'Content-Type': 'application/json' } })
        .then(response => {

            console.log("HI I AM BOARDEDIT API");
            console.log(response);
        }).catch(err => console.log(err));

        setEdit(!edit);
        window.location.reload();
    }
    
    const handlerDel = () => {
        if (sessionStorage.getItem('userId') == boardData[0].userId) {
            // 게시물 삭제
            axios.post('/boardDelete', {boardId: boardId}, { headers: { 'Content-Type': 'application/json' } })
            .then(response => {
                // console.log("HI I AM BOARDDELETE API");
                // console.log('handlerDel',response);
            }).catch(err => console.log(err));

            alert('삭제되었습니다.');
            navigate('/board');
        } else {
            alert('게시물 작성자만 삭제가 가능합니다:)')
        }
        
    };    
    
    return(
        <>
            <div className="BoardViewContent">
                <div className='title'>
                    <dl>
                        <dt>제목</dt>
                        <dd>
                            {edit && (<textarea readOnly className="title" value={boardData[0].title}></textarea>)}
                            {!edit  && (<textarea className="title" defaultValue={boardData[0].title} onChange={handlerChangeTitle}></textarea>)}
                        
                        </dd>
                    </dl> 
                </div>
                <div className="info">
                    <dl>
                        <dt>번호</dt>
                        <dd>{boardData[0].boardId}</dd>
                    </dl>
                    <dl>
                        <dt>글쓴이</dt>
                        <dd>{boardData[0].ID}</dd>
                    </dl>
                    <dl>
                        <dt>작성일</dt>
                        <dd>{boardData[0].createAt}</dd>
                    </dl>
                    <dl>
                        <dt>지역</dt>
                        <dd>{boardData[0].location}</dd>
                    </dl>
                </div>
                {edit && (<textarea readOnly value={boardData[0].content}></textarea>)}
                {!edit && (<textarea defaultValue={boardData[0].content} onChange={handlerChangeContent}></textarea>)}
                
            </div>
            {/* 버튼 목록 수정 삭제 수정완료 */}
            <div className="BoardViewButtons">
                <Link to={'/board'} ><input type="button" id="back" className="list" value="목록"/></Link>
                {/* 수정가능한상태 */}
                {!edit && (<input type="button" id="edit" className="notList" value="수정완료" onClick={handlerEditFinish} />)}
                {/* 수정불가능한상태 */}
                {edit && (<input type="button" id="edit" className="notList" value="수정하기" onClick={handlerEdit} />
                )}
                {edit && (<input type="button" id="delete" className="notList" value="삭제" onClick={handlerDel} />
                )}
            </div>
        </>
    );
};
export default BoardViewContent;