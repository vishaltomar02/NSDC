import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import JoinTeam from './JoinTeam';
import WhatWeDoCards from './WhatWeDoCards';
import NewsAndEvents from './NewsAndEvents';
import SponsorsComponent from './Sponsors';
import useScrollHook from '../CustomHooks/useScrollHook';
import DogVideo from '../videos/dog-video.mp4';
import PosterImage from '../images/video-poster.png';
import Loader from '../Loader/Loader';

const imagesArray = [
  'https://dkprodimages.gumlet.com/AMTM2503_Cover.jpg?format=webp&w=400&dpr=2.6',
  'https://bluecrossofindia.org/wp-content/uploads/2017/06/3.jpg',
  'https://kalyaniawf.org.in/images/G05.jpg',
  'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2015/09/Animal_shelters.jpg?w=1200&h=628&fill=blur&fit=fill',
  'https://i.pinimg.com/originals/05/64/25/05642599e307500e58746d0ad8d2de7f.jpg'
];


const HomePage = () => {

  const [setRef, inView] = useScrollHook({ threshold: 0, triggerOnce: true });
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loader ? <Loader /> :
        <div>
          <div>
            <Carousel images={imagesArray}></Carousel>
          </div>
          <div className="welcome-content-container">
            <div className={`welcome-header-text ${inView ? 'fade-up' : ''}`}>
              <h1 ref={setRef}>Welcome to Karma Foundation</h1>
            </div>
            <div className="welcome-story">
              <section className="welcome-video">
                <div>
                  <video width="100%" height="auto" controls controlsList="nodownload" poster={PosterImage}>
                    <source src={DogVideo}></source>
                  Your Browser Does Not Support The Video Tag.
              </video>
                </div>
              </section>
              <section className="welcome-text">
                <h1>Animal Welfare Society</h1>
                <p>Karma foundation’s vision & mission is to help our street animals in the best possible way utilizing the available resources optimally.</p>
                <p>We truly believe that to achieve success & to make a difference we need to utilize the existing resources & make each and every animal lover a part of the NGO.</p>
                <p>We believe in utilizing the existing work force of Vets & volunteers to help the animals in need area wise & funding the treatment of such stray animals in a subsidized & case merit basis.</p>
                <p>Pune city is our pilot model where we plan to use technology & our team of vets & volunteers to make a optimized & justified treatment model.</p>
                <p>Once we have success in Pune, we will expand to different cities with the same model.</p>
                <div className="welcome-button">
                  <button>Read More</button>
                </div>
              </section>
            </div>
          </div>
          <JoinTeam />
          <WhatWeDoCards />
          <NewsAndEvents />
          <SponsorsComponent />
        </div>}
    </div>
  );
}

export default HomePage;