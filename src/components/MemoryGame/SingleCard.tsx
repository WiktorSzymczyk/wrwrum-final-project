import classnames from 'classnames'
import {ReactComponent as Logo} from '../assets/img/logo.svg'
import "../../assets/styles/memory_game/singleCard.scss"


type CardProps = {
    image: string,
    onClick: (id: number) => void,
    id: number,
    isInactive: boolean,
    isFlipped: boolean,
    isDisable: boolean
}

const singleCard = (props: CardProps) => {

    const cover = "/img/memory_game/logo.svg"

    const handleClick = () => {
        !props.isFlipped && !props.isDisable && props.onClick(props.id);
    };

  return (
    <div className={classnames("card", {
        "is-flipped": props.isFlipped,
        "is-inactive": props.isInactive
      })}
      onClick={handleClick}>
      <div className="card-face">
        <img src={cover} alt="card backside" />
      </div>
      <div className="card-face card-back-face">
        <img src={props.image} alt="card" />
      </div>
    </div>
  )
}

export default singleCard
