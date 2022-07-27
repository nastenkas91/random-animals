import './NextButton.css'

function NextButton({ onNextBtnClick, nextLabel }) {

  return(
    <button className='next-btn' aria-label='следующая картинка' onClick={onNextBtnClick}>{nextLabel}</button>
  )
}

export default NextButton;