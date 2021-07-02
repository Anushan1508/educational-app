import React from 'react'
import { Form, Button, Container} from 'react-bootstrap'

class Forms extends React.Component
{
    constructor(props){
        super();
        this.state = {
            email:'',
            firstname:'',
            message:'',
        }
    }
   render()
   {
    return ( 
        <Container style={{ position: 'sticky-top', marginTop: '2rem',marginLeft:'340px'}}>
            <Form style={{ width: "50%", marginTop: "10%", marginLeft: "10%" }}>
            <Form.Group>
                <Form.Label id='email'>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" required/>
            </Form.Group>
            <Form.Group>
                <Form.Label id='firstname' >FirstName</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" required />
            </Form.Group>
            <Form.Group>
                <Form.Label id='message' >Message</Form.Label>
                
                <textarea  placeholder="Type Your Message" style={{height:'180px',width:'100%'}}></textarea>
            </Form.Group>
            <br /><br />
            <Button variant="secondary" type="submit" className='center'>Submit</Button><br /><br />
            <br /><br />
        </Form>
        </Container>
)
   }
}

export default Forms
