import React, { useState, useContext} from 'react';
import { Form, Button,Row,Col } from 'react-bootstrap'
import './Style.css'
import axios from 'axios';
//import AuthContext from '../../context/AuthContext';
import { useHistory } from "react-router-dom";
function Signup() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [grade, setGrade] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [passwordverify, setPasswordverify] = useState("");

    async function register(e) {
        e.preventDefault();

        try {
            const registerData = {
                firstname,
                lastname,
                email,
                grade,
                role,
                password,
                passwordverify,
            };

            await axios.post('http://localhost:5000/auth/', registerData);

        } catch(err) {
            console.error(err);
        }
    }
        return (
            <>
                    <Form onSubmit={register} style={{ width: "80%", marginTop: "10%", marginLeft: "10%" }}>            
                           <Row fluid>
                           <Col> 
                            <Form.Label className="label">Firstname</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter Your Firstname" 
                            required 
                            onChange={(e) => setFirstname(e.target.value)}
                            value={firstname}
                            /> 
                            </Col>
                            <Col>
                            <Form.Label className="label">Lastname</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter Your Lastname" 
                            required
                            onChange={(e) => setLastname(e.target.value)}
                            value={lastname} 
                            />
                            </Col>
                           </Row><br/>
                        <Form.Group>
                            <Form.Label className="label">Role of Study</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter Your role(Student/Teacher)" 
                            required 
                            onChange={(e) => setRole(e.target.value)}
                            value={role}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="label">Level of Study</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter Your Grade/Level Studying" 
                            required 
                            onChange={(e) => setGrade(e.target.value)}
                            value={grade}
                            />
                        </Form.Group>        
                            <Form.Group>
                                <Form.Label className="label">Email</Form.Label>
                                <Form.Control 
                                type="email" 
                                placeholder="Enter Your Email" 
                                required 
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="label">Password</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="Enter your password" 
                                required 
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="label">Verify Password</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="Enter your password again" 
                                required 
                                onChange={(e) => setPasswordverify(e.target.value)}
                                value={passwordverify}
                                />
                            </Form.Group>
                            <Button variant="secondary"  type="submit" className='center'>SignUp</Button>
                           </Form>
               
            </>
        );
    }

export default Signup;