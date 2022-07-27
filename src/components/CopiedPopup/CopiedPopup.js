import './CopiedPopup.css'

function CopiedPopup({ isCopied }) {
  return isCopied && <p className='copied-popup'>ссылка скопирована</p>
}

export default CopiedPopup;