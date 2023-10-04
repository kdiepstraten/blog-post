import "./ErrorPage.css";
import {Link, useNavigate} from "react-router-dom";

function ErrorPage(){
    const navigate = useNavigate();
    return(
        <>
            <p>Oeps... Er ging iets verkeerd.</p>
            <button onClick={() => navigate("/")}>Home</button>
        </>

    )
}
export default ErrorPage;