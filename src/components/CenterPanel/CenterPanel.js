import React from 'react';
import Status from './Status';
import TweetManager from './TweetManager';
import { Card } from 'react-bootstrap';

function CenterPanel () {
  return (
    <>
      <Card style={{ width: "30rem" }}>
        <Status/>
        <TweetManager/>
      </Card>
    </>
  )
}

export default CenterPanel;


