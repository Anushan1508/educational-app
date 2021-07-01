import axios from 'axios';
import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import {Button} from 'react-bootstrap';
import { useHistory } from 'react-router';

export default function LogOutBtn() {

    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();

    async function logOut() {
        await axios.get('http://localhost:5000/auth/logout/');
        await getLoggedIn();
        history.push('/');        
    }
  return (
    <Button variant="secondary" onClick ={logOut}>Yes</Button>
  );
}
