import { Link } from 'react-router-dom';
import './BoardPostList.css';


const BoardList = ({item, startat, limit}) => {

    

    return (
        <>

        <div className="board_list_wrap">
                <div className="board_list">
                    <div className="top">
                        <div className="num">글 번호</div>
                        <div className="title">제목</div>
                        <div className="writer">글쓴이</div>
                        <div className="writer">지역</div>
                        <div className="date">작성일</div>
                    </div>
                    {
                    item.slice(startat, startat + limit ).map((post, idx) => (
                        <div className="board_body" key={idx}>
                            <div className="num">{post.boardId}</div>
                            <div className="title" ><Link to={`/board/detail/${post.boardId}`} style={{ textDecoration: "none", color: "black"}}>{post.title}</Link></div>
                            <div className="writer">{post.ID}</div>
                            <div className="count">{post.location}</div>
                            <div className="div">{post.createAt}</div>
                        </div>
                    ))
                    }
                </div>
            </div>
        
        </>
    );
}

export default BoardList;