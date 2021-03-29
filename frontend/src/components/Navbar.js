import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row} from 'react-bootstrap'
import { NavLink, Route, Link } from 'react-router-dom';
import { ImBooks } from 'react-icons/im';
import Signin from './Signin'
import './Navbar.css'


function Navbar() {
    return (
        <>  
            <Container fluid style={{ backgroundColor: '#7395AE', height: '100px', position: 'sticky', marginTop: '0.5rem' }}>
                <Row >
                    <Col xs lg="5">
                        <Link to="/home">
                            <div className='navbar-logo'>
                                <ImBooks style={{ width: '40px', height: '40px', marginRight: '1rem' }} />
                                <span className="header" >AlViN EDU-Master</span>
                            </div>
                        </Link>
                    </Col>
                    <Col xs lg="0.2">
                        <Link to='/articles' className='nav-links'>Articles</Link>
                    </Col>
                    <Col className='nav-items'>
                        <Link to='/videos' className='nav-links'>Videos</Link>
                    </Col>
                    <Col className='nav-items'>
                        <Link to='/discussion' className='nav-links'>Discussion</Link>
                    </Col>
                    <Col  className='nav-items'>
                        <Link to='/contact' className='nav-links'>Contact Us</Link>
                    </Col>
                    <Col>
                        <br />
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
