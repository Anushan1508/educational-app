import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { NavLink, Route, Link } from 'react-router-dom';
import { ImBooks } from 'react-icons/im';
import Signin from './Signin'
import './Navbar.css'


function Navbar() {
    return (
        <>
            <Container fluid style={{ backgroundColor: '#7395AE', height: '150px', position: 'sticky', marginTop: '0.5rem' }}>
                <Row >
                    <Col xs lg="6">
                        <Link to="/home">
                            <div className='navbar-logo'>
                                <ImBooks style={{ width: '40px', height: '40px', marginRight: '1rem' }} />
                                <span className="header" >AlViN EDU-Master</span>
                            </div>
                        </Link>
                    </Col>
                    <Col xs lg='2.5'>
                        <Form inline style={{ marginTop: '25px'}}>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="secondary">Search</Button>
                        </Form>
                    </Col>
                    </Row>
                    <Row>
                    <Col className='nav-items'>
                        <Link to='/videos' className='nav-links'>Articles</Link>
                    </Col>
                    <Col className='nav-items'>
                        <Link to='/videos' className='nav-links'>Videos</Link>
                    </Col>
                    <Col className='nav-items'>
                        <Link to='/videos' className='nav-links'>Quizes</Link>
                    </Col>
                    <Col className='nav-items'>
                        <Link to='/discussion' className='nav-links'>Discussion</Link>
                    </Col>
                    <Col className='nav-items'>
                        <Link to='/contact' className='nav-links'>Contact Us</Link>
                    </Col>
                    <Col>
                        <NavDropdown title="User" id="collasible-nav-dropdown" className='title'>
                            <NavDropdown.Item href="#action/3.1">Dashboard</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Grade</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Messages</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Preferences</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.6">Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                    <Col>
                        <NavLink to='/signin'>
                            <button className='button'>Sign In</button>
                        </NavLink>
                    </Col>
                </Row>
            </Container>

            <Route path="/signin" component={Signin} />
        </>
    );
}

export default Navbar
