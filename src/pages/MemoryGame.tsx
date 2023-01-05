import TopContainer from '../components/MemoryGame/memory-top-component'
import Board from '../components/MemoryGame/Board'
import { useState } from 'react'

import "../assets/styles/memory_game/memoryGame.scss"


const cardIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
cardIds.sort(() => 0.5 - Math.random())
console.log(cardIds);

function MemoryGame() {

  const [moves, setMoves] = useState<number>(0)
  const [bestScore, setBestScore] = useState<number>(
    parseInt(localStorage.getItem('bestScore') || '0') || Number.MAX_SAFE_INTEGER
  )
  const finishGameCallback = () => {
    const newBestScore = moves < bestScore ? moves : bestScore
    setBestScore(newBestScore)
    localStorage.setItem('bestScore', '' + newBestScore)
  }

  return (
    <div className="memory-game-container">
      
            
            <TopContainer
                moves={moves} 
                bestScore={bestScore}
            />
            <Board 
                setMoves={setMoves} 
                finishGameCallback={finishGameCallback} 
                cardIds={cardIds}
            />
     
        
    </div>
  )
}

export default MemoryGame
