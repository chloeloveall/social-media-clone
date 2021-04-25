import React from "react";
import { Card } from 'react-bootstrap';
import burd from "./../../img/burd.jpg";
import berd from "./../../img/berd.jpg";
import './../App.css';

function UserHeader() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={burd} />
          <Card.Img className="overlayImg" src={berd} />
        <Card.Body>
          <Card.Title className="float-right user-left-style">User Name</Card.Title>
        </Card.Body>
        <Card.Body className='mx-auto'>
          <Card.Link href="#">Tweets</Card.Link>
          <Card.Link href="#">Following</Card.Link>
          <Card.Link href="#">Followers</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default UserHeader;