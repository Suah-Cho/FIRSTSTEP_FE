import axios from "axios";

const SignOut = () => {

    const onSignout = () => {
        alert('회원 탈퇴되었습니다:)')
        axios.post("/signout", {userId : sessionStorage.getItem('userId')})
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