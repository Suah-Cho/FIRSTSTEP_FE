import { useState } from "react";
import './Signup.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [ ID, setID] = useState('');
    const [ password, setPassword] = useState('');
    const [ password_confirm, setPasswordConfirm] = useState('');
    const [ name, setName] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');

    const handlerChangeID = e => {setID(e.target.value)}
    const handlerChangePassword = e => {setPassword(e.target.value)}
    const handlerChangePasswordConfirm = e => {setPasswordConfirm(e.target.value)}
    const handlerChangeName = e => {setName(e.target.value)}
    const handlerChangePhoneNumber = e => {setPhoneNumber(e.target.value)}

    const navigate = useNavigate();

    const gohome = () => navigate('/');
    const reload = () => navigate('/signup');

    
    const showResponse = response => {
        const statusnum = response.data.status
        if (statusnum === 200){
            alert(response.data.msg)
            //redirect to home
            gohome()
        }else{
            alert(response.data.msg)
            //redirect to signup
            reload()
        }

    }
    const postUser = () => {
        axios.post('http://127.0.0.1:5000/signup', 
        {ID: ID, password: password, password_confirm: password_confirm, name: name, phoneNumber: phoneNumber }
        , { headers: { 'Content-Type': 'application/json' } })
        .then(response => {
            console.log(response)
            showResponse(response);
        }).catch(err => console.log(err));
    }

    return (
        <>
            <div className="signup">
                <h1>회원가입</h1>
                <div className="signup_info">
                    <h2>아이디</h2>
                    <input fw-filter="isFill&amp;isFill&amp;isMin[4]&amp;isMax[16]&amp;isIdentity" fw-label="아이디" fw-msg="" className="inputTypeText" placeholder="" value={ID} required onChange={handlerChangeID}/>
                    <p>영문소문자+숫자 / 4~16자리</p>
                    
                    <h2>비밀번호</h2>
                    <input fw-filter="isFill&amp;isMin[4]&amp;isMax[16]" fw-label="비밀번호" fw-msg="" autoComplete="off" maxLength="16" value={password} type="password" required onChange={handlerChangePassword}/>
                    
                    <h2>비밀번호 확인</h2>
                    <input fw-filter="isFill&amp;isMatch[passwd]" fw-label="" fw-msg="비밀번호가 일치하지 않습니다." autoComplete="off" maxLength="16" value={password_confirm} type="password" required onChange={handlerChangePasswordConfirm}/>

                    <h2>이름</h2>
                    <input type="text" value={ name } required onChange={handlerChangeName}/>

                    <h2>휴대전화</h2>
                    <input type="text" value={phoneNumber} required onChange={handlerChangePhoneNumber}/>
                    <p>'-'없이 숫자만 입력해주세요.</p>

                </div>
            </div>
                <div className="bt_wrap">
                    <button type="submit" className="on" onClick={postUser}>회원가입</button>
                    <a href="/">취소</a>
                </div>
        </>
    );
}


export default SignUp;