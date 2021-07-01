import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer'
import Signin from './components/pages/Signin'
import Dashboard from './components/pages/Dashboard'
import Home from './components/pages/Home'
import Forum from './components/pages/Forum'
import Contact from './components/pages/Contact'
import Logout from './components/pages/Logout'
import AuthContext from './context/AuthContext';
import Chemistry from './components/Subjects/Chemistry'
import Biology from './components/Subjects/Biology'
import English from './components/Subjects/English'
import Physics from './components/Subjects/Physics'
import IT from './components/Subjects/IT'
import Maths from './components/Subjects/Maths'
export default function Routers() {

    const { loggedIn } = useContext(AuthContext);

    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/contact' component={Contact} />
                    
                    {
                        loggedIn === true && (
                            <>
                                <Route path='/dashboard' component={Dashboard} />
                                <Route path='/forum' component={Forum} />
                                <Route path='/logout' component={Logout} />
                                <Route path='/chemistry' component={Chemistry}/>
                                <Route path='/biology' component={Biology}/>
                                <Route path='/english' component={English}/>
                                <Route path='/ict' component={IT}/>
                                <Route path='/physics' component={Physics}/>
                                <Route path='/maths' component={Maths}/>
                            </>
                        )
                    }

                    {
                        loggedIn === false && (
                            <>
                                <Route path='/signin' component={Signin} />
                            </>
                        )
                    }
                    
                </Switch>
                <Footer />
            </Router>
        </>
    );
}
