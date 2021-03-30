import React from 'react';
import { Form, Button} from 'react-bootstrap'

class Signup extends React.Component{
    render(){
        return(
            <div className="container">
            <Form style={{ width: "80%", marginTop: "10%", marginLeft: "10%" }}>
            <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="string" placeholder="First Name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="string" placeholder="Last Name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="string" placeholder="example@test.com" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Grade</Form.Label>
                    <Form.Control type="email" placeholder="XX" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Role of Study</Form.Label>
                    <Form.Control type="string" placeholder="Student/Teacher" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Conform Password</Form.Label>
                    <Form.Control type="string" placeholder="Conform Password" />
                </Form.Group>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
        )
    }
}

export default Signup;