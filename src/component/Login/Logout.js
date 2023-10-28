
const LoginOut = () => {
    
    // onLogout();

    const onLogout = () => {
        alert('로그아웃되었습니다:)');
        sessionStorage.removeItem('userId');
        document.location.href = '/';
    }

    return (
        <>
        {onLogout()}
        </>
    );
}

export default LoginOut;