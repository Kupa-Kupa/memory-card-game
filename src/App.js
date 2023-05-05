import React, { useState } from 'react';
import './App.css';
import ScoreBoard from './ScoreBoard';
import CardBoard from './CardBoard';

const App = () => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  return (
    <div className="App">
      <ScoreBoard score={score} topScore={topScore} />
      <CardBoard setScore={setScore} setTopScore={setTopScore} score={score} />
    </div>
  );
};

export default App;

/*

Take a little bit of time to think about how you want to implement your 
application, the features you want to implement, which components you 
need, and how to structure your application. Your application should 
include a scoreboard, which counts the current score, and a “Best Score”, 
which shows the best score you achieved thus far. You also need a couple 
of cards that display images and possibly informational text. There should 
be a function that displays the cards in a random order anytime a user 
clicks one. Be sure to invoke that function when the component mounts.

Now that you’ve thought about the structure of your application, set up 
the folder structure and start creating the components. We suggest you use 
functional components and therefore hooks in this project.

*/
