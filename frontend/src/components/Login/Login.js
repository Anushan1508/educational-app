import React from 'react';
import { Form, Button} from 'react-bootstrap'
import './Style.css'

class Login extends React.Component{
    render(){
        return(
           
            <Form style={{ width: "80%", marginTop: "10%", marginLeft: "10%" }}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <br/><br/>
                <Button type="submit" className='center'>Login</Button><br /><br />
                <div>Don't have an account yet?<b>Sign Up</b></div>
                <br/><br/>
            </Form>
       
        );
    }
}

export default Login;