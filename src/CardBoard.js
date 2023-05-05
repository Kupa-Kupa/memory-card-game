import React, { useState } from 'react';
import './CardBoard.css';
import Card from './Card';

const CardBoard = (props) => {
  const [cards, setCards] = useState([
    { number: 546, clicked: false, id: 1 },
    { number: 469, clicked: false, id: 2 },
    { number: 120, clicked: false, id: 3 },
    { number: 865, clicked: false, id: 4 },
    { number: 564, clicked: false, id: 5 },
    { number: 852, clicked: false, id: 6 },
    { number: 613, clicked: false, id: 7 },
    { number: 233, clicked: false, id: 8 },
    { number: 176, clicked: false, id: 9 },
    { number: 564, clicked: false, id: 10 },
    { number: 136, clicked: false, id: 11 },
    { number: 976, clicked: false, id: 12 },
  ]);

  if (Number(props.score) === 12) {
    return <div className="winner"> You Win!</div>;
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
