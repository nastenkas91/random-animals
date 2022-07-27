import './Picture.css'

function Picture({ image, onOpening }) {

  return(
    <img className='picture' src={image}/>
  )
}

export default Picture;