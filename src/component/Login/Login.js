import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
    const [ userId, setUserId ] = useState('');
    const [ userPW, setUserPW ] = useState('');

    const handlerUserId = e => { setUserId(e.target.value) }
    const handleruserPW = e => { setUserPW(e.target.value) }

    const onClickLogin = () => {
        axios.post('/login', { userId : userId , userPW : userPW }, { headers: { 'Content-Type': 'application/json' } })
        .then(response => {
            console.log(response.data)
            if (response.data === 'NONUSER') {
                alert('회원가입을 해주세요:)');
                document.location.href = '/signup'
            } else if (response.data == 'SIGNOUTUSER') {
                alert('탈퇴된 회원입니다.')
                document.location.href = '/'
            } else {
                console.log(response.data.userId, response.data.ID);
                sessionStorage.setItem('userId', response.data.userId);
                document.location.href = '/'
            }
            
        }).catch(error => console.log(error));
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <div className="login_info">
                <h2>ID</h2>
                <input type="text" placeholder="아이디를 입력해주세요." value={userId} onChange={handlerUserId} required/>
                <h2>PW</h2>
                <input type="text" placeholder="비밀번호를 입력해주세요." value={userPW} onChange={handleruserPW} required/>
            </div>
            <div className="login_bt">
                <button className="on" onClick={onClickLogin}>로그인</button>
                <Link to="/"><button className="cancle ">취소</button></Link>
            </div>
        </div>
    );
}

export default Login;