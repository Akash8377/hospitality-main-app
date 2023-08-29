/** @format */

import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ContactUsForm = () => {
  return (
    <div className="Find_work_contact_form">
      <div className="left_container">
        <div className="content">
          <h5>Lorem ipsum dolor sit amet, consectetur</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor
            dignissim elementum. Suspendisse quis enim aliquet dui efficitur
            ultricies nec id nisi. Donec at odio condimentum neque imperdiet
            molestie. Mauris nec
          </p>
        </div>
      </div>

      <div className="right_container">
        <div className="contact-query-form">
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
                  <span>*</span> Phone Number
                </label>
                <input type="text" />
              </div>
            </div>

            <div className="two-inputs mt-4">
              <div>
                <label>
                  <span>*</span> Nearest Region
                </label>
                <select>
                  <option>Please Select</option>
                </select>
              </div>
              <div>
                <label>
                  <span>*</span> I’m interested in
                </label>{" "}
                <select>
                  <option>Please Select</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <p>
                <span>*</span>Availibility to Call Back
              </p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy
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
              By submitting your details, you are giving us permission to
              contact you about our products and services..{" "}
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
      </div>
    </div>
  );
};

export default ContactUsForm;
