import axios from 'axios';
import React, { useState } from 'react'

export default function Register() {

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
        <div>
            <h1>Register a new user</h1>
            <form onSubmit={register}>
                <input 
                type='string' 
                placeholder='First Name' 
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}  
                />
                <input 
                type='string' 
                placeholder='Last Name' 
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}  
                />
                <input 
                type='string' 
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
                onChange={(e) => setPasswordVerify(e.target.value)}
                value={passwordVerify}   
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}
