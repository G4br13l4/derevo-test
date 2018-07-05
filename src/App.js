import React, { Component } from 'react';
import './App.css';
import { Grid, Col, Row, FormGroup, InputGroup, FormControl} from 'react-bootstrap';
import {TableResults} from './Components/Table';
import {NavBar} from './Components/NavBar';
import {Subtitle} from './Components/Subtitle';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      rawData:[],
      data:[],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
    .then(results => {
      return results.json();
    }).then(data =>{
      this.setState({rawData:data.results});
      let array= data.results.map((item) => {
        return(
          <tr>
            <td>{item.gender}</td>
            <td>{item.name}</td>
            <td className="hide-col">{item.height}</td>
            <td className="hide-col">{item.mass}</td>
          </tr>
        )
      })
      this.setState({data:array});
    })
  }

  handleChange(event){
  
    let data = this.state.rawData;
    let value = event.target.value.toUpperCase();

    let result = data.filter(item => item.name.toUpperCase().indexOf(value) > -1);

    let array= result.map((item) => {
        return(
          <tr>
            <td>{item.gender}</td>
            <td>{item.name}</td>
            <td className="hide-col">{item.height}</td>
            <td className="hide-col">{item.mass}</td>
          </tr>
        )
    })
    this.setState({data:array});
  }
  
  render() {
    return (
      <Grid fluid>

        <Row className="header-img">
          <Col md={12}>
            <h1>SAMPLE</h1>
            <p><div></div>Lorem ipsum dolor sit amet<div></div></p>
          </Col>
        </Row>

        <NavBar/>

        <Row className="background">
          <Col md={2} xs={0}></Col>

          <Col md={10} xs={12}className="dashboard">
              <Row>

                <Subtitle subt="Morbi imperdiet, sapien a consequat sollicitudin"/>

                <Col md={12}>
                  <Row className="gauge-charts">
                    <Col md={2} xs={6}>
                      <img className="gauge-chart" src="assets/gauge.png"/>
                    </Col>
                    <Col md={2} xs={6}>
                      <img className="gauge-chart" src="assets/gauge.png"/>
                    </Col>
                    <Col md={2} xs={6}>
                      <img className="gauge-chart" src="assets/gauge.png"/>
                    </Col>
                    <Col md={2} xs={6}>
                      <img className="gauge-chart" src="assets/gauge.png"/>
                    </Col>
                  </Row>
                </Col>

                <Col md={12}>
                  <Row>
                    <Col md={6} xs={12}>
                      <img className="gauge-chart" src="assets/stackedbars.png"/>
                    </Col>
                    <Col md={6} xs={12}>
                      <img className="gauge-chart" src="assets/box-plot.png"/>
                    </Col>
                  </Row>
                </Col>

                <Subtitle subt="Morbi imperdiet, sapien a consequat sollicitudin"/>

                <Col md={5} xs={12} >
                  <FormGroup className="search-bar" controlId="formValidationError4" validationState="">
                    <InputGroup>
                      <InputGroup.Addon><span><i class="fas fa-search"></i></span></InputGroup.Addon>
                      <FormControl type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange}/>
                      <InputGroup.Addon><span><i class="fas fa-times"></i></span></InputGroup.Addon>
                    </InputGroup>
                    <FormControl.Feedback />
                  </FormGroup>            
                </Col>

                <TableResults data={this.state.data}/>

              </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
