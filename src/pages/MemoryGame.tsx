import {ReactComponent as Logo} from '../assets/img/logo.svg'
import {useState} from "react"

const cardImages = [
    {src: "/img/memory_game/memory_game_01.png"},
    {src: "/img/memory_game/racing-race-car-driver-rubber-duck-formula-1.png"},
    {src: "/img/memory_game/memory_game_01.png"},
    {src: "/img/memory_game/memory_game_01.png"},
    {src: "/img/memory_game/memory_game_01.png"},
    {src: "/img/memory_game/memory_game_01.png"},
]

const MemoryGame = () => {

    const [cards, setCards] = useState([{}])
    const [turns, setTurns] = useState(0)

    // shuffel cards
    const shuffleCards = () => {
    const suffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random()}))
    setCards(suffledCards);
    setTurns(0)
  }

    console.log(cards, turns)

  return (
    <div>
      <h1> Memory Game </h1>
        <img src="../img/memory_game/memory_game_01.png" />
        {/* <div className='modalSmall'>
            <Logo />
        </div> */}
        <button className="medium-button" onClick={shuffleCards}>New Game</button>
    </div>
  )
}

export default MemoryGame
