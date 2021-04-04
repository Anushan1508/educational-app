import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { ImBooks } from 'react-icons/im';
import './Navbar.css'


function Navbar() {
    return (
        <>
            <Container fluid style={{ backgroundColor: 'rgb(0,115,207)', height: '150px', position: 'sticky-top', marginTop: '0.5rem' }}>
                <Row >
                    <Col xs lg="6">
                        <NavLink to='/' className='navbar-logo'>
                            <ImBooks style={{ width: '40px', height: '40px', marginRight: '1rem' }} />
                            <span className='header' >AlViN EDU-Master</span>
                        </NavLink>
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
                        <NavLink exact activeClassName="active" to='/' className='nav-links'>Home</NavLink>
                    </Col>
                    <Col className='nav-items'>
                        <NavLink activeClassName="active" to='/dashboard' className='nav-links'>Dashboard</NavLink>
                    </Col>
                    <Col className='nav-items'>
                        <NavLink activeClassName="active" to='/forum' className='nav-links'>Discussion</NavLink>
                    </Col>
                    <Col className='nav-items' xs lg='4'>
                        <NavLink activeClassName="active" to='/contact' className='nav-links'>Admin Panel</NavLink>
                    </Col>
                    <Col>
                        <NavLink activeClassName="active" to='/signin'>
                            <button className='button'>Sign In</button>
                        </NavLink>
                    </Col>
                    <Col>
                        <NavLink activeClassName="active" to='/signup'>
                            <button className='button'>Register</button>
                        </NavLink>
                    </Col>
                    <Col>
                        <NavLink activeClassName="active" to='/logout'>
                            <button className='button'>Log Out</button>
                        </NavLink>
                    </Col>
                </Row>
            </Container>


        </>
    );
}

export default Navbar
