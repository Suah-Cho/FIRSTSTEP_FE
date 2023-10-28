import styled from 'styled-components';
import backgroundImg from './Image/mainimg.jpg';
import './Home.css';

const Home = () => {


    return (
        <>  
        <div className='homepage'>
            <img src={backgroundImg}/>
        </div>
        </>
    );
}

export default Home;