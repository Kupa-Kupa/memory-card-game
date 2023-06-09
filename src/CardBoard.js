import React, { useState } from 'react';
import './CardBoard.css';
import Card from './Card';

const CardBoard = (props) => {
  const [cards, setCards] = useState([
    { number: 1, clicked: false, id: 1 },
    { number: 2, clicked: false, id: 2 },
    { number: 3, clicked: false, id: 3 },
    { number: 4, clicked: false, id: 4 },
    { number: 5, clicked: false, id: 5 },
    { number: 6, clicked: false, id: 6 },
    { number: 7, clicked: false, id: 7 },
    { number: 8, clicked: false, id: 8 },
    { number: 9, clicked: false, id: 9 },
    { number: 10, clicked: false, id: 10 },
    { number: 11, clicked: false, id: 11 },
    { number: 12, clicked: false, id: 12 },
  ]);

  const playAgain = () => {
    console.log('Play Again');
    props.setScore(0);

    // reset cards so clicked = false
    const newCards = cards.map((card) => {
      return { ...card, clicked: false };
    });

    // set cards back to the initial state
    setCards(newCards);
  };

  if (Number(props.score) === cards.length) {
    return (
      <div className="winner">
        <p>You Win!</p>
        <button onClick={playAgain}>Play Again</button>
      </div>
    );
  } else {
    return (
      <div className="card-board">
        <Card
          cards={cards}
          setCards={setCards}
          score={props.score}
          setScore={props.setScore}
          setTopScore={props.setTopScore}
        />
      </div>
    );
  }
};

export default CardBoard;
