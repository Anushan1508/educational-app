import React from 'react'
import {Row,Col,Card,Button,Image} from 'react-bootstrap'
import './Style.css';

function Chemistry() {
    return (
        <>
        <br/>
        <div class="head">
        <Row>
            <Col >
            <b class="title">Videos</b>
            </Col>
            <Col>
            <b class="title">Tutorials</b>
            </Col>
            <Col>
            <b class="title">Notes</b>
            </Col>
        </Row>
        </div><br/><br/>
        
        <Row>
            <Col >
            <Image src="../assets/edu.jpg" thumbnail />
            </Col>
            <Col>
            <Image src="../assets/tute.jpg" thumbnail />
            </Col>
            <Col>
            <Image src="../assets/note.jpg" thumbnail />
            </Col> 
        </Row>
        </>
    )
}

export default Chemistry
