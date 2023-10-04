import './HomePage.css'
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import ReadTime from "./ReadTime.jsx";
import axios from 'axios';
import Dates from "../BlogpostDetailPage/Date.jsx";

function HomePage(){
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',
        created: '',
        readTime: '',
        comments: 0,
        shares: 0
    })
    const [error, toggleError] = useState('');

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const timestamp =  new Date().toLocaleDateString();

        setFormState({
            ...formState,
            created: timestamp,
            readTime: <ReadTime words={formState.content}/>
        });
        navigate("/blogpost");

        try {
            const response = await axios.post('http://localhost:3000/posts', {
                title: `${formState.title}`,
                subtitle: `${formState.subtitle}`,
                content: `${formState.content}`,
                created: `${timestamp}`,
                author: `${formState.author}`,
                readtime: `${formState.readTime}`,
                comments: `${formState.comments}`,
                shares: `${formState.shares}`,
            })
            setFormState(response);
            console.log(response);


        } catch (e) {
            console.error(e)
            toggleError(true);
        }
    }
return(
    <>
    <form onSubmit={handleSubmit}>

        <label>Title:</label>
        <input type="text"
               required={true}
               name="title"
               value={formState.title}
               onChange={handleChange}/>

        <label>Subtitle:</label>
        <input type="text"
               name="subtitle"
               value={formState.subtitle}
               onChange={handleChange}/>

        <label>Author:</label>
        <input type='text'
               name="author"
               value={formState.author}
               onChange={handleChange}/>

        <label>Content:</label>
        <textarea name="content"
                  cols="30"
                  rows="10"
                  value={formState.content}
                  onChange={handleChange}></textarea>

        <button type="submit">Send</button>

    </form>

    </>
)
}
export default HomePage;