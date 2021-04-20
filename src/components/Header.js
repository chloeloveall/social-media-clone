import React from 'react';
import { ButtonToolbar, Button, ButtonGroup, InputGroup, FormControl } from 'react-bootstrap';
import { Icon, Menu, Segment, Input } from 'semantic-ui-react';

function Header() {
  return (
    <>
    <Menu stackable>
        <Menu.Item
          // active={activeItem === 'home'}
          // onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='notifications'
          // active={activeItem === 'notifications'}
          // onClick={this.handleItemClick}
        >
          Notifications
        </Menu.Item>

        <Menu.Item
          name='messages'
          // active={activeItem === 'messages'}
          // onClick={this.handleItemClick}
        >
          Messages
        </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item>
          <Input
            // action={{ color: 'blue', content: 'Search' }}
            icon='search'
            iconPosition='right'
            placeholder='Search'
          />
        </Menu.Item>

        <Menu.Item
          name='tweet'
          // active={activeItem === 'tweet'}
          // onClick={this.handleItemClick}
        >
          Tweet
        </Menu.Item>
      </Menu.Menu>
      </Menu>
      {/* <ButtonToolbar className="justify-content-between">
        <ButtonGroup size="lg" className="mr-2">
          <Button variant="primary">Home</Button>
          <Button variant="primary">Notifications</Button>
          <Button variant="primary">Messages</Button>
        </ButtonGroup>
        <ButtonGroup>
        <InputGroup size="lg">
          <InputGroup.Append>
            <InputGroup.Text id="btnGroupAddon">
            <Icon name='search' />
            </InputGroup.Text>
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
      </ButtonToolbar> */}
    </>
  )
}

export default Header;