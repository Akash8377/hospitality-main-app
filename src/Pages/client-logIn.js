/** @format */

import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { StaffLoginModal } from "../Component/Modals/staff-login-modal";

const ClientLoginIn = () => {
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="client-login-container-main">
      <StaffLoginModal show={modalShow} onHide={() => setModalShow(false)} />

      <div className="Staff-Login-Container">
        <div className="Training_Course">
          <div className="Event_Booking-Banner">
            <div className="upper Client-Login">
              <h5 style={{paddingTop : "5%"}} >Client  Log In</h5>
            </div>
          </div>

          <div className="contact-us-overflow-main">
            <div className="Content">
              <div className="contact-query-form">
                <form>
                  <h5 className="head">Enter your Credentials</h5>
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

                  <div className="checbox">
                    <input type="checkbox" />
                    <p>Remember Me</p>
                  </div>

                  <Link to="/">
                    <button className="submit-btn">LOG IN</button>
                  </Link>
                  <p className="forget-password">
                    Forgot Password? <span>Reset Here</span>
                  </p>

                  <div className="empty-one">
                    <div className="empty"></div>
                    <p>OR</p>
                    <div className="empty"></div>
                  </div>

                  <p className="forget-password">
                    Don’t Have an account yet? <span onClick={() => setModalShow(true)}>Register Here</span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLoginIn;
