import React from "react";

export default function Header(){
    return(
        <div className="header">
            <nav className="navbar">
            <div className="left">
                <img src="./images/meme_logo.png" className="logo"></img>
                <h5 className="title">Meme Generator</h5>
            </div>
            <h5 className="react_course">React Course - Project 3</h5>    
            </nav>
        </div>
    )
}