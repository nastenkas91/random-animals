import './CopyButton.css'
import { BiCopy } from "react-icons/bi";
import { IconContext } from "react-icons";
function CopyButton({ onCopyBtnClick }) {

  return(
    <IconContext.Provider value={{ className:'copy-btn' }}>
      <BiCopy onClick={onCopyBtnClick} />
    </IconContext.Provider>
  )
}

export default CopyButton;