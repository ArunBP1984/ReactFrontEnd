import React, { useState, useEffect } from "react";
import { Alert, Offcanvas, Button, Image } from 'react-bootstrap';
import { Swing  } from 'react-motions'

const ShowDefinitions = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Welcome to Midstream's Appliaction Rationalisation. This website summarises and highlight the key finding of six months of thorough analysis of the Midstream application portfolio, aiming to recommend target-state architecture to support business needs and ambitions. Our recommendations:
            <ul><b>De-risk</b> Identify all EoSL applications and ensuring appropriate mitigation plan. </ul>
            <ul><b>Simplify</b> Suggesting a roadmap for streamlined and standardised target-state architecture focusing on rationalisation and standardisation (from local to global) across the portfolio. </ul>
            <ul><b>Re-align</b> Highlight 68 non-Midstream apps currently in the Midstream portfolio, for realigning to the appropriate portfolio </ul>
            <></>
            Check out the cards below for all the details!
        </p>
        <hr />
        <p className="mb-0">
        To start with, check out the different definitions we have used in this website&nbsp;&nbsp;&nbsp;<Button variant="dark" onClick={handleShow}>Show Me</Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Rationalisation Glossary</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Swing duration={2} infinite>
        <Image roundedCircle fluid src="/dict.jpeg"/> </Swing>
          <h4>Application Definitions</h4>
          <ul><b>Midstream Core</b>: Applications providing Midstream business capabilities and within a Midstream Portfolio</ul>
          <ul><b>Midstream Supporting</b>: Application that are in the Midstream portfolio and are either extensions to a “Midstream: Core” application, are technical services,  are system integrations or are archived services retained for legal hold</ul>
          <ul><b>Midstream Reassign</b>: Applications that do not provide Midstream capabilities but are currently in a Midstream Portfolio. Therefore are recommended to be moved to a more appropriate Portfolio outside Midstream.</ul>
          <ul><b>Shared Core</b>: Applications providing Midstream business capabilities but owned by an Enterprise Portfolio or the Portfolio of another part of bp business (e.g. Trading and Shipping)</ul>
          <ul><b>Shared Supporting</b>: Application that are not in the Midstream portfolio but provide supporting services to Midstream</ul>
          <ul><b>N/A</b>: Where applications are either retired or no longer relate to Midstream</ul>
          <></>
          <h4>LTO Constraints</h4>
          <ul><b>Non (Green)</b>: No LTO constraints</ul>
          <ul><b>Non Critical (Orange)</b>: LTO constraint but not in the next 2 years</ul>
          <ul><b>Critical (Red)</b>: LTO constraint within the next 2 years</ul>
          <></>
          <h4>EoSL Constraints</h4>
          <ul><b>Green</b>: No EoSL identified or not within a 5 year period</ul>
          <ul><b>Orange</b>: EoSL issue however mitigate not required before 2024</ul>
          <ul><b>Red</b>: EoSL issue requiring mitigation prior before end 2023</ul>
          <ul><b>N/A</b>: Application retired or no longer relates to Midstream</ul>
          <ul><b>Planned</b>: Plans are already in place to mitigate the EoSL within the target period</ul>
          <ul><b>Unplanned</b>: Mitigations are yet to be addressed</ul>
          <ul><b>blank</b>: No EoSL to address</ul>
          <></>
          <h4>General Definitions</h4>
          <ul><b>ITService</b>: The ITService name defined in Service Now for the Application Package</ul>
          <ul><b>Portfolio</b>: The owning Portfolio as defined in Service Now for the Application Package</ul>
          <ul><b>TIME</b>: The TIME rating defined in Service Now for the Application Package (Invest, Tolerate, Migrate or Eliminate). May be overridden if further information is known</ul>
          <ul><b>CIARating</b>: The CIA (Confidentiality, Integrity, Availability) rating defined in Service Now for the Application Package</ul>
          <ul><b>Rationalisation</b>: A description of the rationalisation roadmap that the application package will follow. If blank then the application package is expected to remain in the target application landscape</ul>
        </Offcanvas.Body>
      </Offcanvas>
        </p>
      </Alert>

    )
}

export default ShowDefinitions;

