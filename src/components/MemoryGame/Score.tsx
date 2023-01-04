import "../../assets/styles/memory_game/score.scss"


type ScoreProps = {
  moves: number
  bestScore: number
}

function Score(props:ScoreProps) {

  return (
    <div className="score-container">
      <div>
        <div>
          <span className="score">Moves:</span> <span className="score">{props.moves}</span>
        </div>
        {localStorage.getItem('bestScore') && (
          <div>
            <span className="score">Best score:</span> <span className="score"> {props.bestScore} </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Score