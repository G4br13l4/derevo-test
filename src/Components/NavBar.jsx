import React from 'react';
import { Row, Col} from 'react-bootstrap';

export class NavBar extends React.Component{
    render(){
        return(
            <Row className="nav">
                <Col className="nav-item" md={2} xs="3"> 
                    <p>ITEM 1</p>
                </Col>
                <Col className="nav-item" md={2} xs="3"> 
                    <p>ITEM 1</p>
                </Col>
                <Col className="nav-item" md={2} xs="3"> 
                    <p>ITEM 1</p>
                </Col>
                <Col className="nav-item" md={2} xs="3"> 
                    <p>ITEM 1</p>
                </Col>
            </Row>
        );
    }
}


