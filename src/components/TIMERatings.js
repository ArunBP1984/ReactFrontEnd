import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table, Button } from 'react-bootstrap';


const TIMERatings = () => {
    const [results, setResults] = useState([]);
  
    const fetchData = () => {
        axios.get("http://192.168.1.105:3001/api/time")
        .then((response) => {
            setResults(response.data);
            console.log(response.data);
        });
    };
  
    useEffect(() => {
        fetchData();
      }, []);
    
      return(
        <div>
            <Container className='p-4'>  
            <h2>TIME Ratings Summary</h2>
            {/* <Button variant="info" onClick={fetchData}>Show Me All</Button> */}
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Portfolio</th>
                    <th>LTO Status</th>
                    <th>Invest</th>
                    <th>Tolerate</th>
                    <th>Migrate</th>
                    <th>Eliminate</th>
                    <th>Total</th>
                </tr>
                </thead>
                {/* <tbody><tr><td>{apps.data}</td></tr></tbody> */}
                <tbody>
                    {results.length >0 && results.map(result=>  (
                <tr>
                  <td>{result.Portfolio}</td>
                  <td>{result.SubType}</td>
                  <td>{result.Invest}</td>
                  <td>{result.Tolerate}</td>
                  <td>{result.Migrate}</td>
                  <td>{result.Eliminate}</td>
                  <td>{result.Total}</td>
                </tr>
                    )
                    
                    )}
                </tbody>
            </Table>
            </Container>
        </div>
    )
  };

  export default TIMERatings;
  
 