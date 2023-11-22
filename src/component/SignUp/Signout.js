import axios from "axios";

const SignOut = () => {

    const onSignout = () => {
        alert('회원 탈퇴되었습니다:)')
        axios.delete(`http://127.0.0.1:5000/signout/${sessionStorage.getItem('token')}`)
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
        sessionStorage.removeItem('token');
        document.location.href = '/'
    }
    return (
        <>
        {onSignout()}
        </>
    );

}

export default SignOut;