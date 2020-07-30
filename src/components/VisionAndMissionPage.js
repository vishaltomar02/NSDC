import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import CommonStrip from './CommonStrip';

const VisionAndMissionPage = (props) => {
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
          <CommonStrip title="Vision And Mission" {...props} />
          <div className="vision-container">
            <div className="content">
              <section className="about-page-header">
                {/* <h1>Animal Welfare Society</h1> */}
                <br></br>
                <p>
                  With a clear vision to take part in social activities of development in various sectors , Praman Techno Foundation has been established to carry development programs on its shoulder.
                </p>
                <p>
                  Education , Employment , skill development , Rural development and many sectors are youth demand , we are delight to present our mission to enhance capability of an individual at such extent so that they can understand the need of skills in today world.
                </p>
                {/* <p>
                  We believe in utilizing the existing work force of Vets & volunteers to help the animals in need area wise & funding the treatment of such stray animals in a subsidized & case merit basis.
            </p>
                <p>
                  Pune city is our pilot model where we plan to use technology & our team of vets & volunteers to make a optimized & justified treatment model.
            </p>
                <p>
                  Once we have success in Pune, we will expand to different cities with the same model.
            </p> */}
              </section>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default VisionAndMissionPage;