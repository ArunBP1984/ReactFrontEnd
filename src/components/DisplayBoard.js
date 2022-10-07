import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table, Button, Form, Col, Row } from 'react-bootstrap';
import { Hint } from 'react-autocomplete-hint';


const DisplayBoard = () => {

    const [applications, setApplications] = useState([]);
    const [hintData, setHintData] = useState([]);
  
    const getData = async () => {
        const res = await axios.get('http://192.168.1.105:3080/api/allapps')
          var hintArray = []
           res.data.map(a => hintArray.push(a.name))
            setHintData(hintArray)
      }
    
    const [userInput, setUserInput] = useState('');
   
  
    const handleChange = event => {
        setUserInput(event.target.value)
    }

    const handleButtonClicked = event => {
        fetchDataAppDetailsForSearch();
        console.log('Input is:', userInput);
        
      };
  
    const fetchDataAppDetails = () => {
        axios.get("http://192.168.1.105:3080/api/allapps")
        .then((response) => {
            setApplications(response.data);
            console.log(response.data);
         
        });
    };

    const fetchDataAppDetailsForSearch = () => {
        axios.get("http://192.168.1.105:3001/api/search?name="+userInput)
        .then((response) => {
            setApplications(response.data);
            console.log(response.data);
        });
    };
  
    useEffect(() => {
        getData();
      },[]);
    
      return(
        <div>
            <Container className='p-4'>  
            <h2>Midstream Applications</h2>
            </Container>
            <Container className='p-4'>  
            <div>
            <Row className="align-items-center">
            <Col xs="auto">
            <Hint options={hintData} allowTabFill>
            <input className='input-with-hint' placeholder="Start typing the name of the app" onChange={handleChange}/>
            </Hint>
            </Col>
            <Col xs="auto">
            <Button variant="primary" onClick={handleButtonClicked.bind(this)}>Search</Button>
            </Col>
            <Col xs="auto"><h5>OR</h5></Col>
            <Col xs="auto"><Button variant="primary" onClick={fetchDataAppDetails}>Show Me All</Button></Col>
            </Row>
            </div>
            </Container>
            <Container className='p-4'>
                <h3>Results: Applications Total - {applications.length}</h3>
                
                <Table striped responsive bordered hover>
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

  export default DisplayBoard;
  
 