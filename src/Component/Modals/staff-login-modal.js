/** @format */
import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function StaffLoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="staff-login-modal">
        <div className="Header">
          <p>Enter Your Details</p>
          <i className="fa-solid fa-xmark" onClick={() => props.onHide()}></i>
        </div>

        <form>
          <div className="two-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> First Name{" "}
              </p>
              <input type="text" />
            </div>

            <div className="item">
              <p>
                {" "}
                <span>*</span> Last Name{" "}
              </p>
              <input type="text" />
            </div>
          </div>

          <div className="single-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> Contact Number{" "}
              </p>
              <input type="tel" pattern="[0-9]{10}" />
            </div>
          </div>

          <div className="single-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> Password{" "}
              </p>
              <input type="password" placeholder="*Minimum 10 character long" />
            </div>
          </div>

          <div className="single-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> Confirm Password{" "}
              </p>
              <input type="password" />
            </div>
          </div>

          <div className="single-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> Select Question{" "}
              </p>
              <select>
                <option>Chose Your Question</option>
              </select>
            </div>
          </div>

          <div className="single-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> Your Question{" "}
              </p>
              <textarea />
            </div>
          </div>

          <div className="single-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> Buisness Name{" "}
              </p>
              <input type="text" />
            </div>
          </div>

          <div className="single-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> What are you Intrested In ?{" "}
              </p>
              <textarea />
            </div>
          </div>

          <div className="two-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> Postal Code{" "}
              </p>
              <input type="text" />
            </div>
          </div>

          <Link to="/">
            <button>REGISTER NOW</button>
          </Link>
        </form>
      </Modal.Body>
    </Modal>
  );
}


StaffLoginModal.propTypes = {
  onHide: PropTypes.func.isRequired,
};