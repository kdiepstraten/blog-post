import './OverviewPage.css'
// import posts from '../constants/data.json';
import {Link, NavLink} from "react-router-dom";
// import blogpostDetailPage from "../BlogpostDetailPage/BlogpostDetailPage.jsx";
import {useState} from "react";
import axios from 'axios';



function OverviewPage() {
 const [posts, setPosts] = useState([]);
const [error, toggleError] = useState(false);
    async function fetchBlog() {

        try {
            const response = await axios.get('http://localhost:3000/posts');
            setPosts(response.data);
            console.log(response.data);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }
    async function test(){
        try {
            const response = await axios.get('http://localhost:8080/partij');
            console.log(response.data);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }
    return (
        <>
            <button onClick={()=> test()}>Test</button>
            <button type="button" className="btn-posts" onClick={fetchBlog}>POSTS</button>
            <div className="container">
                <p>Aantal posts: {posts.length}</p>
                {(posts).length > 0 && posts.map((post) => (

                    <div className="container-post" key={post.id}>
                        <Link to={`/blogposts/${post.id}`}>{post.title}</Link>
                        <p> ({post.author})</p>
                        <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                        {error && <p>Er is iets mis gegaan.... help!</p>}
                    </div>
                ))}
            </div>
        </>
    )
}

export default OverviewPage;