import React from 'react'
import Nav from 'react-bootstrap/Nav';
import logo from './logo192.png'


function Navbar() {

    return (
        <>
        <div className=' bg-dark'>
        <Nav className='container' activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}  >
                <div className=''>
                    <img src={logo} alt='logo' height={50} />
                </div>
                <div  className="justify-content-end">
                    <Nav className="justify-content-end">
                        <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        </Nav.Item>
                    </Nav>
                </div>
                
            </Nav>
        </div>

        </>
    )
}

export default Navbar