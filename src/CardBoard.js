import React, { useState } from 'react';
import './CardBoard.css';
import Card from './Card';

const CardBoard = (props) => {
  const [cards, setCards] = useState([
    { number: 546, clicked: false, id: 546 },
    { number: 469, clicked: false, id: 469 },
    { number: 120, clicked: false, id: 120 },
    { number: 865, clicked: false, id: 865 },
  ]);

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
};

export default CardBoard;
