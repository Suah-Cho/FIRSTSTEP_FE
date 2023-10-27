import './BoardDetail.css'

const BoardViewButtons = () =>{

    const handlerGoList = () => {
        alert('목록으로 돌아갑니다');
    };
    const handlerEdit = () => {
        alert('수정합니다.');
    };
    const handlerDel = () => {
        alert('삭제됩니다');
    };

    return(
        <div className="BoardViewButtons">
            <input type="button" id="back" className="list" value="목록" onClick={handlerGoList} />
            <input type="button" id="edit" className="notList" value="수정" onClick={handlerEdit} />
            <input type="button" id="delete" className="notList" value="삭제" onClick={handlerDel} />
            
        </div>
    );
};
export default BoardViewButtons;