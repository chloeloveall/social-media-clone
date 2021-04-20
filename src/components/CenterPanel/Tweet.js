import React from 'react';
import PropTypes from 'prop-types';

function Tweet({
  thumbNail,
  user,
  content
}){
  return (
    <>
      <img src={thumbNail} alt=''/>
      <h3>{user}</h3>
      <p>{content}</p>
    </>
  )
}


Tweet.propTypes = {
  thumbNail: PropTypes.any,
  user: PropTypes.string,
  content: PropTypes.string
}

export default Tweet;