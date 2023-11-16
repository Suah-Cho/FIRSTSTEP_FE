import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './ChangePassword.css';
import axios from "axios";

const ChangePassword = () => {
    const [constpassword, setConstPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const navigate = useNavigate();


    const handlerPassword = e => {setConstPassword(e.target.value)}
    const handlerNewPassword = e => {setNewPassword(e.target.value)}
    const handlerConfirmNewPassword = e => {setConfirmNewPassword(e.target.value)}

    const ChangePassword = () => {
        console.log('현재 비밀번호 일치')
        axios.put(`http://127.0.0.1:5000/changepassword/${sessionStorage.getItem('userId')}`, {newPassword:newPassword})
        .then(response => {
            console.log(response)
            if (response.data === "SUCCESS") {
                alert('비밀번호가 성공적으로 변경되었습니다.')
                navigate(-1)
            }
        }).catch(error => {
            console.log(error)
            alert('비밀번호 변경에 실패했습니다.')
            navigate(0)
        })
    }

    const onClickChnagePassword = () => {
        if (newPassword === confirmNewPassword) {
            axios.post(`http://127.0.0.1:5000/checkpassword/${sessionStorage.getItem('userId')}`, {constpassword:constpassword})
            .then(response => {
                if (response.data === 'CORRECT') {
                    ChangePassword();
                    // alert("현재 비밀번호가 일치합니다.")
                } else {
                    alert("현재 비밀번호가 일치하지 않습니다.")
                }
            }).catch(error => console.log(error))
            
        } else {
            alert('새로운 비밀번호가 일치하지 않습니다.')
        }
        
    }

    return (
        <>
        <div className="changepassword">
            <h1>비밀번호 변경</h1>
            <div className="changepassword_info">
                <h2>현재 비밀번호</h2>
                <input type="password" placeholder="현재 비밀번호를 입력해주세요." value={constpassword} onChange={handlerPassword} required/>
                <h2>새로운 비밀번호</h2>
                <input type="password" placeholder="새로운 비밀번호를 입력해주세요." value={newPassword} onChange={handlerNewPassword} required/>
                <h2>새로운 비밀번호 확인</h2>
                <input type="password" placeholder="새로운 비밀번호 확인해주세요." value={confirmNewPassword} onChange={handlerConfirmNewPassword} required/>
            </div>
            <div className="changepassword_bt">
                <button className="on" onClick={onClickChnagePassword}>확인</button>
                <Link to="/mypage"><button>취소</button></Link>
            </div>
        </div>
        </>
    )
}

export default ChangePassword;