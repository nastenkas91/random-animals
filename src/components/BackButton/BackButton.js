import './BackButton.css'

function BackButton({ onBackBtnClick }) {

  return(
    <button className='back-btn' aria-label='назад' onClick={onBackBtnClick}></button>
  )
}

export default BackButton;