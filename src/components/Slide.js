import React from 'react';

const Slide = (props) => {
  console.log(props.imageText);
  return (
    <div className="slides-container">
      <img className="slides" src={props.imageUrl} alt="Reload"/>
      <div className="slides-text">
        <h1>
          {props.imageText}
        </h1>
      </div>
    </div>
  );
}

export default Slide;