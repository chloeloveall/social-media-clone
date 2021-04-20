import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

function Status () {
  return (
    <InputGroup>
      <InputGroup.Append>
        <InputGroup.Text id="btnGroupAddon"></InputGroup.Text>
      </InputGroup.Append>
      <FormControl
        type="text"
        placeholder="What's going on?"
        aria-label="What's going on?"
        aria-describedby="btnGroupAddon"
      />
    </InputGroup>
  )
}

export default Status;