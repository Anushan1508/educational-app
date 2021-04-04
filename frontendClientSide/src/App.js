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
import axios from 'axios'
//import PrivateRoute from './components/Utils/PrivateRoute'

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Register} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/logout' component={Logout} />
          <Route path='/forum' component={Forum} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
