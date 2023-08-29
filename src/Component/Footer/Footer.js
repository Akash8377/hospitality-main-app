

import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
import {BiMessageCheck} from 'react-icons/bi'
import {CiLocationOn} from 'react-icons/ci';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Upper_Div">
        <div>
          <img src="./Image/9.png" alt="" />
        </div>
        {/* <Link to="/">
            <p>HOME</p>
          </Link> */}
        <div className="upper-div-1-1">
          <div>
            <p></p>
          </div>
          <div>
            <p>HOME</p>
          </div>
          <div>
            <p>About</p>
          </div>
          <div>
            <p>Follow Us</p>
          </div>
        </div>
      </div>

      <div className="lower_Div-1">
        <div className="lower-lower-1">
          <h6><div>
            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt.
          </div></h6>
          <div className="colomb-container-fix">
          <div className="lower-to-lower-div">
            <div className="two_sec">
              <div>
              <i className="fa-solid fa-phone"></i>
              </div>
              <div>
              <p className="number-container">+91 9824324456</p>
              </div>
            </div>
            <div className="two_sec">

              <p>Home</p>
            </div>
            <div className="two_sec">

              <p>Our Story </p>
            </div>
            <div className="two_sec">
              <p>logo </p>
              </div>
          </div>


          <div className="lower-to-lower-div-1">
            <div className="two_sec-1">
              <div>
              <BiMessageCheck/>
              </div>
              <div>
              <p className="number-container-1">support@company.com</p>
              </div>
            </div>
            <div className="two_sec-1">

              <p>Event Booking</p>
            </div>
            <div className="two_sec-1">
              <div className="faq-container">
              <p>FaQ’s </p>
              </div>
            </div>
           
          </div>


          <div className="lower-to-lower-div-2">
            <div className="two_sec-2">
              <div>
              <CiLocationOn/>
              </div>
              <div>
              <p className="number-container-2">22nd Avenue Street, UK</p>
              </div>
            </div>
            <div className="two_sec-2">

              <p>Courses</p>
            </div>
            <div className="two_sec-2">

            <div className="faq-container-1">
              <p>FaQ’s </p>
              </div>
            </div>
            
            
          </div>
          <div className="copyright-claim">Copyright © 2020. Bissnes Name. All rights reserved.</div>
          </div>
         

        </div>

      </div>
    </div>
  );
};

export default Footer;
