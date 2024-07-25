import React from 'react';
import GoogleSlides from '../components/GoogleSlides';
//import GoogleForm from '../components/GoogleForm';
import GoogleMeet from '../components/GoogleMeet';
import GoogleKeep from '../components/GoogleKeep';

const GoogleWidgets = () => {
  return (
    <div>
      <h2>Google Widgets</h2>
      <GoogleMeet />
      <GoogleKeep />
      <GoogleSlides />
      {/* <GoogleForm /> */}

    </div>
  );
};

export default GoogleWidgets;
