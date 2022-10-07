import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table, Button } from 'react-bootstrap';


const AppDeletionBoard = () => {
    const [applications, setApplications] = useState([]);
  
    const fetchData = () => {
        axios.get("http://192.168.1.105:3001/api/delapps")
        .then((response) => {
            setApplications(response.data);
            console.log(response.data);
        });
    };
  
    useEffect(() => {
        fetchData();
      }, []);
    
      return(
        <div>
            <Container className='p-4'>  
            <h2>Midstream Applications Re-Alignment (Total Applications: {applications.length})</h2>
            {/* <Button variant="info" onClick={fetchData}>Show Me All</Button> */}
            <Table striped bordered hover>
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

  export default AppDeletionBoard;
  
 