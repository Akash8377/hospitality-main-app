import React, {useEffect, useState} from "react";
import Banner from "../Component/Partial/FreelanceComponent/Banner";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FAQ from "../Component/Partial/Contact Us Components/FAQ";
import axios from "axios";

const Freelance = () => {
  const [freelance, setFreelance] = useState([]);
  const getFree = async()=>{
    const url = "https://pritam-backend.vercel.app/api/v1/admin/getFreelancing";
    try{
      const {data} = await axios.get(url);
 //     console.log(data?.data);
      setFreelance(data?.data);
    }catch(err){
      console.log(err.message);
    }
  }

  useEffect(()=>{
    window.scrollTo(0, 0);
    getFree();
  },[])
  return (
    <>
      <div className="Freelance">
        <Banner />
        <div className="free1">
          <div className="free2">
            <h2>What are the Perks?</h2>
            <div className="free4">
              {
                freelance?.map((ele,i)=>(
                  <>
                    <div className="free5">
                      <h6>{ele?.title}</h6>
                      <img src={ele?.image} alt="" />
                      <p>
                        {ele?.desc}{" "}
                      </p>
                    </div>                
                  </>
                ))
              }
              {/* <div className="free5">
                <h6>Your Time, Your Choice!!</h6>
                <img src="./Image/102.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tempus eleifend ullamcorper. Sed maximus nunc vitae metus
                  pharetra, quis pharetra felis iaculis. Aenean in nisl eget
                  lorem congue efficitur id ut orci. Mauris volutpat tortor non
                  lectus rhoncus vestibulum bibendum quis leo..{" "}
                </p>
              </div>
              <div className="free5">
                <h6>Your Time, Your Choice!!</h6>
                <img src="./Image/102.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tempus eleifend ullamcorper. Sed maximus nunc vitae metus
                  pharetra, quis pharetra felis iaculis. Aenean in nisl eget
                  lorem congue efficitur id ut orci. Mauris volutpat tortor non
                  lectus rhoncus vestibulum bibendum quis leo..{" "}
                </p>
              </div>
              <div className="free5">
                <h6>Your Time, Your Choice!!</h6>
                <img src="./Image/102.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tempus eleifend ullamcorper. Sed maximus nunc vitae metus
                  pharetra, quis pharetra felis iaculis. Aenean in nisl eget
                  lorem congue efficitur id ut orci. Mauris volutpat tortor non
                  lectus rhoncus vestibulum bibendum quis leo..{" "}
                </p>
              </div> */}
            </div>
          </div>
          <div className="free3">
            <h2>Contact Us</h2>
            <p>Use the form below to get in touch.</p>
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
                    diam nonumy Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy
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
                  <i className="fa-brands fa-whatsapp"></i> CONTACT US AT
                  WHATSAPP
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
        <div style={{ height: "100px" }}></div>
        <div className="free6">
          <h2>Top Businesses looking to Hire Freelancers</h2>
          <div className="free7">
            <img src="./Image/103.png" />
            <img src="./Image/104.png" />
            <img src="./Image/105.png" />
            <img className="bimg" src="./Image/106.png" />
            <img className="bimg" src="./Image/107.png" />
          </div>
        </div>
        <FAQ />
      </div>
    </>
  );
};

export default Freelance;
