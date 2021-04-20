import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image } from 'semantic-ui-react';

function Tweet({
  thumbNail,
  user,
  content
}){
  return (
    <>
      <Grid container columns={2}>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image className="thumbNail" src={thumbNail} alt=''/>
          </Grid.Column>
          <Grid.Column width={13}>
            <Grid.Row>
              <h3>{user}</h3>
            </Grid.Row>
            <Grid.Row>
              <p>{content}</p>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}


Tweet.propTypes = {
  thumbNail: PropTypes.any,
  user: PropTypes.string,
  content: PropTypes.string
}

export default Tweet;