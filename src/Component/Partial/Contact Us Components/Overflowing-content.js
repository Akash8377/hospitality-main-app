/** @format */

import React from "react";
import Queryform from "./query-form";

const OverflowingContent = () => {
  return (
    <div className="contact-us-overflow-main">
      <div className="Content">
        <div className="Main" style={{ justifyContent: "center" }}>
          <h5>Lorem Ipsum</h5>
        </div>
        <div
          className="Main"
          style={{ justifyContent: "center", marginTop: "0" }}
        >
          <p style={{ justifyContent: "center", marginTop: "0" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
            eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
            pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur
            id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum
            bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam
            nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus
            lacus. Proin nisi dolor, posuere mattis viverra vel, dignissim et
            augue. Suspendisse convallis nec neque et tincidunt. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae;{" "}
          </p>
        </div>
        <div className="Main"    style={{ justifyContent: "center", marginTop: "0" }}>
          <h5>Our Offices</h5>
        </div>

        <div className="office_images">
          <div className="container">
            <div>
              <img src="./Image/17.png" alt="" />
              <p>London</p>
            </div>
          </div>
          <div className="container">
            <img src="./Image/18.png" alt="" />
            <p>Chicago</p>
          </div>
        </div>

        <div className="icon-div">
          <div className="left">
            <div className="container">
              <i className="fa-solid fa-phone" />
              <p>+91 9824324456</p>
            </div>
            <div className="container mt-4">
              <i className="fa-solid fa-envelope" />
              <p>support@company.com</p>
            </div>
            <div className="container mt-4">
              <i className="fa-solid fa-location-dot" />
              <p>22nd Avenue Street, UK</p>
            </div>
            <div className="container mt-4">
              <button>Learn More</button>
            </div>
          </div>

          <div className="left paddingLeft_second" style={{ paddingLeft: "50px" }}>
            <div className="container">
              <i className="fa-solid fa-phone" />
              <p>+91 9824324456</p>
            </div>
            <div className="container mt-4">
              <i className="fa-solid fa-envelope" />
              <p>support@company.com</p>
            </div>
            <div className="container mt-4">
              <i className="fa-solid fa-location-dot" />
              <p>22nd Avenue Street, UK</p>
            </div>
            <div className="container mt-4">
              <button>Learn More</button>
            </div>
          </div>
        </div>

        <div className="office_images">
          <div className="container">
            <img src="./Image/19.png" alt="" />
            <p>New Delhi</p>
          </div>
          <div className="container">
            <img src="./Image/20.png" alt="" />
            <p>Pune</p>
          </div>
        </div>

        <div className="icon-div">
          <div className="left">
            <div className="container">
              <i className="fa-solid fa-phone" />
              <p>+91 9824324456</p>
            </div>
            <div className="container mt-4">
              <i className="fa-solid fa-envelope" />
              <p>support@company.com</p>
            </div>
            <div className="container mt-4">
              <i className="fa-solid fa-location-dot" />
              <p>22nd Avenue Street, UK</p>
            </div>
            <div className="container mt-4">
              <button>Learn More</button>
            </div>
          </div>

          <div className="left paddingLeft_second" style={{ paddingLeft: "50px" }}>
            <div className="container">
              <i className="fa-solid fa-phone" />
              <p>+91 9824324456</p>
            </div>
            <div className="container mt-4">
              <i className="fa-solid fa-envelope" />
              <p>support@company.com</p>
            </div>
            <div className="container mt-4">
              <i className="fa-solid fa-location-dot" />
              <p>22nd Avenue Street, UK</p>
            </div>
            <div className="container mt-4">
              <button>Learn More</button>
            </div>
          </div>
        </div>

        <Queryform />
      </div>
    </div>
  );
};

export default OverflowingContent;
