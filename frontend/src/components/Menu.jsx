import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Menu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Alvin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                            <NavDropdown title="Subjects" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Physics</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Chemistry</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Mathematics</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Biology</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.5">GIT</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">General Knowledge</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
      </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    )
}

export default Menu;
