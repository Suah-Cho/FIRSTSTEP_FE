import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [ userId, setUserId ] = useState('');
    const [ userPW, setUserPW ] = useState('');

    const handlerUserId = e => { setUserId(e.target.value) }
    const handleruserPW = e => { setUserPW(e.target.value) }

    const onClickLogin = () => {
        axios.post('/login', { userId : userId , userPW : userPW }, { headers: { 'Content-Type': 'application/json' } })
        .then(response => {
            console.log(response);
            sessionStorage.setItem('userId', userId);
            document.location.href = '/';
        }).catch(error => console.log(error));
    }

    return (
        <>
        <div>
            <h1>Login</h1>
            <div>
                <h2>ID</h2>
                <input type="text" placeholder="아이디를 입력해주세요." value={userId} onChange={handlerUserId} />
                <h2>PW</h2>
                <input type="text" placeholder="비밀번호를 입력해주세요." value={userPW} onChange={handleruserPW} />
            </div>
            <div className="br_wrap">
                <button className="on" onClick={onClickLogin}>로그인</button>
                <Link to="/"><button>취소</button></Link>
            </div>
        </div>
        </>
    );
}

export default Login;