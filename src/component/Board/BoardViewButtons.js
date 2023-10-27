import { Link } from 'react-router-dom';
import './BoardDetail.css'

const BoardViewButtons = ({boardDatas}) =>{
    console.log(boardDatas)

    const handlerEdit = () => {
        alert('수정합니다.');
    };
    const handlerDel = () => {
        alert('삭제됩니다');
    };

    return(
        <div className="BoardViewButtons">
            <Link to={'/board'} ><input type="button" id="back" className="list" value="목록"/></Link>
            <Link to={`/board/edit/${boardDatas.boardId}`}><input type="button" id="edit" className="notList" value="수정" /></Link>
            {/* <Link to={{
                pathname:`/board/edit/${boardDatas.boardId}`,
                state : {
                    'boardId' : boardDatas.boardId
                    // userId : boardDatas.userId,
                    // title : boardDatas.title,
                    // location : boardDatas.location,
                    // content : boardDatas.content
                }
            }}><input type="button" id="edit" className="notList" value="수정" /></Link> */}
            <input type="button" id="delete" className="notList" value="삭제" onClick={handlerDel} />
            
        </div>
    );
};
export default BoardViewButtons;