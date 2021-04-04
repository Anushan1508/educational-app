import React from 'react';
import { Form, Button,Row,Col } from 'react-bootstrap'
import './Style.css'

class Signup extends React.Component {
    constructor(props){
        super();
        this.state = {
            firstName:'',
            lastName:'',
            grade: '',
            passowrd:'',
            email:'',
            role:'',
            verifypassword:''
        }
    }
    render() {
        return (
            <>
                    <Form style={{ width: "80%", marginTop: "10%", marginLeft: "10%" }}>            
                           <Row fluid>
                           <Col> 
                            <Form.Label className="label">Firstname</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Firstname" required /> 
                            </Col>
                            <Col>
                            <Form.Label className="label">Lastname</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Lastname" required />
                            </Col>
                           </Row><br/>
                        <Form.Group>
                            <Form.Label className="label">Role of Study</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your role(Student/Teacher)" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="label">Level of Study</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Grade/Level Studying" required />
                        </Form.Group>        
                            <Form.Group>
                                <Form.Label className="label">Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Your Email" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="label">Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="label">Verify Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password again" required />
                            </Form.Group>
                            <Button variant="secondary"  type="submit" className='center'>SignUp</Button>
                           </Form>
               
            </>
        );
    }
}

export default Signup;