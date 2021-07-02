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
        <Container 
        style={{ position: 'sticky-top', marginTop: '2rem',marginLeft:'340px'}}>
            <Form style={{ width: "50%", marginTop: "4%", marginLeft: "10%" }}>
            <Form.Group>
                <Form.Label id='email' style={{fontFamily:'Myriad Pro'}}>Email</Form.Label>
                <Form.Control type="email"  required/>
            </Form.Group>
            <Form.Group>
                <Form.Label id='firstname' style={{fontFamily:'Myriad Pro'}} >FirstName</Form.Label>
                <Form.Control type="text"  required />
            </Form.Group>
            <Form.Group>
                <Form.Label id='message' style={{fontFamily:'Myriad Pro'}} >Message</Form.Label>
                
                <textarea  style={{height:'180px',width:'100%'}}></textarea>
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
