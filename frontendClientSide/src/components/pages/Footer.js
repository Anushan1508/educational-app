import React from 'react';
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { Container, Row, Col} from 'react-bootstrap';
import './Footer.css'

function Footer() {
    return (
        <>
            <br/><br/>
            <Container fluid style={{backgroundColor: '#1c2237', alignItems:"center",position:'sticky-bottom',marginTop:'1rem'}}>
                <br/>
            <span style={{ marginLeft:'40.5rem',color:'darkgrey',fontSize:'23px',fontFamily:'Stencil'}} ><b>Follow us on </b></span>   
            <Row>
                <Col style={{ marginLeft:'40rem'}} md="auto">
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
                </Row><br/>
                <Row>
                    <Col>
                        <div className="logo">
                        <ImBooks style={{ width: '40px', height: '40px', marginRight: '1rem' }}/>
                        <span className="new">AlViN EDU-Master</span>
                        </div>
                    </Col >
                </Row>
                <Row>
                    <Col>
                        <small className='website-rights'> <br/>Copyright © 2021 AlViN EDU-Master. All Rights Reserved </small>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <span className='website-rights' style={{ marginLeft:'40rem'}}>Privacy Policy | Legal Notice</span>
                    </Col>
                </Row>
                <br/><br/>
            </Container>
        </>
    );
}

export default Footer;