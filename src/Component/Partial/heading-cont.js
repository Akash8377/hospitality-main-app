/** @format */

import React from "react";
import PropTypes from "prop-types";
import './index-banner.css'

const HeadingCont = ({ title, content }) => {
  return (
    <div className="Center_Heading">
      <h5> {title} </h5>
      <p className="desc mt-2">{content}</p>
    </div>
  );
};

export default HeadingCont;

HeadingCont.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
