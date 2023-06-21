import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Img from '../logo192.png'


function Services() {
  return (
    <div className="container text-center py-3"> 
      <h4 className="h1">Our<span> Services</span></h4>
        <p className="h3">What I Do?</p>
        <div className="container py-3"> 
          <Row xs={1} md={4} className="g-3">
            {Array.from({ length: 8 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={Img} />
                  <Card.Body>
                    <Card.Title>hello</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
        </div>
    </div>
  );
}


export default Services;