import './BoardDetail.css'
import BoardViewButtons from './BoardViewButtons';
import BoardViewContent from './BoardViewContent';

const BoardView = ({boardId}) =>{
    return(
        <div className="BoardViewWrap">
            <BoardViewContent boardId={boardId}/>
            <BoardViewButtons />
        </div>
    );
};
export default BoardView;