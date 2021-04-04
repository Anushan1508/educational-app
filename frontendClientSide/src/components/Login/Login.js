import React, { useState } from 'react';
import { Form, Button} from 'react-bootstrap'
import './Style.css'
import axios from 'axios'

function Login(props) {

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    async function login(e) {
        e.preventDefault();

        try {
            const loginData = {
                email,
                password,
            };

            await axios.post('http://localhost:5000/auth/login/', loginData);
        } catch(err) {
            console.error(err);
        }
    }
    

      return(    
        <Form  onSubmit={login} style={{ width: "80%", marginTop: "10%", marginLeft: "10%" }}>
            <Form.Group>
                <Form.Label className="label">Email</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Enter Your Email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}  
                />
            </Form.Group>
            <Form.Group>
                <Form.Label className="label" >Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Enter your password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}  
                />
            </Form.Group>
            <br/><br/>
            <Button 
            variant="secondary" 
            type="submit" 
            className='center'>Login</Button><br /><br />
            <div style={{fontSize:'20px'}}>Don't have an account yet? <b>Sign Up</b></div>
            <br/><br/>
        </Form>
    );
}

export default Login;