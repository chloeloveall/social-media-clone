import React from 'react';
import Tweet from './Tweet';

const tweetList = [
  {
    thumbNail:'',
    user:'',
    content:''
  },
  {
    thumbNail:'',
    user:'',
    content:''
  },
  {
    thumbNail:'',
    user:'',
    content:''
  },
  {
    thumbNail:'',
    user:'',
    content:''
  },
  {
    thumbNail:'',
    user:'',
    content:''
  }
]

function TweetManager () {
  return (
    <>
      {tweetList.map((tweet, index) => 
        <Tweet thumbNail={tweet.thumbnail}
        user={tweet.user}
        content={tweet.content}
        key={index}/>
      )}
    </>
  );
}

export default TweetManager;