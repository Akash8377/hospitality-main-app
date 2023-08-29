/** @format */

import React, { useEffect  } from "react";
import FAQ from "../Component/Partial/Contact Us Components/FAQ";
import VideoBanner from "../Component/Partial/Event Booking Component/Video-Banner";

const PermanentJob = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="permanent-job-conatiner">
      {" "}
      <div className="permanent-job">
        <div className="Banner AboutUs">
          <div className="content">
            <h2>Casual & Permanent Job</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tempus eleifend ullamcorper. Sed maximus nunc vitae metus
              pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem
              congue efficitur id ut orci. Mauris volutpat tortor non lectus
              rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh.
              Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis.
              Duis sit amet rhoncus lacus. Proin nisi dolor, posuere mattis
              viverra vel, dignissim et augue. Suspendisse convallis nec neque
              et tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Duis ut lectus pellentesque
              purus fermentum gravida. Integer accumsan feugiat diam, quis
              elementum arcu ultricies non. In odio ex, ultricies at urna eu,
              iaculis sagittis risus. Nulla eget dignissim ipsum. Curabitur eget
              dignissim urna. Sed at purus quis dolor lacinia consectetur
            </p>
          </div>
        </div>

        <div className="Register_Div " style={{ marginTop: "7%" }}>
          <div className="left_container">
            <h5>Register Online</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
            <a href="#RegisterForm">
              <button>Register Here </button>
            </a>
          </div>

          <div className="right_container">
            <img src="./Image/78.png" alt="" />
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "5%" }}>
          <div className="right_container second_container">
            <img src="./Image/79.png" alt="" />
          </div>
          <div className="left_container">
            <h5>Attend to Meet Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "5%" }}>
          <div className="left_container">
            <h5>Learn & Earn</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
          </div>

          <div className="right_container third_container">
            <img src="./Image/80.png" alt="" />
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "5%" }}>
          <div className="right_container fourth_container">
            <img src="./Image/81.png" alt="" />
          </div>
          <div className="left_container">
            <h5>Flexibility</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "5%" }}>
          <div className="left_container">
            <h5>Great Money</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
          </div>

          <div className="right_container five_container">
            <img src="./Image/82.png" alt="" />
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "5%" }}>
          <div className="right_container sixth_container">
            <img src="./Image/83.png" alt="" />
          </div>
          <div className="left_container">
            <h5>
              Have a Great Amazing <br /> Experience with us
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
          </div>
        </div>

        <div className="contact-us-form" id="RegisterForm">
          <h5>Enter your Details in the Form</h5>

          <div className="Form-Container">
            <div className="left-container">
              <img src="./Image/84.png" alt="" />
            </div>

            <div className="right-container">
              <form>
                <div className="input-Div">
                  <i className="fa-regular fa-user"></i>
                  <input type="text" placeholder="Full Name" />
                </div>

                <div className="input-Div">
                  <i className="fa-regular fa-envelope"></i>
                  <input type="text" placeholder="Email Address" />
                </div>

                <div className="input-Div">
                  <i className="fa-solid fa-phone"></i>
                  <input type="text" placeholder="Phone Number" />
                </div>

                <div className="input-Div">
                  <i className="fa-solid  fa-location-dot"></i>
                  <input type="text" placeholder="Address" />
                </div>

                <div className="input-Div">
                  <i className="fa-solid fa-calendar"></i>
                  <input type="text" placeholder="Date of Birth" />
                </div>

                <button>Submit</button>
              </form>

              <p className="assit">Need Assistance?</p>

              <button className="whatsapp-button">
                <i className="fa-brands fa-whatsapp"></i>
                CONTACT US AT WHATSAPP
              </button>

              <div className="contact">
                <p>Or Call us at</p>
                <p>
                  {" "}
                  <i className="fa-solid fa-phone"></i>
                </p>
                <p>
                  {" "}
                  <strong>+44 1234567890</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="Community_Page">
          <FAQ />
        </div>

        <VideoBanner />

        <div className="About-Us_Newsletter">
          <div className="left">
            <img src="./Image/85.png" alt="" />
          </div>
          <div className="right">
            <div className="content">
              <h5>Sign up for our e-newsletter</h5>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque mattis, neque laoreet porta imperdiet, ex dolor
                accumsan enim, sed convallis ligula erat elementum tellus.
                Maecenas eu convallis augue. Curabitur id a
              </p>

              <form>
                <div className="Two_Inputs">
                  <div>
                    <label>
                      <span>*</span>First Name
                    </label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>
                      <span>*</span>Last Name
                    </label>
                    <input type="text" />
                  </div>
                </div>
                <div className="Single_Input">
                  <div>
                    <label>
                      <span>*</span>Email Address
                    </label>
                    <input type="email" />
                  </div>
                </div>
                <div className="Two_Inputs">
                  <div>
                    <label>
                      <span>*</span>Nearest Region
                    </label>
                    <select>
                      <option>Please Select</option>
                    </select>
                  </div>
                  <div>
                    <label>
                      <span>*</span>I’m interested in
                    </label>
                    <select>
                      <option>Please Select</option>
                    </select>
                  </div>
                </div>
              </form>

              <p className="Policy">
                By subscribing, you are giving us permission to contact you
                about our products and services. You may unsubscribe at any time{" "}
                <span>View our Privacy Policy</span> .
              </p>

              <button className="NewsLetter_Button">
                SUBSCRIBE TO NEWSLETTER
              </button>

              <p className="Assistance_P">Need Assistance?</p>

              <button className="Whatsapp_Button">
                <i className="fa-brands fa-whatsapp"></i> CONTACT US AT WHATSAPP
              </button>

              <div className="contact_Detail">
                <p>Or Call us at </p>
                <i className="fa-solid fa-phone"></i>
                <p>+44 1234567890</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5"></div>
      </div>
    </div>
  );
};

export default PermanentJob;
