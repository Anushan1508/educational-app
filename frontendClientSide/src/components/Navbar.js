import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Form, FormControl, Button /*,NavDropdown*/ } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { ImBooks } from 'react-icons/im';
import './Navbar.css'
import { ButtonGroup } from 'reactstrap';
import AuthContext from '../context/AuthContext';
import LogOutBtn from './Login/LogOutBtn';


function Navbar() {
    const { loggedIn } = useContext(AuthContext);
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
                    {
                        loggedIn === true && (
                            <>
                                <Col className='nav-items'>
                                    <NavLink activeClassName="active" to='/dashboard' className='nav-links'>Dashboard</NavLink>
                                </Col>
                                <Col className='nav-items'>
                                    <NavLink activeClassName="active" to='/forum' className='nav-links'>Discussion</NavLink>
                                </Col>
                            </>
                        )
                    }

                    <Col className='nav-items' xs lg='4'>
                        <NavLink activeClassName="active" to='/contact' className='nav-links'>Contact Us</NavLink>
                    </Col>
                    <ButtonGroup>
                        {
                            loggedIn === false && (
                                <>
                                    <Button>
                                        <NavLink activeClassName="active" to='/signin'>
                                            <button className='button'>Log In</button>
                                        </NavLink>
                                    </Button>
                                    <Button>
                                        <NavLink activeClassName="active" to='/signup'>
                                            <button className='button'>Register</button>
                                        </NavLink>
                                    </Button>
                                </>
                            )
                        }

                        {
                            loggedIn === true && (
                                <>
                                    <Button>
                                        <NavLink activeClassName="active" to='/logout'>
                                            <LogOutBtn />
                                        </NavLink>
                                    </Button>
                                </>
                            )}
                        <Button href='http://localhost:5000/admin/'>Admin Panel</Button>
                    </ButtonGroup>
                </Row>
            </Container>
        </>
    );
}

export default Navbar
