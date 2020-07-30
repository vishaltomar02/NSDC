import React from 'react';

const Slide = (props) => {
  return (
    <div className="slides" style={{backgroundImage: `url(${props.imageUrl})`}}>
      <div className="slides-text">
        <h1>
          <p className="about-image">{props.headerText}</p>
          {props.imageText}
        </h1>
      </div>
    </div>
  );
}

export default Slide;