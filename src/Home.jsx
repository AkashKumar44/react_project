import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {

  const menu = [
    {
      'add':'https://test',
      'name':'Home'
    },
    {
      'add':'https://contact',
      'name':'Contact'
    },
    {
      'add':'https://blog',
      'name':'Blog'
    },
    {
      'add':'https://blog',
      'name':'Test'
    }
  ];

  const dropdown = [];
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {
            menu.map((navitem,i) => {
              return <Nav.Link key={i} href={navitem.add}>{navitem.name}</Nav.Link>;
            })
            }
          </Nav>

        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;