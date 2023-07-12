import React from 'react'
import ReactDOM from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from './logo192.png';



const Banner = () => {
    return (
      <>
        <Carousel> 
          <Carousel.Item>
            <img className="d-block w-100" src={img} height={200} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
        
       
       </>
    );
}


export default Banner;