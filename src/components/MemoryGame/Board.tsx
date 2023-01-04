import { useEffect, useRef, useState } from 'react'
import Card from './SingleCard'
import "../../assets/styles/memory_game/board.scss"



type BoardProps = {
  setMoves: React.Dispatch<React.SetStateAction<number>>
  finishGameCallback: () => void
  cardIds: Array<number>
}

function Board(props: BoardProps) {
  const [openCards, setOpenCards] = useState<Array<number>>([]);
  const [clearedCards, setClearedCards] = useState<Array<number>>([]);
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState<boolean>(false);
  const timeout = useRef<NodeJS.Timeout>(setTimeout(()=>{}));

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (clearedCards.length === props.cardIds.length) {
     props.finishGameCallback()
    }
  }

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    // check if first card is equal second card
    if ((first % 6 + 1) === (second % 6 + 1)) {
      setClearedCards((prev) => [...prev, first, second]);
      setOpenCards([]);
      return;
    }
    // flip the cards back after 600ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 600);
  }

  const handleCardClick = (id: number) => {
    if (openCards.length === 1) {
      // in this case we have alredy selected one card
      // this means that we are finishing a move
      setOpenCards((prev) => [...prev, id]);
      props.setMoves((moves) => moves + 1)
      disable();
    } else {
      // in this case this is the first card we select
      clearTimeout(timeout.current);
      setOpenCards([id]);
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout = setTimeout(()=>{});
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 600);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);

  const checkIsFlipped = (id: number) => {
    return clearedCards.includes(id) || openCards.includes(id);
  };

  const checkIsInactive = (id: number) => {
    return clearedCards.includes(id)
  };

  return (
    <div className={'board'}>
      {props.cardIds.map(i => {
        return <Card
          key={i}
          image={`/img/memory_game/${i % 6 + 1}.png`}
          id={i}
          isDisable={shouldDisableAllCards}
          isInactive={checkIsInactive(i)}
          isFlipped={checkIsFlipped(i)}
          onClick={handleCardClick}
        />
      })}
    </div>
  )
}

export default Board
