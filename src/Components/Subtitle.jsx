import React from 'react';
import { Col} from 'react-bootstrap';

export class Subtitle extends React.Component{
    render(){
        return(
            <Col md={12}>
                <div className="subtitle">
                    <p>{this.props.subt}</p>
                </div>
            </Col>   
        );
    }
}


