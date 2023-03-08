import React from "react";
import "./styles/general.css";

function App() {
  return (
    <div className="app">
      <div className="hero">
        <div className="hero--navigations">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Join Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Gallery</a>
            </li>
          </ul>
        </div>
        <h1>Welcome To PPLG</h1>
        <div className="hero--down-arrow">
          <h2>Learn More</h2>
          <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/1e90ff/external-down-arrow-miscellaneous-kiranshastry-solid-kiranshastry.png" />
        </div>
      </div>
    </div>
  );
}

export default App;
