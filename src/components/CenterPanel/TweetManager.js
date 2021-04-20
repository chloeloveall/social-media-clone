import React from 'react';
import Tweet from './Tweet';
import  bird1  from './../../img/bird1.jpeg';
import  bird2  from './../../img/bird2.jpeg';
import  bird3  from './../../img/bird3.jpeg';
import  bird4  from './../../img/bird4.jpeg';
import  bird5  from './../../img/bird5.jpeg';
const tweetList = [
  {
    thumbNail: bird1,
    user:'Red Sparrow',
    content:'Fromage queso caerphilly. Red leicester feta croque monsieur dolcelatte croque monsieur pepper jack swiss babybel. Hard cheese cauliflower cheese goat stilton blue castello smelly cheese cream cheese bocconcini. Fromage chalk and cheese cauliflower cheese cow boursin goat squirty cheese.'
  },
  {
    thumbNail:bird2,
    user:'Big Bird',
    content:'Brie melted cheese cheese strings. Croque monsieur cheese triangles chalk and cheese cheeseburger feta jarlsberg stinking bishop rubber cheese. Mascarpone stinking bishop goat queso mozzarella danish fontina jarlsberg parmesan. Cheese on toast caerphilly cauliflower cheese.'
  },
  {
    thumbNail:bird3,
    user:'Tiny Condor',
    content:'Danish fontina cheese on toast port-salut. St. agur blue cheese stinking bishop croque monsieur cheese strings brie dolcelatte cheese strings danish fontina. Mascarpone cheese on toast the big cheese squirty cheese who moved my cheese hard cheese pepper jack stinking bishop. Cheese strings cheese and biscuits manchego hard cheese.'
  },
  {
    thumbNail:bird4,
    user:'Grand Kiwi',
    content:'Edam macaroni cheese cheesecake. Roquefort lancashire melted cheese squirty cheese edam cheesecake emmental swiss. Mascarpone melted cheese babybel feta who moved my cheese bavarian bergkase cheese slices the big cheese. St. agur blue cheese pepper jack when the cheese comes out everybodys happy swiss.'
  },
  {
    thumbNail:bird5,
    user:'Sassy Emu',
    content:'Mozzarella squirty cheese bocconcini. Port-salut camembert de normandie hard cheese pepper jack blue castello taleggio emmental airedale. Monterey jack port-salut blue castello camembert de normandie queso cheese and wine chalk and cheese cow. Cow fromage.'
  }
]

function TweetManager () {
  return (
    <>
      {tweetList.map((tweet, index) => 
        <Tweet thumbNail={tweet.thumbNail}
        user={tweet.user}
        content={tweet.content}
        key={index}/>
      )}
    </>
  );
}

export default TweetManager;