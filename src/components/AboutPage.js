import React, { useState, useEffect } from 'react';
import CommonStrip from './CommonStrip';
import Loader from '../Loader/Loader';

const HomePage = () => {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  return (
    <div>
      {
        loader ? <Loader /> :
          <div>
            <CommonStrip title="About Us" />
            <div className="about-content-container">
              <section className="content">
                <section className="about-page-header">
                  <h1>About Praman Techno Foundation</h1>
                </section>
                <br></br>
                {/* <h4></h4> */}
                <p>
                  Praman Techno Foundation Established in March 2020 as a Society under Society registration act, 1860, with a wide experienced team, pioneer in education sector, Mr. Nishant Sharma transformed his ideas of manipulation into a Foundation which not only Transform skills into jobs but also help in developing nation in various sectors such as Education, skill development, health and wellness, entertainment, agriculture and many more which further help to attain a sustainable environment.
                </p>
                {/* <h4>Animal Birth Control(ABC)</h4> */}
                <p>
                  Responsibility, Hardwork, innovation and Perfection are the four main strengths  of the Praman Techno Foundation and we at Praman believe to work towards the overall performance and caliber along with a focus towards need in Education sector, health sector  and more importantly in skill development and social awareness.This devotion , dedication and firm determination constantly drive the professionals at Praman Techno Foundation to work towards achievement of goals and assisting trainees to hit the bull’s eye.
                </p>
                {/* <h4>Animal Adoption</h4> */}
                <p>
                  Team Praman with an expert panel reaches out to a wide range of services including Project Management, HR Consulting, Skill development and Livelihood Projects with an employee base in Meerut, Uttar Pradesh; we are trying to locate in Delhi NCR Region.
                </p>
              </section>
            </div>
          </div>
      }
    </div>
  );
}

export default HomePage;