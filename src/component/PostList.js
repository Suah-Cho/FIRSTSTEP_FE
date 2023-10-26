import axios from "axios";
import { useEffect, useState } from "react";
import './Table.css';
import { Link } from "react-router-dom";



function PostList() {
    const [ posts, setPosts ] = useState({});

    useEffect(() => {
        axios.get('/members')
        .then(responce => {
            setPosts(responce.data)
        }).catch(error => console.log(error));
    }, []);

    const item = Object.values(posts);
    
    const headersName = ['글 번호', '제목', '작성자', '지역', '작성일'];

    return (
        <>
        {
            item.map(item => {console.log(item)})
        }

        <table className="table">
            <thead>
                <tr>
                    {headersName.map((header, idx) => <td key={idx} className="tableHeader">{header}</td>)}
                </tr>
            </thead>
            <tbody>
                {
                item.map(post => (
                    <tr key={post.boardId} className="tableRow">
                        <td className="tableColumn">{post.boardId}</td>
                        <td>{post.title}<Link to={`/board/detail/${post.boardId}`}/></td>
                        <td>{post.ID}</td>
                        <td>{post.location}</td>
                        <td>{post.date}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
        </>
    );
}

export default PostList;
