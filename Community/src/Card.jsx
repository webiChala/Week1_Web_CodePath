import React from 'react';
import Neetcode from '/neetcode.jpg';
import './Card.css';


function Card(props) {
    

    function visitWebsite() {
        window.location.href = props.url;
    }
    return (
        <div className="container">
            <img  src={props.image} alt="Neetcode image" className="image"/>
            <h1 className='title'>{props.title}</h1>
            <p className='text'>{props.content}</p>
            <button className='btn' onClick={visitWebsite}>Visit</button>
        </div>
    );
}

export default Card;