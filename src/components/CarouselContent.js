import React from 'react';
import Slide from './Slide';

const CarouselContent = ({sliderImages, xTranslate, transition, width}) => {

  return ( 
    <div id="carousel" className="carousel-content" style={{transform: `translateX(-${xTranslate}px)`, transition: `transform ease-in ${transition}s`, width: `${width*sliderImages.length}px`}}>
      {sliderImages.map((item, index) => {
        return(
          <Slide key={item} className="slides" imageUrl={item}/>
        );
      })}
    </div>
  );
}

export default CarouselContent;