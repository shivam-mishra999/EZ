import React from 'react';
import ezWorksLogo from '../assets/ezWorksLogo.png';
import "./Details.css";

export default function Details() {
  return (
    <div className="container">
        <div className="logo">
            <img src={ezWorksLogo} alt="Logo" />
        </div>

        <div className="heading">
            <p>Suite Of Business Support Services</p>
        </div>

        <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit, sed do eiusmod tempor incididunt...Lorem<br /> ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
        </div>
    </div>
  )
}
