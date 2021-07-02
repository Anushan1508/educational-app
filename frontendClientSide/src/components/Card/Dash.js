import React from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Dash() {
    return (
        <>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src='../assets/chem.jpg' />
                        <Card.Body>
                            <Card.Title>Chemistry</Card.Title>
                            <Card.Text>
                                The science that deals with the properties, composition
                                and structure of substances. 
                          </Card.Text>
                            <Link to='/chemistry'>
                                <Button variant="primary">Learn more</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src='../assets/bio.jpg' />
                        <Card.Body>
                            <Card.Title>Biology</Card.Title>
                            <Card.Text>
                            The natural science that studies life and living organisms.
                            </Card.Text>
                            <Link to='/biology'>
                                <Button variant="primary">Learn more</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src='../assets/eng.jpg' />
                        <Card.Body>
                            <Card.Title>English</Card.Title>
                            <Card.Text>A universal Communication Language which is a must in this era.</Card.Text>
                            <Link to='/english'>
                                <Button variant="primary">Learn more</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src='../assets/it.jpg' />
                        <Card.Body>
                            <Card.Title>ICT</Card.Title>
                            <Card.Text>The technologies that provide access to information through telecommunications.</Card.Text>
                            <Link to='/ict'>
                                <Button variant="primary">Learn more</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src='../assets/phy.jpg' />
                        <Card.Body>
                            <Card.Title>Physics</Card.Title>
                            <Card.Text>
                                The  science that deals with the structure of matter and the interactions 
                                between them</Card.Text>
                            <Link to='/physics'>
                                <Button variant="primary">Learn more</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src='../assets/maths.jpg' />
                        <Card.Body>
                            <Card.Title>Combined Maths</Card.Title>
                            <Card.Text>
                                The science of numbers and their operations,interrelations and combinations. 
                            </Card.Text>
                            <Link to='/maths'>
                                <Button variant="primary">Learn more</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
    
}

export default Dash
