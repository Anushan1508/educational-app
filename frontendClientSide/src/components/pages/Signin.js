import "bootstrap/dist/css/bootstrap.css";
import RightSide from "../Login/RightSide";
import LeftSide from "../Login/LeftSide"
import { Col, Row } from 'react-bootstrap';

//import {Route,NavLink,HashRouter} from "react-router-dom";

function Signin() {
  return (
    <>
     <Row >
        <Col><LeftSide/></Col>
        <Col><RightSide /></Col>
      </Row>
      </> 
  );
}

export default Signin;
