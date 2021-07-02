import React from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

function Dash() {
    return (
        <>
            <Row>
                <Col>
                    <Card style={{ width: '18rem',backgroundColor:'white'}}>
                        <Card.Img variant="top" src='../assets/chem.jpg' />
                        <Card.Body>
                            <Card.Title style={{textAlign:'center',color:'#19294D',fontFamily:'Trajan Pro'}}><b>Chemistry</b></Card.Title>
                            <Card.Text>
                                The science that deals with the properties, composition
                                and structure of substances. 
                          </Card.Text><br/>
                            <NavLink to='/chemistry'>
                                <Button style={{marginLeft:'45px'}}variant="secondary">Learn more</Button>
                            </NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem',backgroundColor:'white'}}>
                        <Card.Img variant="top" src='../assets/bio.jpg' />
                        <Card.Body>
                            <Card.Title style={{textAlign:'center',color:'#FCA311',fontFamily:'Trajan Pro'}}><b>Biology</b></Card.Title>
                            <Card.Text>
                            The natural science that will focus on life and living organisms.
                            </Card.Text><br/>
                            <NavLink to='/biology'>
                                <Button style={{marginLeft:'45px'}} variant="secondary">Learn more</Button>
                            </NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem',backgroundColor:'white'}}>
                        <Card.Img variant="top" src='../assets/eng.jpg' />
                        <Card.Body>
                            <Card.Title style={{textAlign:'center',color:'#19294D',fontFamily:'Trajan Pro'}}><b>English</b></Card.Title>
                            <Card.Text>A universal Communication Language which is a must in this era.</Card.Text>
                            <NavLink to='/english'><br/>
                                <Button style={{marginLeft:'45px'}} variant="secondary">Learn more</Button>
                            </NavLink>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem',backgroundColor:'white'}}>
                        <Card.Img variant="top" src='../assets/it.jpg' />
                        <Card.Body>
                            <Card.Title style={{textAlign:'center',color:'#19294D',fontFamily:'Trajan Pro'}}><b>ICT</b></Card.Title>
                            <Card.Text >The technologies that provide access to information through telecommunications.</Card.Text>
                            <NavLink to='/ict'><br/>
                                <Button style={{marginLeft:'45px'}} variant="secondary">Learn more</Button>
                            </NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem',backgroundColor:'white'}}>
                        <Card.Img variant="top" src='../assets/phy.jpg' />
                        <Card.Body>
                            <Card.Title style={{textAlign:'center',color:'#FCA311',fontFamily:'Trajan Pro'}}><b>Physics</b></Card.Title>
                            <Card.Text>
                                The  science that deals with the structure of matter and the interactions 
                                between them</Card.Text>
                            <NavLink to='/physics'><br/>
                                <Button style={{marginLeft:'45px'}} variant="secondary">Learn more</Button>
                            </NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem',backgroundColor:'white'}}>
                        <Card.Img variant="top" src='../assets/maths.jpg' />
                        <Card.Body>
                            <Card.Title style={{textAlign:'center',color:'#19294D',fontFamily:'Trajan Pro'}}><b>Combined Maths</b></Card.Title>
                            <Card.Text>
                                The science of numbers and their operations,interrelations and combinations. 
                            </Card.Text><br/>
                            <NavLink to='/maths'>
                                <Button style={{marginLeft:'45px'}} variant="secondary">Learn more</Button>
                            </NavLink>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
    
}

export default Dash
