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
        <div>
            <h1>Register a new user</h1>
            <form onSubmit={register}>
                <input 
                type='string' 
                placeholder='First Name' 
                onChange={(e) => setFirstName(e.target.value)}
                value={firstname}  
                />
                <input 
                type='string' 
                placeholder='Last Name' 
                onChange={(e) => setLastName(e.target.value)}
                value={lastname}  
                />
                <input 
                type='email' 
                placeholder='Email' 
                onChange={(e) => setEmail(e.target.value)}
                value={email}  
                />
                <input 
                type='string' 
                placeholder='Grade' 
                onChange={(e) => setGrade(e.target.value)}
                value={grade}  
                />
                <input 
                type='string' 
                placeholder='Role' 
                onChange={(e) => setRole(e.target.value)}
                value={role}  
                />
                <input 
                type='password' 
                placeholder='Password' 
                onChange={(e) => setPassword(e.target.value)}
                value={password}  
                />
                <input 
                type='password' 
                placeholder='Password Verify'
                onChange={(e) => setPasswordverify(e.target.value)}
                value={passwordverify}   
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}
