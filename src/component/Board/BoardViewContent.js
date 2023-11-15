import './BoardDetail.css'
import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Comment from '../Comment/Comment';

const BoardViewContent = ({boardId}) =>{
    // 게시판 상세정보 데이터
    const [ boardData, setBoardData] = useState([{}]);

    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');

    //반납 - 캘린더
    const [returnDate, setReturnDate] = useState(new Date())



    const handlerChangeTitle = e => {
        setTitle(e.target.value)
        if (content == null) {
            setContent(content)
        }
    }
    const handlerChangeContent = e => {
        setContent(e.target.value)
        if (title == null) {
            setTitle(title)
        }
    }

    // 페이지 이동
    const navigate = useNavigate();

    // 게시판 데이터 가져오기
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/board/detail/${boardId}`)
        .then(res => {
            // console.log("111111111111111111111111111111111111111111")
            if (res.data == 'DELETE') {
                alert('삭제된 게시물입니다:)')
                navigate('/board');
            }
            //로그인 x - 목록 buttonChk = 1
            else if(sessionStorage.getItem('userId') == null ){
                setButtonChk("1")
                setBoardData(res.data)
            }
            //로그인 0
            //로그인 0 - 로그인 user = 게시물 작성자 user
            else if(Number(sessionStorage.getItem('userId')) == res.data[0]["userId"]){
                // alert("목록 / 수정 / 삭제")
                console.log(sessionStorage.getItem('userId'),"==",res.data[0]["userId"], "=> ", (sessionStorage.getItem('userId')==res.data[0]["userId"]))
                setButtonChk("2")
                setBoardData(res.data)
            }
            //로그인 0 - 로그인 user != 게시물 작성자 user
            else {
                //게시물 : 대여가능한경우
                if(res.data[0]["rent"] == "active"){    
                    // alert("대여")
                    setButtonChk("3")       
                } else if (res.data[0]['rent'] == 'disable') {
                    setButtonChk("0")
                }
                 //게시물 : 대여중인경우
                else{
                    //게시물 : 대여중인경우 - 대여한 사람인경우
                    if(res.data[0]["rentusreId"] == sessionStorage.getItem('userId')){
                        // alert("반납")
                        setButtonChk("4")  
                    }
                    //게시물 : 대여중인경우 - 대여하지 않은 사람인경우
                    else{
                        // alert("대여중")
                        setButtonChk("5") 
                    }
                }
                setBoardData(res.data)
            }
        }).catch(err => console.log(err));
    }, [])

    // 상태변수사용해서 textarea 활성하기
    const [edit,setEdit] = useState(true);

    //버튼 
    const [buttonChk, setButtonChk] = useState("0")

    // 수정불가능상태 edit=false
    const handlerEdit = () => {
            setEdit(!edit);
    };
    //수정가능상태 edit=true
    const handlerEditFinish= () =>{
        // 수정완료 후 데이터 변경
        axios.put(`http://127.0.0.1:5000/boardEdit/${boardId}`, {title : title, content : content}, { headers: { 'Content-Type': 'application/json' } })
        .then(res => {
            setEdit(!edit);
            setBoardData(res.data)
        }).catch(err => console.log(err));

        // window.location.reload();
    }
    
    const handlerDel = () => {
        if (sessionStorage.getItem('userId') == boardData[0].userId) {
            // 게시물 삭제
            axios.delete(`http://127.0.0.1:5000/boardDelete/${boardId}`)
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
    
    const handlerRent =() => {
        if (sessionStorage.getItem('userId') == null){
            alert("로그인하신 후 이용해주세요");
        }
        else{
            // alert("대여 가능");
            console.log(returnDate)
            axios.put(`http://127.0.0.1:5000/boardrent/${sessionStorage.getItem('userId')}`, {boardId:boardId, returnDate:returnDate}, { headers: { 'Content-Type': 'application/json' } })
            .then(response => {
                console.log(response.data)
                if (response.data === 'SUCCESS') {
                    alert('대여를 완료했습니다.')
                    navigate(0)
                }
            }).catch(error => console.log(error))
        }
    }
    const handlerRenting =() => {
        alert("대여 중 입니다.")
    }
    const handlerReturn =() => {
        
        axios.delete(`http://127.0.0.1:5000/boardreturn/${boardId}`)
        .then(response => {
            console.log(response.data)
            if (response.data === 'SUCCESS') {
                alert('물품을 반납했습니다.');
                navigate(0);
            }
        }).catch(error => console.log(error))

    }
    return(
        <>
        <div className='BoardView'>
            <div className="BoardViewContent">
                <div className='title'>
                    <dl>
                        <dt>제목</dt>
                        <dd>
                            {edit && (<textarea disabled className="title" value={boardData[0].title}></textarea>)}
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
                {edit && (<textarea disabled value={boardData[0].content}></textarea>)}
                {!edit && (<textarea defaultValue={boardData[0].content} onChange={handlerChangeContent}></textarea>)}
                
            </div>
            <div className='comment'>
            <Comment boardId={boardId}/>
            </div>
            </div>
            <div className="BoardViewButtons">
                <Link to={'/board'} ><input type="button" id="back" className="list" value="목록"/></Link>
                {/* {게시물 작성자 = 사용자} */}
                {/* 수정가능한상태 */}
                {(buttonChk=="2")&& (!edit) && (<input type="button" id="edit" className="notList" value="수정완료" onClick={handlerEditFinish} />)}
                {/* 수정불가능한상태 */}
                {(buttonChk=="2")&&(edit) && (<input type="button" id="edit" className="notList" value="수정하기" onClick={handlerEdit} />
                )}
                {(buttonChk=="2")&&(edit) && (<input type="button" id="delete" className="notList" value="삭제" onClick={handlerDel} />
                )}

                {/* {게시물 작성자 != 사용자} */}
                {(buttonChk=="5")&&(<input type="button" id="renting" className="notList" value="대여중" onClick={handlerRenting} />
                )}
                {(buttonChk=="4")&&(<input type="button" id="return" className="notList" value="반납" onClick={handlerReturn} />
                )}
            
                {(buttonChk=="3")&&(<input type="button" id="rent" className="notList" value="대여" onClick={handlerRent} />
                )}
                {(buttonChk=="3")&&(<DatePicker dateFormat='yyyy/MM/dd' minDate={new Date()} className='datePicker' selected={returnDate} onChange={date => setReturnDate(date)}><div style={{ color: "red" }}>Don't forget to check your return date!</div></DatePicker>
                )}
            </div>
        
        </>
    );
};
export default BoardViewContent;