import React from 'react';
import './ScoreBoard.css';

const ScoreBoard = (props) => {
  return (
    <div className="ScoreBoard">
      <p>Score: {props.score}</p>
      <p>Top Score: {props.topScore} / 12</p>
    </div>
  );
};

export default ScoreBoard;
