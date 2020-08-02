import React from 'react';
import PhoneIcon from '../svgs/PhoneIcon';
import SeeIcon from '../svgs/SeeIcon';
import InfoIcon from '../svgs/InfoIcon';

const CommonStrip = (props) => {
  const { history } = props;
  return (
    <div className="common-strip">
      <div>
        <h1 style={{color: 'white'}}>{props.title}</h1>
        <div className="breadcrumb">
          {props.title}
          <div className="home-button-container">
            <div className="home-button" onClick={() => history.push({pathname: '/home'})}>
              {props.title==='About Us' ? <InfoIcon/> : (props.title === 'Vision And Mission' ? <SeeIcon/> : <PhoneIcon/>) }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonStrip;