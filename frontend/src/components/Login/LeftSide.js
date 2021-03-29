import React from 'react'
import { Card} from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import Login from './Login';
import Signup from './Signup';
import './Style.css'


const LeftSide = () => {
    return (
        <Card className='card'>
            <Tabs onSelect={(index, label) => console.log(label + ' selected')}  >
                <Tab label="Login" xs lg='100' ><Login /></Tab>
                <Tab label="Sign Up"><Signup /></Tab>
            </Tabs>
        </Card>
    )
}

export default LeftSide
