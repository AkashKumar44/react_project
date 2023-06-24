import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Img from '../logo192.png'


function Services(val) {  
  console.log(val);
  return (
    <div className="container text-center py-3"> 
      <h4 className="h1">Our<span> Services</span></h4>
        <p className="h3">What I Do?</p>
        <div className="container py-3"> 
        {
          items.map((elem) => {
            const { id,image,name,title,description } = elem;
            return(
                  <Row xs={1} md={4} className="g-3">
                    {Array.from({ length: 8 }).map((_, idx) => (
                      <Col>
                        <Card key={val.id}>
                          <Card.Img variant="top" src={val.image} />
                          <Card.Body>
                            <Card.Title >{val.name}</Card.Title>
                            <p>{val.title}</p>
                            <Card.Text>
                              {val.description}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
            )
          })

        }
          
          
        </div>
    </div>
  );
}


export default Services;