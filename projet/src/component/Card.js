// Card.js
import React from 'react';
import ReactDom from 'react-dom';

import './Card.css'; // Import your CSS file


const Card = (props) => {
  return (
    <div className='container cardimg'>
        <div className="card">
            <img src={props.imgsrc} alt="hell" />
            <h2>{props.heading}</h2>
            <p>{props.title}</p>
            <a href='#' className='btn'>{props.btn}</a>
        </div>
    </div>
    
  );
};

ReactDom.render( 
    <>
        <Card 
        imgsrc="https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/866858bc3f68d2bb0739b2ef598d9f2d.png"
        heading="loop"
        title="Welcome to error.Welcome to error.Welcome to error.Welcome to error."
        btn="Read More"
        />
        

    </>
    
    , document.getElementById('root'));

export default Card;
