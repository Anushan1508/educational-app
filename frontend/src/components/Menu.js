import React from 'react'
import { FormControl, Button, Form,NavDropdown, Container, Row, Col,Nav} from 'react-bootstrap';
import {TiUser} from 'react-icons/ti';


function Menu() {
    return (
        <>    
           <Container fluid style={{backgroundColor:'#5D5C61',height:'60px',position:'sticky'}}>
               <Row>
               <Col xs lg="10">
                <Form inline style={{ marginTop :'10px'}}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                </Col>
                <Col  xs lg="0.1" >
                    <TiUser style={{width:"50px", height:"40px",borderRadius:"60%",border:'1px solid black',marginTop:'10px'}}/>
                    </Col>
                <Col>
                       <Nav>
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
                       </Nav>
                    </Col>
               </Row>
           </Container>   
        
        </>
    )
}

export default Menu
