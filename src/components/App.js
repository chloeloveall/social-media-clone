import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header/Header';
import LeftPanel from './LeftPanel/LeftPanel';
import CenterPanel from './CenterPanel/CenterPanel';
import RightPanel from './RightPanel/RightPanel';
import "./App.css";

// import {
//   Grid,
//   Form,
//   Segment,
//   Button,
//   Header,
//   Message,
//   Icon,
// } from "semantic-ui-react";

function App() {
  return (
    <>
    <Container fluid >
    <Header /> 
    <hr />
      <Row>
        <Col lg={3}>
          <LeftPanel />
        </Col>

        <Col lg={6}>
          <CenterPanel />
        </Col>

        <Col lg={3}>
          <RightPanel />
        </Col>
      </Row>
    </Container>      
    </>
  );
}

export default App;


