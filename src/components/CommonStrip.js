import React from 'react';

const CommonStrip = (props) => {
  const { history } = props;
  return (
    <div className="common-strip">
      <div>
        <h1>{props.title}</h1>
        <div className="breadcrumb">
          {props.title}
          <div className="home-button-container">
            <div className="home-button" onClick={() => history.push({pathname: '/home'})}>
              <i class="fas fa-home"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonStrip;