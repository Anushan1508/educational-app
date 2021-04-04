import React from 'react';
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { Container, Row, Col} from 'react-bootstrap';
import './Footer.css'

function Footer() {
    return (
        <>
            
            <Container fluid style={{backgroundColor: '#1c2237', height: '150px',alignItems:"center",position:'sticky-bottom',marginTop:'1rem'}}>
                <Row>
                    <Col xs lg='6'>
                        <div className="logo">
                        <ImBooks style={{ width: '40px', height: '40px', marginRight: '1rem' }}/>
                        <span className="new">AlViN EDU-Master</span>
                        </div>
                    </Col >
                    <Col xs lg='6'>
                        <small className='website-rights'>AlViN EDU-Master © 2021</small>
                    </Col>
                </Row>
                <Row>
                <Col  md="auto">
                        <Link className='social-icon-link' to='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </Link>
                    </Col>
                    <Col  md="auto">
                        <Link className='social-icon-link' to='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </Link>
                    </Col>
                    <Col  md="auto">
                        <Link className='social-icon-link' to='/' target='_blank' aria-label='Twitter' >
                            <FaTwitter />
                        </Link>
                    </Col>
                    <Col  md="auto">
                        <Link
                            className='social-icon-link' to='/' target='_blank' aria-label='LinkedIn'>
                            <FaLinkedin />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Footer;