import React from 'react';
import { ButtonToolbar, Button, ButtonGroup, InputGroup, FormControl } from 'react-bootstrap';

function Header() {
  return (
    <>
      <ButtonToolbar className="justify-content-between">
        <ButtonGroup size="lg" className="mr-2">
          <Button variant="primary">Home</Button>
          <Button variant="primary">Notifications</Button>
          <Button variant="primary">Messages</Button>
        </ButtonGroup>
        <ButtonGroup>
        <InputGroup size="lg">
          <InputGroup.Append>
            <InputGroup.Text id="btnGroupAddon">:D</InputGroup.Text>
          </InputGroup.Append>
          <FormControl
            type="text"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="btnGroupAddon"
          />
        </InputGroup>
        <ButtonGroup className="mr-2">
          <Button variant="primary">Tweet</Button>
        </ButtonGroup>
        </ButtonGroup>
      </ButtonToolbar>
    </>
  )
}

export default Header;