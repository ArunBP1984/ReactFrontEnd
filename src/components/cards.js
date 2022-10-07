import {Container ,Card, CardGroup, Button} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';   
import { HeatMaps } from'./heatmap'
import { Valuestreams } from './valuestreams';
import { useState } from 'react';
import DisplayBoard from './DisplayBoard'
import AppDeletionBoard from './AppDeletionBoard';
import TIMERatings from './TIMERatings';
import EoSLBoard from './EoSLBoard';

export function Cards(){

    const [isShownHeatMap, setIsShownHeatMap] = useState(false);
    const [isDisabledHideResults, setIsDisabledHideResults] = useState(true);

    const [isShownReAlign, setIsShownReAlign] = useState(false);
    const [isDisabledHideResultsReAlign, setIsDisabledHideResultsReAlign] = useState(true);

    const [isShownValuestreams, setIsShownValuestreams] = useState(false);
    const [isDisabledHideResultsValuestreams, setIsDisabledHideResultsValuestreams] = useState(true);

    const [isShownAppDetails, setIsShownAppDetails] = useState(false);
    const [isDisabledHideResultsAppDetails, setIsDisabledHideResultsAppDetails] = useState(true);
    
    const [isShownTIMEDetails, setIsShownTIMEDetails] = useState(false);
    const [isDisabledHideResultsTIMEDetails, setIsDisabledHideResultsTIMEDetails] = useState(true);

    const [isShownEoSLDetails, setIsShownEoSLDetails] = useState(false);
    const [isDisabledHideResultsEoSLDetails, setIsDisabledHideResultsEoSLDetails] = useState(true);

    const handleClickHeatMap = event => {
        // 👇️ toggle shown state
        setIsShownHeatMap(current => !current);
        setIsDisabledHideResults(current => !current);
    
      };

      const handleClickValuestreams = event => {
        // 👇️ toggle shown state
        setIsShownValuestreams(current => !current);
        setIsDisabledHideResultsValuestreams(current => !current);
    
      };

      const handleClickAppDetails = event => {
        // 👇️ toggle shown state
        setIsShownAppDetails(current => !current);
        setIsDisabledHideResultsAppDetails(current => !current);
    
      };

      const handleClickAppDeletion = event => {
        // 👇️ toggle shown state
        setIsShownReAlign(current => !current);
        setIsDisabledHideResultsReAlign(current => !current);
    
      };
      const handleClickTIMEDetails = event => {
        // 👇️ toggle shown state
        setIsShownTIMEDetails(current => !current);
        setIsDisabledHideResultsTIMEDetails(current => !current);
    
      };

      const handleClickEoSLDetails = event => {
        // 👇️ toggle shown state
        setIsShownEoSLDetails(current => !current);
        setIsDisabledHideResultsEoSLDetails(current => !current);
    
      };



    return(
        <div>
        <Container className='p-4'>  
        <CardGroup>
        <Card>
            <Card.Img variant="top" src="/heatmaps.jpeg" />
            <Card.Body>
              <Card.Title>Heatmaps</Card.Title>
              <Card.Text>
                A visual map of our application landscape over the next 3 years.
              </Card.Text>
              
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" onClick={handleClickHeatMap}>Explore</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="warning" disabled = {isDisabledHideResults} onClick={handleClickHeatMap}>Hide</Button>
            </Card.Footer>
          </Card>
            <Card>
            <Card.Img variant="top" src="/EoSL.jpeg" />
            <Card.Body>
              <Card.Title>End of Service Life (EoSL)</Card.Title>
              <Card.Text>
                Find details of applications with EoSL risk.
              </Card.Text>
              
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" onClick={handleClickEoSLDetails}>Explore</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="warning" disabled = {isDisabledHideResultsEoSLDetails} onClick={handleClickEoSLDetails}>Hide</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="/library.jpeg" />
            <Card.Body>
              <Card.Title>Midstream Application Details</Card.Title>
              <Card.Text>
                Find out details of an application including where it is used, service owner, capability it is tagged to and much much more...
              </Card.Text>
             
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" onClick={handleClickAppDetails}>Explore</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="warning" disabled = {isDisabledHideResultsAppDetails} onClick={handleClickAppDetails}>Hide</Button>
            </Card.Footer>
          </Card>
          
          <Card>
            <Card.Img variant="top" src="/ReAlign.jpg" />
            <Card.Body>
              <Card.Title>Midstream Application Re-Alignment</Card.Title>
              <Card.Text>
                Find out the list of applications which would need to move out from our portfolio.
              </Card.Text>
              
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" onClick={handleClickAppDeletion}>Explore</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="warning" disabled = {isDisabledHideResultsReAlign} onClick={handleClickAppDeletion}>Hide</Button>
            </Card.Footer>
          </Card>
          
          <Card>
            <Card.Img variant="top" src="/timeratings.jpeg" />
            <Card.Body>
              <Card.Title>TIME Ratings</Card.Title>
              <Card.Text>
                A summary of the TIME Ratings for Midstream apps per portfolio
              </Card.Text>
             
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" onClick={handleClickTIMEDetails}>Explore</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="warning" disabled = {isDisabledHideResultsTIMEDetails} onClick={handleClickTIMEDetails}>Hide</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="/projects.jpeg" />
            <Card.Body>
              <Card.Title>Midstream Valuestreams</Card.Title>
              <Card.Text>
                Learn about the digital initiatives which are transforming Midstream into a digitally disruptive organisation
              </Card.Text>
             
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" onClick={handleClickValuestreams}>Learn More</Button>&nbsp;&nbsp;
            <Button variant="warning" disabled = {isDisabledHideResultsValuestreams} onClick={handleClickValuestreams}>Hide</Button>
            </Card.Footer>
          </Card>
        </CardGroup>
        </Container>
        <Container className='p-4'>  
        <div>
        {/* 👇️ show component on click */}
      {isShownHeatMap && <HeatMaps/> }
      {isShownValuestreams && <Valuestreams/> }
      {isShownAppDetails && <DisplayBoard/> }
      {isShownReAlign && <AppDeletionBoard/> } 
      {isShownTIMEDetails && <TIMERatings/> }
      {isShownEoSLDetails && <EoSLBoard/> }   
      </div>
      </Container> 
      </div>
      
    )
}
