import React from 'react';

const Slide = (props) => {
  return (
    <div className="slides" style={{backgroundImage: `url(${props.imageUrl})`}}></div>
  );
}

export default Slide;