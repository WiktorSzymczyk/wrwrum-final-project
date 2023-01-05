import "../../assets/styles/memory_game/memory-top-component.scss"


type ScoreProps = {
  moves: number
  bestScore: number
}

function Score(props:ScoreProps) {

  return (
    <div className="memory-top-container">
        <div className="score-container-main">
            <h1 className='game-title'>Memory Game</h1>
            <div className="score-section">
            <span className="score">Moves:</span> <span className="score">{props.moves}</span>
            </div>
            {/* {localStorage.getItem('bestScore') && (
            <div>
                <span className="score">Best score:</span> <span className="score"> {props.bestScore} </span>
            </div>
            )} */}
        </div>
        <button className="medium-button" onClick={() => {window.location.reload()}}>
          NEW GAME
        </button>

    </div>
  )
}

export default Score