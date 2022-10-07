import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import './topsummary.css'; 

export function HeatMaps(){
    return (
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header><h2>Americas</h2></Accordion.Header>
            <Accordion.Body>
            <Table borderless>
      <thead>
        <tr>
          <th><h2>As-Is (2022)</h2></th>
          <th><h2>Interim (2023)</h2></th>
          <th><h2>Target (2024+)</h2></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><div className="centre"> <img src = "Americas As-Is (2022).jpg" alt = "Current State" /></div></td>
          <td><div className="centre"> <img src = "/Americs Interim (2023).jpg" alt = "Interim State" /></div></td>
          <td><div className="centre"> <img src = "/Americas Target (2024+).jpg" alt = "Target State" /></div></td>
        </tr>
     </tbody>
    </Table>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><h2>ESA</h2></Accordion.Header>
            <Accordion.Body>
            
            <Table borderless>
      <thead>
        <tr>
          <th><h2>As-Is (2022)</h2></th>
          <th><h2>Interim (2023)</h2></th>
          <th><h2>Target (2024+)</h2></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><div className="centre"> <img src = "/ESA ASPAC As-Is (2022).jpg" alt = "Current State" /></div></td>
          <td><div className="centre"> <img src = "/ESA ASPAC Interim (2023).jpg" alt = "Interim State" /></div></td>
          <td><div className="centre"> <img src = "/ESA ASPAC Target (2024+).jpg" alt = "Target State" /></div></td>
        </tr>
     </tbody>
    </Table>
    </Accordion.Body>
          </Accordion.Item>
                  </Accordion>
      );
    }