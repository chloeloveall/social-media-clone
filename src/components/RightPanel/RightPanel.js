import React from 'react';
import Suggested from './Suggested';
import { Card } from 'react-bootstrap';
import  newbird1  from './../../img/newbird1.jpeg';
import  newbird2  from './../../img/newbird2.jpeg';
import  newbird3  from './../../img/newbird3.jpeg';
import  newbird4  from './../../img/newbird4.jpeg';
import  newbird5  from './../../img/newbird5.jpeg';
const suggestedList = [
  {
    thumbNail: newbird1,
    user:'New 1'
  },
  {
    thumbNail:newbird2,
    user:'New 2'
  },
  {
    thumbNail:newbird3,
    user:'New 3'
  },
  {
    thumbNail:newbird4,
    user:'New 4'
  },
  {
    thumbNail:newbird5,
    user:'New 5'
  }
]

function RightPanel () {
  return (
    <>
      <Card className='suggested-card'>
        {suggestedList.map((suggested, index) => 
          <Suggested thumbNail={suggested.thumbNail}
          user={suggested.user}
          key={index}/>
        )}
      </Card>
    </>
  );
}

export default RightPanel;