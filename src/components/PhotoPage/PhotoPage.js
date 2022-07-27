import './PhotoPage.css'
import BackButton from "../BackButton/BackButton";
import Picture from "../Picture/Picture";
import NextButton from "../NextButton/NextButton";
import CopyButton from "../CopyButton/CopyButton";
import CopiedPopup from "../CopiedPopup/CopiedPopup";

function PhotoPage({ onBackBtnClick, onNextBtnClick, onCopyBtnClick, image, nextLabel, onOpening, isCopied }) {

  return(
    <div className='photo-page'>
      <BackButton onBackBtnClick={onBackBtnClick} />
      <Picture image={image} onOpening={onOpening} />
      <NextButton onNextBtnClick={onNextBtnClick} nextLabel={nextLabel} />
      <CopyButton onCopyBtnClick={onCopyBtnClick} />
      <CopiedPopup isCopied={isCopied} />
    </div>
  )
}

export default PhotoPage;