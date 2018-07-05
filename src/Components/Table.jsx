import React from 'react';
import { Col, Table } from 'react-bootstrap';

export class TableResults extends React.Component{
    render(){
        return(
            <Col md={12} xs={12}>
                <Table bordered hover>
                <thead>
                    <tr>
                        <th>Gender</th>
                        <th>Name</th>
                        <th className="hide-col">Height</th>
                        <th className="hide-col">Mass</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data}
                </tbody>
                </Table>
            </Col>  
        );
    }
}


