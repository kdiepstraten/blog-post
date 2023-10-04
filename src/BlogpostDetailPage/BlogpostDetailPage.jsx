import './BlogpostDetailPage.css'
import {Link, useParams} from "react-router-dom";
import posts from "../constants/data.json"
import Date from './Date.jsx';
import {useState} from "react";
import axios from 'axios';
function BlogpostDetailPage() {

    const [entry,setEntry] = useState({});
    const [error, toggleError] = useState(false);

    const {productDetails} = useParams();

    async function updateBlog(){
        try {
            const response = await axios.get(`http://localhost:3000/posts/${productDetails}`)
            setEntry((response.data));
            console.log(response.data);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }
    return (
        <>
            <button type="button" className="btn-posts-detail" onClick={updateBlog}>See Blog</button>
            {Object.keys(entry).length > 0 &&
                <>
            <h2>{entry.title} ({entry.readTime} minuten)</h2>
            <p>{entry.subtitle}</p>
            <p>Geschreven door {entry.author} op (<Date date={entry.created}/>)</p>
            <p>{entry.content}</p>
            <p>{entry.comments} reacties - {entry.shares} keer gedeeld</p>
            <Link to="/blogpost">Overviewpagina</Link>
                </>}

        </>
    )
}

export default BlogpostDetailPage;