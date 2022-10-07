import React, { useState, useEffect } from "react";
import { Accordion, Table, Container, Alert } from 'react-bootstrap';
import axios from "axios";
import { Flash } from 'react-motions'
import 'bootstrap/dist/css/bootstrap.min.css';  
import './topsummary.css'; 

  const TopSummary = () => {
  const [applications, setApplications] = useState([]);

  const fetchTopLevelSummaryDetails = () => {
    axios.get("http://192.168.1.105:3001/api/toplevelsummary")
    .then((response) => {
        setApplications(response.data);
        console.log(response.data);
     
    });
};

useEffect(() => {
  fetchTopLevelSummaryDetails();
},[]);

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header><Flash  duration={2} infinite>
        <h2>Rationalisation Summary</h2> </Flash ></Accordion.Header>
            <Accordion.Body>
            <Alert variant="dark">
            <p>    
      <h5 align = 'center' style={{ color: 'black' }}>Our Rationalisation roadmap aims to reduce the application landscape by 45% - Aiming  to reduce regional based landscape by up 17% through 11+ global strategic deployments - 68 applications (35% of the Midstream Portfolio)  do not directly support the Midstream Business; looking to reassign these applications</h5>
      </p>
      <hr />
      <p className="mb-0">Check out the Heatmaps card for a visual depiction</p>
      </Alert>
              <div>
                <></>
            <Table striped borderless hover variant="striped" size='sm'>
      <thead>
        <tr>
          <th>Portfolio</th>
          <th>Sub Portfolio</th>
          <th>Application Status</th>
          <th>As-Is Q3 2022</th>
          <th>Interim State 2023</th>
          <th>Strategic State 2024+</th>
          <th>Applications Reduced</th>
        </tr>
      </thead>
      {/* <tbody><tr><td>{apps.data}</td></tr></tbody> */}
      <tbody>
                    {applications.length >0 && applications.map(application=>  (
                <tr>
                  <td>{application.Portfolio}</td>
                  <td>{application.SubPortfolio}</td>
                  <td>{application.Status}</td>
                  <td>{application.Current}</td>
                  <td>{application.Interim}</td>
                  <td>{application.Target}</td>
                  <td>{application.Change}</td>
                </tr>
                    )
                    
                    )}
                </tbody>
    </Table></div>
            </Accordion.Body>
          </Accordion.Item>
                  </Accordion>
      );
}

export default TopSummary;