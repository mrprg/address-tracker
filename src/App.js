import React from "react";
import "./App.css";

const App = () => {
  // https://geo.ipify.org/api/v2/country,city?apiKey=at_1Y6rbSdDgmpnYtbSaUXgJeE4KD8np&ipAddress=8.8.8.8
  return (
    <div>
      <div className="hero">
        <h1 className="header-name">IP Address Tracker</h1>
        <form className="form">
          <input className="search-input"  />
          
            <div className="btn">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="14">
                <path
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  d="M2 1l6 6-6 6"
                />
              </svg>
            </div>
  
        </form>
      </div>
    </div>
  );
};

export default App;
