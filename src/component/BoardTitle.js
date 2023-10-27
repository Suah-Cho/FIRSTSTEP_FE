import './BoardDetail.css'

const BoardTitle = () =>{
    return(
        <div className="BoardTitle" style={ {width: 1000, margin: '30px auto'}}>
            <strong>공지사항</strong>
            <p>공지사항을 빠르고 정확하게 안내해드립니다.</p>  
        </div>
    );
}
export default BoardTitle;