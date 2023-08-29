import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MenuModal.css"; // Create a separate CSS file for MenuModal styles

export function MenuModal(props) {
    
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="Find_Work_Modal">
        <i className="fa-solid fa-xmark" onClick={() => props.onHide()}></i>

        <div className="vertical-menu">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/event-booking">
            <button>Event Booking</button>
          </Link>
          <Link to="/courses/:id">
            <button>Courses</button>
          </Link>
          <Link to="/about-us">
            <button>About Us</button>
          </Link>
          <Link to="/contact-us">
            <button>Contact Us</button>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}

MenuModal.propTypes = {
  onHide: PropTypes.func.isRequired,
};
