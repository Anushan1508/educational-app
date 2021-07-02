import React from 'react'
import LogOutBtn from '../Login/LogOutBtn';
import { NavLink } from 'react-router-dom';
import {Row,Col,Card,Button} from 'react-bootstrap'

function Logout() {
    return (
       <> 
       <Card style={{backgroundColor:'white',marginLeft:'500px',width:'500px'}}>
       <div class="head">
               <b>Logout Confirmation </b>
        </div><br/>
        <span style={{fontFamily:'Bookman Old Style'}}>Are you sure you want to logout?</span>
     
       <Row>
            <Col><LogOutBtn /></Col>
            <Col style={{textAlign:'center'}}>
              <NavLink activeClassName="active" to='/'>
              <Button variant="secondary" >No</Button>
             </NavLink>
            </Col>
       </Row>

       </Card>
       </>
    )
}

export default Logout
