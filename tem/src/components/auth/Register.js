import axios from 'axios';
import React, { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useHistory } from "react-router-dom";

export default function Register() {

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [grade, setGrade] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [passwordverify, setPasswordverify] = useState("");

    const history = useHistory();
    const {getLoggedIn} = useContext(AuthContext);

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

            await axios.post("http://localhost:5000/auth/", registerData);
            await getLoggedIn();
            history.push("/");
        } catch (err) {
            console.error(err);
        }
    }

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
    )
}
