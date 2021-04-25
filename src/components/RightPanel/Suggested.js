import React from "react";
import PropTypes from 'prop-types';
import { Grid, Image } from 'semantic-ui-react';
import './../App.css';

function Suggested({ 
  thumbNail,
  user
}) {
  return (
    <>
      <Grid container>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image className="thumbNailRight" src={thumbNail} alt=''/>
            </Grid.Column>
            <Grid.Column width={11}>
              <h4 className="suggested-user-text">{user}</h4>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      {/* <Card>
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
      </Card> */}
    </>
  );
}

Suggested.propTypes = {
  thumbNail: PropTypes.any,
  user: PropTypes.string
}

export default Suggested;