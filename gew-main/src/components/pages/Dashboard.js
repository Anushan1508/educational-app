import React from 'react'
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Dash from '../Card/Dash'
import Chemistry from '../Subjects/Chemistry'

function Dashboard() {
    return (
        <>
        <Dash/>
        <Router>
      <Switch>
      <Route path='/chemistry' component={Chemistry} />  
      </Switch>
    </Router>
        </>
    )
}

export default Dashboard
