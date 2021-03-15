import React from 'react'
import { Form, Button } from 'react-bootstrap'

const LeftSide = () => {
    return (
        <div>
            <br/><br/><br/>
            <Form style={{width:"80%", marginTop:"10%", marginLeft:"10%"}}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default LeftSide
