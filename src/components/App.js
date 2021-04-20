import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import LeftPanel from './LeftPanel/LeftPanel';
import CenterPanel from './CenterPanel/CenterPanel';
// import {
//   Grid,
//   Form,
//   Segment,
//   Button,
//   Header,
//   Message,
//   Icon,
// } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <>
    <Container fluid >
    <Header /> 
    <hr />
      <Row>
        <Col >
          <LeftPanel />
        </Col>

        <Col lg={7}>
          <CenterPanel />
        </Col>
      </Row>
    </Container>      
    </>
  );
}

export default App;


