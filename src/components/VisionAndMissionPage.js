import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import CommonStrip from './CommonStrip';

const VisionAndMissionPage = () => {
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
          <CommonStrip title="Vision And Mission" />
          <div className="vision-container">
            <div className="content">
              <section className="about-page-header">
                <h1>Animal Welfare Society</h1>
                <br></br>
                <p>
                  Karma foundation’s vision & mission is to help our street animals in the best possible way utilizing the available resources optimally.</p>
                <p>
                  We truly believe that to achieve success & to make a difference we need to utilize the existing resources & make each and every animal lover a part of the NGO.
            </p>
                <p>
                  We believe in utilizing the existing work force of Vets & volunteers to help the animals in need area wise & funding the treatment of such stray animals in a subsidized & case merit basis.
            </p>
                <p>
                  Pune city is our pilot model where we plan to use technology & our team of vets & volunteers to make a optimized & justified treatment model.
            </p>
                <p>
                  Once we have success in Pune, we will expand to different cities with the same model.
            </p>
              </section>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default VisionAndMissionPage;