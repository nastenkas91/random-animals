import './App.css';
import Main from '../Main/Main';
import PhotoPage from '../PhotoPage/PhotoPage';
import {Route, Routes, useNavigate} from "react-router-dom";
import { dogApi, catApi, foxApi } from "../../utils/api";
import {useEffect, useState} from "react";

function App() {
  const [image, setImage] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const navigate = useNavigate();

  function handleNextDog() {
    dogApi.getPicture()
      .then((res) => setImage(res.url))
      .catch(err => console.log(err))
  }

  function handleNextCat() {
    catApi.getPicture()
      .then((res) => setImage(res.file))
  }

  function handleNextFox() {
    foxApi.getPicture()
      .then((res) => setImage(res.image))
  }

  function handleBackClick() {
    navigate('/random-animals', { replace: true });
    setImage('');
  }

  function handleCopyBtnClick() {
    navigator.clipboard.writeText(image)
      .then(() => {
        return setIsCopied(true)
      })
      .then(() => {
        console.log(isCopied)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isCopied])

  return (
    <div className="app__page">
      <div className="app__page-wrapper">
        <Routes>
          <Route
            path='random-animals'
            element={<Main />}
          />

          <Route
            path='/cats'
            element={<PhotoPage
              image={image}
              onNextBtnClick={handleNextCat}
              nextLabel='Meow!'
              onBackBtnClick={handleBackClick}
              onOpening={handleNextCat}
              onCopyBtnClick={handleCopyBtnClick}
              isCopied={isCopied}
            />}
          />

          <Route
            path='/dogs'
            element={<PhotoPage
              image={image}
              onNextBtnClick={handleNextDog}
              nextLabel='Wuf!'
              onBackBtnClick={handleBackClick}
              onOpening={handleNextDog}
              onCopyBtnClick={handleCopyBtnClick}
              isCopied={isCopied}
            />}
          />

          <Route
            path='/foxes'
            element={<PhotoPage
              image={image}
              onNextBtnClick={handleNextFox}
              nextLabel='What does the fox say??!'
              onBackBtnClick={handleBackClick}
              onOpening={handleNextFox}
              onCopyBtnClick={handleCopyBtnClick}
              isCopied={isCopied}
            />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
