import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function Signup() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [grade, setGrade] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    async function register(e) {
        e.preventDefault();
        try {
            const registerData = {
                firstName,
                lastName,
                email,
                grade,
                role,
                password,
                passwordVerify,
            };

            await axios.post("http://localhost:5000/auth/", registerData);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="container">
            <Form style={{ width: "80%", marginTop: "10%", marginLeft: "10%" }}>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="string"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                    type="string" 
                    placeholder="Last Name" 
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}  
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="string" 
                    placeholder="example@test.com" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}  
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Grade</Form.Label>
                    <Form.Control 
                    type="string" 
                    placeholder="XX" 
                    onChange={(e) => setGrade(e.target.value)}
                    value={grade}  
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Role of Study</Form.Label>
                    <Form.Control 
                    type="string" 
                    placeholder="Student/Teacher" 
                    onChange={(e) => setRole(e.target.value)}
                    value={role} 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Enter your password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}  
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Conform Password</Form.Label>
                    <Form.Control 
                    type="string" 
                    placeholder="Conform Password" 
                    onChange={(e) => setPasswordVerify(e.target.value)}
                    value={passwordVerify}   
                    />
                </Form.Group>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
    )
}

