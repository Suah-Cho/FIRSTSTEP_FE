import axios from "axios";

const SignOut = () => {

    const onSignout = () => {
        alert('회원 탈퇴되었습니다:)')
        axios.delete(`http://10.0.0.3:5000/signout/${sessionStorage.getItem('userId')}`)
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
        sessionStorage.removeItem('userId');
        document.location.href = '/'
    }
    return (
        <>
        {onSignout()}
        </>
    );

}

export default SignOut;