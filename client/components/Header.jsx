import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Welcome from './Welcome'

class Header extends React.Component {
    state = {

    }

    render () {
      return (
        <>
          <Navbar bg="dark" variant="dark" style={{ marginBottom: 20 }}>
            <Navbar.Brand
              href="#"
              style={{ fontSize: '2rem', letterSpacing: '3px' }}
            >
              <b>Everybody Learns</b><img src="earth.png" alt="earth" height="50" style={{ paddingLeft: 20 }} />
            </Navbar.Brand>

            <Nav className="mr-auto" >
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>

          <Welcome />
        </>
      )
    }
}

export default Header
