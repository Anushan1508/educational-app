import React from 'react';
import { Form, Button,Row,Col } from 'react-bootstrap'
import './Style.css'

class Signup extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <Form style={{ width: "80%", marginTop: "10%", marginLeft: "10%" }}>            
                           <Row fluid>
                           <Col> 
                            <Form.Label>Firstname</Form.Label>
                            <Form.Control type="string" placeholder="Enter Your Firstname" required /> 
                            </Col>
                            <Col>
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control type="string" placeholder="Enter Your Lastname" required />
                            </Col>
                           </Row><br/>
                        <Form.Group>
                            <Form.Label>Role of Study</Form.Label>
                            <Form.Control type="string" placeholder="Enter Your role(Student/Teacher/Admin)" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Level of Study</Form.Label>
                            <Form.Control type="string" placeholder="Enter Your Grade/Level Studying" required />
                        </Form.Group>        
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Your Email" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Verify Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password again" required />
                            </Form.Group>
                            <Button type="submit" className='center'>SignUp</Button>
                           </Form>
                </div>
            </>
        );
    }
}

export default Signup;