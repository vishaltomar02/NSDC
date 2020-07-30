import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import JoinTeam from './JoinTeam';
import WhatWeDoCards from './WhatWeDoCards';
import SponsorsComponent from './Sponsors';
import useScrollHook from '../CustomHooks/useScrollHook';
import DogVideo from '../videos/dog-video.mp4';
import PosterImage from '../images/video-poster.png';
import workshopImage from '../images/workshop.jpg';
import reviewMeeting from '../images/review-meet.jpg';
import counsellingImage from '../images/counselling.jpg';
import healthAwareness from '../images/health-awareness.jpg';
import skillDevelopmentImage from '../images/skill-development.jpeg';
import Loader from '../Loader/Loader';

const imagesArray = [
  {
    imageSrc: workshopImage,
    headerText: 'Workshop',
    text: 'Participating in a workshop organized by Central government in New Delhi, in order to impart knowledge in skill development programs , MSDE has mentored a lot of people from different states.'
  },
  {
    imageSrc: reviewMeeting,
    headerText: 'Review Meeting',
    text: 'A review meeting held in Haryana for a Project under state Govt. in which officials of State govt. were present to understand and review the curriculum of the project.'
  },
  {
    imageSrc: counsellingImage,
    headerText: 'Counselling',
    text: 'We use to conduct small workshops for counseling of career and education in different locations. A better counseling can drive one to lead the path of success.'
  },
  {
    imageSrc: healthAwareness,
    headerText: 'Health Awareness Program',
    text: 'Health awareness program has been organized to spread awareness among people in rural areas. Health checkup oriented programs were also conducted.'
  },
  {
    imageSrc: skillDevelopmentImage,
    headerText: 'Skill Development',
    text: ''
  }
  // 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2015/09/Animal_shelters.jpg?w=1200&h=628&fill=blur&fit=fill',
  // 'https://i.pinimg.com/originals/05/64/25/05642599e307500e58746d0ad8d2de7f.jpg'
];


const HomePage = () => {

  const [setRef, inView] = useScrollHook({ threshold: 0, triggerOnce: true });
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
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
              <h1 ref={setRef}>Welcome to Praman Techno Foundation</h1>
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
                <h1>Our Vision</h1>
                  <p>
                    With a clear vision to take part in social activities of development in various sectors , Praman Techno Foundation has been established to carry development programs on its shoulder.
                  </p>
                  <p>
                    Education , Employment , skill development , Rural development and many sectors are youth demand , we are delight to present our mission to enhance capability of an individual at such extent so that they can understand the need of skills in today world.
                  </p>
                {/* <div className="welcome-button">
                  <button>Read More</button>
                </div> */}
              </section>
            </div>
          </div>
          <JoinTeam />
          <WhatWeDoCards />
          <div className="divider"></div>
          <SponsorsComponent />
        </div>}
    </div>
  );
}

export default HomePage;