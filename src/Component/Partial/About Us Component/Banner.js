/** @format */

import React from "react";

const Banner = (props) => {
  return (
    <div className="Banner AboutUs">
      <div className="content">
        <h2>About Us</h2>
        <p>
          {props?.content}
        </p>
      </div>
    </div>
  );
};

export default Banner;
