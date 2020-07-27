import React, { useEffect, useState } from 'react';
import CommonStrip from './CommonStrip';
import Loader from '../Loader/Loader';

const BecomeAVolunteerPage = () => {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <div>
      {
        loader ? <Loader /> :
          <div>
            <CommonStrip title="Becomem A Volunteer" />
          </div>
      }
    </div>
  );
}

export default BecomeAVolunteerPage;