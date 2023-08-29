/** @format */
import React, { useState } from "react";
// import { FindWorkModal } from "../Modals/FindWorkModal";
// import { FindStaffModal } from "../Modals/FindStaffModal";
// import { BoardingModal } from "../Modals/BoardingModal";
// import { Freelancing } from "../Modals/Freelancing";

const Banner = () => {
  // const [modalShow, setModalShow] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [openModal, setOpenModal] = useState(false);
  // const [openFree, setOpenFree] = useState(false);

  return (
    <>
      {/* <FindWorkModal show={modalShow} onHide={() => setModalShow(false)} />
      <FindStaffModal show={showModal} onHide={() => setShowModal(false)} />
      <BoardingModal show={openModal} onHide={() => setOpenModal(false)} />
      <Freelancing show={openFree} onHide={() => setOpenFree(false)} /> */}

      <div className="Banner">
        <div className="content">
          <h2 className="banner-content-side">
            Find & Hire Experts <br /> for any Job
          </h2>
          <p>
            Find Jobs, Employment & Career Opportunities. Some of the companies{" "}
            <br />
            we have helped recruit excellent applicants over the years.
          </p>
          {/* <div className="two_button">
            <button onClick={() => setModalShow(true)}>
              {" "}
              <img src="./Image/1.svg" alt="" /> Find Work
            </button>

            <button onClick={() => setShowModal(true)}>
              {" "}
              <img src="./Image/1.svg" alt="" /> Find Talented Staff
            </button>
          </div>
          <div className="two_button" style={{ marginTop: "20px" }}>
            <button onClick={() => setOpenFree(true)}>

              <img src="./Image/1.svg" alt="" /> Freelancing
            </button>
          </div> */}

          <div className="Link_Section">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./Image/26.png" alt="" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./Image/27.png" alt="" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./Image/28.png" alt="" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./Image/29.png" alt="" />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./Image/30.png" alt="" />
            </a>
          </div>
          
          {/* <button className="Bottom_Button" onClick={() => setOpenModal(true)}>
            {" "}
            <img src="./Image/1.svg" alt="" /> School for Bartending...JOIN NOW
          </button> */}
        </div>
        <button className="main-headder-about-use">About Us</button>
      </div>
    </>
  );
};

export default Banner;
