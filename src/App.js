import * as React from 'react';
import './App.css';

function imageProgression(currentImage, image) {
  // this prioritize the fullsize image, but make sure to return the thumbnail if the currentImage is not available
  if (image.type === 'fullsize image') {
    return image.src;
  } else if (image.type === 'thumbnail image') {
    return image.src;
  } else return currentImage;
}

function useProgressiveImage({ fullsize, thumbnail }) {
  // useReducer allows me to use multiple if statements to switch which photo is used as the src
  const [currentImage, dispatch] = React.useReducer(imageProgression);
  React.useEffect(() => {
    const fullsizeImage = new Image();
    const thumbnailImage = new Image();

    // dispatch goes with useReducer and allows for a kind of deep update of the image
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
  // setting the src value to the local images by passing them into the useProgressiveImage function
  const src = useProgressiveImage({
    fullsize: 'images/NikeFullsize.jpg',
    thumbnail: 'images/NikeThumb.jpg',
  });

  return (
    <div className='App'>
      <header className='App-header'>Progressive Image Loading</header>
      <img
        className='fullImage'
        // the thumbnail and fullsize images will both be rendered here (only one at a time)
        src={src}
        alt='Sweet Nike sneaks in the street'
      />
    </div>
  );
}

export default App;
