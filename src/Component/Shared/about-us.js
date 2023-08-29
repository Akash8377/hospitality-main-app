/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineArrowRight } from 'react-icons/ai'
import './about-use.css'

const AboutUs = () => {
  const [who, setWho] = useState([]);
  const getWho = async () => {
    const url = "https://pritam-backend.vercel.app/api/v1/admin/getWhoWeare";
    try {
      const { data } = await axios.get(url);
      console.log("3wrefr", data?.data);
      setWho(data?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getWho();
  }, []);
  return (
    <div>
    
    
    <div className="box-container">
      
      <div className="shadow-box">
        <div className="main-heading-write-1-1">Join Our Community</div>
        <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam</p>
        <button className="learn-more-btn">

          <div>
            Learn More
          </div>
          <div>
            <AiOutlineArrowRight />
          </div>
        </button>
        <div className="first-container-pic">
          <img src="./Image/113.png" alt="" />
        </div>
      </div>
      <div className="shadow-box">
        <div className="shadow-box-1">
        <img src="./Image/112.png" alt="" />
        </div>
        <div className="">
          <div className="second-container-pic">
            <div className="main-heading-write-1-1">Client Relationship</div>
            <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.<br />  Ut enim ad minim veniam</p>
          </div>
        </div>
      </div>
      <div className="shadow-box">
        <div>
          <div className="main-heading-write-1-1">Academy Bartending School</div>
          <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.<br />  Ut enim ad minim veniam</p>
        </div>
        <div className="third-container-pic">
          <img src="./Image/114.png" alt="" />
        </div>
      </div>
    </div>
    <div><button className="popularjobs-main">Opening</button></div>
    </div>
  );
};

export default AboutUs;
