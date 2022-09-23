import Card from 'react-bootstrap/Card';

function TextExample() {
    const menua = [
        {
          'add':'https://test',
          'name':'Home',
          'para':'Some quick example text to build on the card title and make up the bulk of the card'
        },
        {
          'add':'https://contact',
          'name':'Contact','para':'Some quick example text to build on the card title and make up the bulk of the card'
        },
        {
          'add':'https://blog',
          'name':'Blog',
          'para':'Some quick example text to build on the card title and make up the bulk of the card'
        },
        {
          'add':'https://blog',
          'name':'Test',
          'para':'Some quick example text to build on the card title and make up the bulk of the card'
        }
      ];
  return (
    <Card className='container-fluid' style={{ width: '18rem' }}>
         {
            menua.map((navitem,i) => {
              return <Nav.Link key={i} href={navitem.add}>{navitem.name}</Nav.Link>;
            })
            }
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className=" text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TextExample;