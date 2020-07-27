import React, { useState, useEffect, useRef } from 'react';
import CarouselContent from './CarouselContent';


const Carousel = ({ images }) => {

  const windowWidth = window.outerWidth;
  const [state, setState] = useState({ activeIndex: 0, xTranslate: 0, transition: 0.5 });
  const [slidesArray, setSlidesArray] = useState([images[images.length - 1], images[0], images[1]]);

  const { activeIndex, xTranslate, transition } = state;

  const autoSlideRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();

  useEffect(() => {
    autoSlideRef.current = handleNextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const autoPlay = () => {
      autoSlideRef.current();
    };

    let interval = setInterval(autoPlay, 2000);
    const transitionEnd = window.addEventListener('transitionend', (e) => {
      if(e.target===document.getElementById('carousel')) transitionRef.current();
    });

    const mouseEnter = document.getElementById('carousel').addEventListener('mouseenter', (e) => {
      clearInterval(interval);
    });

    const mouseLeave = document.getElementById('carousel').addEventListener('mouseleave', (e) => {
      interval = setInterval(autoPlay, 3000);
    });

    const onScreenResize = window.addEventListener('resize', () => {
      resizeRef.current();
    })

    return () => {
      clearInterval(interval);
      window.removeEventListener('transitionend', transitionEnd);
      window.removeEventListener('mouseleave', mouseLeave);
      window.removeEventListener('mouseenter', mouseEnter);
      window.removeEventListener('resize', onScreenResize);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (transition === 0) {
      setState({ ...state, transition: 0.5 });
    }
    // eslint-disable-next-line
  }, [transition]);

  const smoothTransition = () => {
    let newSlides = [];
    if (activeIndex === 0) {
      newSlides = [images[images.length - 1], images[0], images[1]];
    }
    else if (activeIndex === images.length - 1) {
      newSlides = [images[activeIndex - 1], images[activeIndex], images[0]];
    }
    else {
      newSlides = [images[activeIndex - 1], images[activeIndex], images[activeIndex + 1]];
    }
    setSlidesArray(newSlides);
    setState({ ...state, xTranslate: windowWidth, transition: 0 });
  };

  function handlePreviousSlide() {
    setState({ ...state, activeIndex: activeIndex === 0 ? images.length - 1 : activeIndex - 1, xTranslate: 0 });
  };

  const handleNextSlide = () => {
    setState({ ...state, activeIndex: (activeIndex === images.length - 1) ? 0 : activeIndex + 1, xTranslate: xTranslate + windowWidth });
  };

  const handleResize = () => {
    console.log(windowWidth);
    setState({ ...state, xTranslate: windowWidth, transition: 0});
  };

  return (
    <div  className="carousel-container">
      <div className="carousel-left-arrow" onClick={() => handlePreviousSlide()}>
        <i class="fas fa-chevron-left" />
      </div>
      <div className="carousel-right-arrow" onClick={handleNextSlide}>
        <i class="fas fa-chevron-right" />
      </div>
      <CarouselContent transition={transition} sliderImages={slidesArray} xTranslate={xTranslate} width={windowWidth} />
    </div>
  );
}

export default Carousel;