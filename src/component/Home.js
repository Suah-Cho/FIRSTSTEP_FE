import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [ isLogin, setIsLogin ] = useState(false);
    const [ userId , setUserId ] = useState('');

    const authCheck = () => {
        if (sessionStorage.getItem('userId') === null) {
            console.log('로그인한 유저 없음')
        } else {
            setIsLogin(true);
            setUserId(sessionStorage.getItem('userId'))
            console.log("로그인 사용 중")
        }
    };

    useEffect(() => {
        authCheck();
    })

    const onLogout = () => {
        sessionStorage.removeItem('userId')
        document.location.href = '/'
    }


    return (
        <>
        <div>
            
            <h2>this is homepage</h2>
            <div>
                {
                    isLogin ? <h2>{userId}<button onClick={onLogout}>로그아웃</button></h2> : <h2>로그인해주세요.</h2>
                }
            </div>
        </div>
        </>
    );
}

export default Home;