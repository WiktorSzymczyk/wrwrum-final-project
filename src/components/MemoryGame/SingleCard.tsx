import classnames from 'classnames'
import {ReactComponent as Logo} from '../assets/img/logo.svg'

type CardProps = {
    image: string,
    onClick: (id: number) => void,
    id: number,
    isInactive: boolean,
    isFlipped: boolean,
    isDisable: boolean
}

const singleCard = (props: CardProps) => {

    const backSide = Logo 

    const handleClick = () => {
        !props.isFlipped && !props.isDisable && props.onClick(props.id);
    };

    // <div className='modalSmall'>
    //         <Logo />
    //     </div>

  return (
    <div className={classnames("card", {
        "is-flipped": props.isFlipped,
        "is-inactive": props.isInactive
      })}
      onClick={handleClick}>
      <div className="card-face">
        <img src={backSide} alt="card backside" />
      </div>
      <div className="card-face card-back-face">
        <img src={props.image} alt="card" />
      </div>
    </div>
  )
}

export default singleCard
