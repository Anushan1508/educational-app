import axios from 'axios';
import React, { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {getLoggedIn} = useContext(AuthContext);

    async function login(e) {
        e.preventDefault();
        try {
            const loginData = {
                email,
                password,
            };

            await axios.post("http://localhost:5000/auth/login", loginData);
            getLoggedIn();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <h1>Login  a user</h1>
            <form onSubmit={login}>
                <input 
                type='email' 
                placeholder='Email' 
                onChange={(e) => setEmail(e.target.value)}
                value={email}  
                />
                <input 
                type='password' 
                placeholder='Password' 
                onChange={(e) => setPassword(e.target.value)}
                value={password}  
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}