import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

export default function Router() {
    return (
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route path='/'>
                    <div>Home</div>
                </Route>
                <Route path='/register'>
                    <div>Register</div>
                </Route>
                <Route path='/login'>
                    <div>Log In</div>
                </Route>
                <Route path='/lessions'>
                    <div>Lessions</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
