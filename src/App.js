import * as React from 'react';
import './App.css';

function imageProgression(currentImage, image) {
  if (image.type === 'fullsize image') {
    return image.src;
  }
  if (!currentImage) {
    return image.src;
  }
  return currentImage;
}

function useProgressiveImage({ fullsize, thumbnail }) {
  const [currentImage, dispatch] = React.useReducer(imageProgression);
  React.useEffect(() => {
    const fullsizeImage = new Image();
    const thumbnailImage = new Image();

    fullsizeImage.onload = () => {
      dispatch({ type: 'fullsize image', src: fullsize });
    };
    thumbnailImage.onload = () => {
      dispatch({ type: 'thumbnail image', src: thumbnail });
    };

    fullsizeImage.src = fullsize;
    thumbnailImage.src = thumbnail;
  }, [fullsize, thumbnail]);

  return currentImage;
}

function App() {
  const src = useProgressiveImage({
    fullsize: 'images/NikeFullsize.jpg',
    thumbnail: 'images/NikeThumb.jpg',
  });
  return (
    <div className='App'>
      <header className='App-header'>Progressive Image Loading</header>
      <img
        className='fullImage'
        src={src}
        alt='Sweet Nike sneaks in the street'
      />
    </div>
  );
}

export default App;
