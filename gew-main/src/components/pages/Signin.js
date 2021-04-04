import "bootstrap/dist/css/bootstrap.css";
import Login from "../Login/Login";
import RightSide from "../Login/RightSide";
import { Col, Row } from 'react-bootstrap';

//import {Route,NavLink,HashRouter} from "react-router-dom";

function Signin() {
  return (
    <>
     <Row >
        <Col><Login/></Col>
        <Col><RightSide /></Col>
      </Row>
      </> 
  );
}

export default Signin;
