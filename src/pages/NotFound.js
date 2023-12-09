import React from "react";
import './NotFound.css'
import pageNotFoundImg from '../images/page-not-found-img.png';

function NotFound(){
    return(
        <div id="not-found-main-container">
            <img id="not-found-img" src={pageNotFoundImg} alt="404 not found illustration"></img>
            <h1 id="not-found-headline">Oops! Page Not Found</h1>
            <p id="not-found-para" >Please check the link again.</p>
            <a id="home-link" href="https://health.sudip.me"> ⬅ Back to home</a>
        </div>
    )
}

export default NotFound;