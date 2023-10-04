import './App.css'
import logo from './assets/logo.png'
import {Routes, Route, matchRoutes} from "react-router-dom";
import HomePage from './HomePage/HomePage.jsx'
import NewBlogpostPage from './NewBlogpostPage/NewBlogpostPage.jsx'
import OverviewPage from './OverviewPage/OverviewPage.jsx'
import BlogpostDetailPage from './BlogpostDetailPage/BlogpostDetailPage.jsx'
import Navigation from "./Navigation/Navigation.jsx";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";


function App() {


    return (
        <div className="page-container">
            <img src={logo} alt="Company logo"/>
            <Navigation/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/new" element={<NewBlogpostPage/>}/>
                <Route path="/blogpost" element={<OverviewPage/>}/>
                <Route path="/blogposts/:productDetails" element={<BlogpostDetailPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>



        </div>
    )
}

export default App
