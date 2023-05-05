import React from 'react';
import './Card.css';
import uniqid from 'uniqid';

const Card = (props) => {
  // get cards object
  const { cards } = props;
  console.log('cards', cards);

  // handle click on individual card
  // https://dev.to/andyrewlee/how-to-update-an-array-of-objects-in-react-state-3d
  const handleClick = (e) => {
    const targetID = Number(e.target.id);
    console.log(targetID);

    console.log('checkIfPrevClicked(targetID)', checkIfPrevClicked(targetID));

    if (checkIfPrevClicked(targetID)) {
      console.log(`You've clicked this before. You Lose!`);
      // reset score to zero
      props.setScore(0);

      // reset cards so clicked = false
      const newCards = cards.map((card) => {
        return { ...card, clicked: false };
      });

      // set cards back to the initial state
      props.setCards(newCards);
    } else {
      // set score
      props.setScore((prevState) => {
        return prevState + 1;
      });

      // set top score
      props.setTopScore((prevState) => {
        if (prevState <= props.score) {
          return prevState + 1;
        }
        return prevState;
      });

      // create new cards with the last card's clicked prop set to true
      const newCards = cards.map((card) => {
        if (card.id === targetID) {
          return { ...card, clicked: true };
        }
        return card;
      });

      // randomise order of new cards so they will display differently
      shuffle(newCards);

      // set cards
      props.setCards(newCards);
    }

    checkWin();

    // cards.forEach((card) => {
    //   if (id === card.id) {
    //     if (card.clicked === true) {
    //       console.log(`You've clicked this before. You Lose!`);
    //       props.setScore(0);
    //     } else {
    //       props.setScore((prevState) => {
    //         return prevState + 1;
    //       });

    //       props.setTopScore((prevState) => {
    //         if (prevState <= props.score) {
    //           return prevState + 1;
    //         }
    //         return prevState;
    //       });
    //     }
    //   }
    // });
  };

  const checkIfPrevClicked = (id) => {
    let prevClicked = false;

    // check if card has already been clicked
    cards.forEach((card) => {
      if (id === Number(card.id)) {
        if (card.clicked === true) {
          prevClicked = true;
        }
      }
    });

    return prevClicked;
  };

  const checkWin = () => {
    // setScore is async so this is not receiving the correct value
    // How do i force receive most recent value??
    if (props.score === 4) {
      console.log('You Win!');
    }
  };

  // shuffle array function
  // https://javascript.info/task/shuffle#:~:text=Write%20the%20function%20shuffle(array,%2C%202%5D%20%2F%2F%20...
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  return cards.map((card) => {
    // console.log('card', card);
    return (
      <div className="card" key={uniqid()} id={card.id} onClick={handleClick}>
        {card.number}
      </div>
    );
  });
};

export default Card;
