import "bootstrap/dist/css/bootstrap.css";
import Signup from "../Login/Signup";
import RightSide from "../Login/RightSide";
import { Col, Row } from 'react-bootstrap';


function Register() {
  return (
    <>
     <Row >
        <Col><Signup/></Col>
        <Col><RightSide /></Col>
      </Row>
      </> 
  );
}

export default Register;
