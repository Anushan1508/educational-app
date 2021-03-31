import "bootstrap/dist/css/bootstrap.css";
import Menu from "./Menu";
import LeftSide from "./Home/LeftSide";
import RightSide from "./Home/RightSide";
import { Col, Row } from 'react-bootstrap';
//import {Route,NavLink,HashRouter} from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <Menu />
      <Row className="landing">
        <Col><LeftSide /></Col>
        <Col><RightSide /></Col>
      </Row>
    </div>
  );
}

export default Home;
