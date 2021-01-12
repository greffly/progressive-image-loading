import React from 'react';
import './Image.css';

function Image() {
  return (
    <div className='imageWrapper'>
      <img className='thumb' src='images/NikeThumb.jpg' alt='' />
      <img className='original' src='images/NikeFullsize.jpg' alt='' />
    </div>
  );
}

export default Image;
