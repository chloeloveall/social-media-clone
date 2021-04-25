import React from 'react';
import Status from './Status';
import TweetManager from './TweetManager';
import { Card } from 'react-bootstrap';

function CenterPanel () {
  return (
    <>
      <Card>
        <Status />
        <TweetManager/>
      </Card>
    </>
  )
}

export default CenterPanel;


