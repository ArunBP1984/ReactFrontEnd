import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table, Button, Form, Col, Row } from 'react-bootstrap';

const EoSLBoard = () => {

    const [applications, setApplications] = useState([]);
        
     
    const handleButtonClickedRED = event => {
        setApplications([]);
       
        fetchDataAppDetailsForSearch('red');
        console.log('Input is: RED');
        
      };

      const handleButtonClickedAMBER = event => {
        setApplications([]);
        fetchDataAppDetailsForSearch('amber');
        console.log('Input is: AMBER');
        
      };

      const handleButtonClickedGREEN = event => {
        setApplications([]);
        fetchDataAppDetailsForSearch('green');
        console.log('Input is: GREEN');
        
      };
  
   
    const fetchDataAppDetailsForSearch = (userInput) => {
        axios.get("http://192.168.1.105:3001/api/eosl?name="+userInput)
        .then((response) => {
            setApplications(response.data);
            console.log(response.data);
        });
    };
  
      return(
        <div>
            <Container className='p-4'>  
            <div>
            <Row className="align-items-center">
            <Col xs="auto">
            <Button variant="danger" onClick={handleButtonClickedRED.bind(this)}>Show me RED</Button>
            </Col>
            <Col xs="auto">
            <Button variant="warning" onClick={handleButtonClickedAMBER.bind(this)}>Show me Amber</Button>
            </Col>
            <Col xs="auto">
            <Button variant="success" onClick={handleButtonClickedGREEN.bind(this)}>Show me GREEN</Button>
            </Col>
            </Row>
            </div>
            </Container>
            <Container className='p-4'>
                <h3>Results: Applications - {applications.length}</h3>
                
                <Table striped bordered responsive hover>
                <thead>
                <tr>
                    <th>Application Name</th>
                    <th>Short Name</th>
                    <th>Functionality</th>
                    <th>Region</th>
                    <th>Snow Package Identifier</th>
                    <th>App Classification</th>
                    <th>License To Operate (LTO)</th>
                    <th>EoSL Status</th>
                    <th>EoSL Mitigation</th>
                    <th>SNOW Status</th>
                    <th>IT Service</th>
                    <th>IT Portfolio</th>
                    <th>TIME Rating</th>
                    <th>CIA Rating</th>
                    <th>Rationalisation Comments</th>
                </tr>
                </thead>
                {/* <tbody><tr><td>{apps.data}</td></tr></tbody> */}
                <tbody>
                    {applications.length >0 && applications.map(application=>  (
                        <tr>
                            
                  <td>{application.name}</td>
                  <td>{application.sname}</td>
                  <td>{application.description}</td>
                  <td>{application.region}</td>
                  <td>{application.id}</td>
                  <td>{application.app_type}</td>
                  <td>{application.LTO_constaints}</td>
                  <td>{application.EoSL}</td>
                  <td>{application.EoSL_mitigation}</td>
                  <td>{application.SNOWStatus}</td>
                  <td>{application.ITService}</td>
                  <td>{application.Portfolio}</td>
                  <td>{application.TIME}</td>
                  <td>{application.CIARating}</td>
                  <td>{application.Rationalisation}</td>
                        </tr>
                    )
                    
                    )}
                </tbody>
            </Table>

            </Container>
        </div>
    )
  };

  export default EoSLBoard;
  
 