import React from "react";
import "../styles/AddressInfo.css";

const AddressInfo = () => {
  return (
    <div className="info-main">
      <div className="container">
        <div className="info address">
          <p>IP ADDRESS</p>
          <p>192.212.174.101</p>
        </div>
        <div className="info location">
          <p>LOCATION</p>
          <p>BROOKLYN,NY</p>
        </div>
        <div className="info timezone">
          <p>TIMEZONE</p>
          <p>UTC-05:00</p>
        </div>
        <div className="info isp">
          <p>ISP</p>
          <p>SPACEX</p>
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
