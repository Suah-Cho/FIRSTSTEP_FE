import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
    const [ ID, setID ] = useState('');
    const [ password, setPassword ] = useState('');

    const handlerID = e => { setID(e.target.value) }
    const handlerPW = e => { setPassword(e.target.value) }

    const onClickLogin = () => {
        axios.get(`http://127.0.0.1:5000/login/${ID}/${password}` )
        .then(response => {
            console.log(response.data)
            if (response.data === 'NON') {
                alert('일치하는 회원정보가 없습니다. 회원가입을 해주세요:)');
                document.location.href = '/signup'
            } else if (response.data == 'SINGOUT') {
                alert('탈퇴된 회원입니다.')
                document.location.href = '/signup'
            } else if (response.data == 'WRONG') {
                alert('비밀번호가 틀렸습니다.')
                document.location.href = '/login'
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
                <input type="text" placeholder="아이디를 입력해주세요." value={ID} onChange={handlerID} required/>
                <h2>PW</h2>
                <input type="password" placeholder="비밀번호를 입력해주세요." value={password} onChange={handlerPW} required/>
            </div>
            <div className="login_bt">
                <button className="on" onClick={onClickLogin}>로그인</button>
                <Link to="/"><button>취소</button></Link>
            </div>
        </div>
    );
}

export default Login;