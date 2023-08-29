/** @format */

import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Queryform = () => {
  return (
    <div className="contact-query-form">
      <h5 className="head">Any more queries?</h5>
      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
        eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
        pharetra felis iaculis. Aenean in nisl eget lorem congue effic
      </p>

      <form>
        <div className="two-inputs">
          <div>
            <label>
              <span>*</span> First Name
            </label>
            <input type="text" />
          </div>
          <div>
            <label>
              <span>*</span> Last Name
            </label>
            <input type="text" />
          </div>
        </div>
        <div className="two-inputs mt-4">
          <div style={{ width: "100%" }}>
            <label>
              <span>*</span> Email Address
            </label>
            <input type="text" />
          </div>
        </div>
        <div className="two-inputs mt-4">
          <div style={{ width: "100%" }}>
            <label>
              <span>*</span>Mobile Phone Number
            </label>
            <input type="text" />
          </div>
        </div>
        <div className="two-inputs mt-4">
          <div style={{ width: "100%" }}>
            <label>Any Comments</label>
            <textarea placeholder="Type here........." />
          </div>
        </div>

        <div className="mt-4">
          <p>
            <span>*</span>Availibility to Call Back
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy
          </p>
        </div>
        <Calendar />

        <div className="mt-4">
          <p>
            <span>*</span> Select your Slot & Timings
          </p>
          <input type="text" />
        </div>

        <p className="Privacy">
          By submitting your details, you are giving us permission to contact
          you about our products and services..{" "}
          <span>View our Privacy Policy</span> .
        </p>

        <button className="submit-btn">SUBMIT</button>

        <p className="assistance">Need Assistance?</p>
        <button className="Whatsapp_Button">
          <i className="fa-brands fa-whatsapp"></i> CONTACT US AT WHATSAPP
        </button>

        <div className="contact_Detail">
          <p>Or Call us at </p>
          <i className="fa-solid fa-phone"></i>
          <p>+44 1234567890</p>
        </div>
      </form>
    </div>
  );
};

export default Queryform;
