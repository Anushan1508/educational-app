import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer'
import Signin from './components/pages/Signin'
import Dashboard from './components/pages/Dashboard'
import Home from './components/pages/Home'
import Forum from './components/pages/Forum'
import Contact from './components/pages/Contact'
import Register from './components/pages/Register'
import Logout from './components/pages/Logout'
import AuthContext from './context/AuthContext';

export default function Routers() {

    const { loggedIn } = useContext(AuthContext);

    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/forum' component={Forum} />
                    {
                        loggedIn === true && (
                            <>
                                <Route path='/dashboard' component={Dashboard} />
                                <Route path='/logout' component={Logout} />
                            </>
                        )
                    }

                    {
                        loggedIn === false && (
                            <>
                                <Route path='/signin' component={Signin} />
                                <Route path='/signup' component={Register} />
                            </>
                        )
                    }
                    
                </Switch>
                <Footer />
            </Router>
        </>
    );
}
