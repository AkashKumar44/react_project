import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function About() {
  return (
    <section className="about" id='about'>
       <div className='title'>
            <h4>A valuable feature is more <br />important to know our apps deep.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo<br /> justo. Nullam dictum felis eu pede mollis pretium.
            </p>
       </div>
       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </section>
  );
}

export default About;
