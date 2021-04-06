import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import LogOutBtn from '../auth/LogOutBtn';

export default function Navbar() {
    const { loggedIn } = useContext(AuthContext);
    return (
        <div>
            <Link to="/">Home</Link>
            {
                loggedIn === false && (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Log In</Link>
                    </>
                )
            }

            {
                loggedIn  === true && (
                    <>
                    <Link to="/lession">Lessions</Link>
                    <LogOutBtn />
                    </>
                )
                
            }


        </div>
    )
}