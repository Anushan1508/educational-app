import React from 'react'
import {Tabs, Tab} from 'react-bootstrap-tabs';
import Login from './Login';
import Signup from './Signup';
import './Style.css';


const LeftSide = () => {
    return (    
        <div className="card" >
            <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                    <Tab  label="Login"><Login/></Tab>
                    <Tab label="Sign Up"><Signup/></Tab>
            </Tabs>
        </div>
    )
}

export default LeftSide
