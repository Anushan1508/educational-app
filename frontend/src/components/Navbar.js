import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { NavLink, Route, Link } from 'react-router-dom';
import { ImBooks } from 'react-icons/im';
import Signin from './pages/Signin'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import './Navbar.css'


function Navbar() {
    return (
        <>
            <Container fluid style={{ backgroundColor: '#7395AE', height: '150px', position: 'sticky', marginTop: '0.5rem' }}>
                <Row >
                    <Col xs lg="6">
                        <div className='navbar-logo'>
                            <ImBooks style={{ width: '40px', height: '40px', marginRight: '1rem' }} />
                            <span className='header' >AlViN EDU-Master</span>
                        </div>
                    </Col>
                    <Col xs lg='2.5'>
                        <Form inline style={{ marginTop: '25px' }}>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="secondary">Search</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className='nav-items'>
                        <Link to='/discussion' className='nav-links'>Home</Link>
                    </Col>
                    <Col className='nav-items'>
                        <Link to='/dashboard' className='nav-links'>Dashboard</Link>
                    </Col>
                    <Col className='nav-items'>
                        <Link to='/discussion' className='nav-links'>Discussion</Link>
                    </Col>
                    <Col className='nav-items'>
                        <Link to='/discussion' className='nav-links'>Contact us</Link>
                    </Col>
                    <Col >
                        <NavDropdown  title={<span className="title">User</span>} >
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
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signin" component={Signin} />

        </>
    );
}

export default Navbar
