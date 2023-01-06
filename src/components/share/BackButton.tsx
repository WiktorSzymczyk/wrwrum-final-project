import {useNavigate} from 'react-router-dom'
import "../../assets/styles/share/backButton.scss"

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div>
    <button className="back-button-container" onClick={() => navigate(-1)}>
        {/* <span className="material-symbols-outlined">
arrow_back
</span> */}
      <svg  viewBox="0 0 24 24" className="back-button"  >
        <path d="M22.286 11.316H4.629l7.114-7.114-1.2-1.2-8.572 8.571a.829.829 0 0 0 0 1.2l8.572 8.572 1.2-1.2-7.114-7.114h17.657v-1.715Z"></path>
      </svg>
      </button>
    </div>
  )
}

export default BackButton
