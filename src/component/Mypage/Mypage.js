import { useEffect, useState } from 'react';
import './Mypage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Mypage = () => {
    const [rentList, setRentList] = useState('')
    const [userName, setUserName] = useState('')

    useEffect(() => {

        axios.get(`http://127.0.0.1:5000/mypage/${sessionStorage.getItem('userId')}`)
        .then(res => {
            console.log(typeof(sessionStorage.getItem('userId')))
            setRentList(res.data)
        }).catch(error => console.log(error));
        
        axios.get(`http://127.0.0.1:5000/mypage/chageName/${sessionStorage.getItem('userId')}`)
        .then(res => {
            console.log(res.data["name"])
            setUserName(res.data["name"])
        }).catch(error => console.log(error));

    }, []);
    
    return (
        <>
            <div className="mypage_list_wrap">
                <div class="greenContainer">
                    <div>
                    <div class="user">user</div>
                    <div class="name">{userName}</div>
                    </div>    
                    <div class="pwChange"><Link to='/changepassword' style={{ textDecoration: "none", color: "white"}}>비밀번호 변경</Link></div>
                </div>
                <div className="rentList">
                    <div class="title">대여현황
                    </div>
                    {console.log("rentlist",rentList)}
                    {rentList != "" ? (
                        <div className="list">
                        <div className="top">                    
                            <div className="list_rent">대여 목록</div>
                            <div className="writer">글쓴이</div>
                            <div className="rentAt">대여일</div>
                            <div className="returnAt">반납일</div>
                        </div>
                        {
                        rentList.map((rent, idx) => (
                            <div className="board_body" key={idx}>
                                <div className="list_rent" ><Link to={`/board/detail/${rent.boardId}`} style={{ textDecoration: "none", color: "black"}}>{rent.title}</Link></div>
                                <div className="writer">{rent.ID}</div>
                                <div className="rentAt">{rent.rentAt}</div>
                                <div className="returnAt">{rent.returnAt}</div>
                            </div>
                        ))
                        }
                    </div>) : <h1>대여목록이 없습니다.</h1>}
                </div>
            </div>
        </>
    );
}

export default Mypage;