/** @format */

import React, {useState, useEffect} from "react";
import { Accordion } from "react-bootstrap";
import axios from "axios";

const FAQ = () => {
  const [faq, setFaq] = useState([]);
  const getFaq = async()=>{
    const url = "https://pritam-backend.vercel.app/api/v1/static/faq/All";
    try{
      const {data} = await axios.get(url);
      console.log(data?.data);
      setFaq(data?.data);
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    window.scrollTo(0, 0);
    getFaq();
  },[])
  return (
    <div className="contact-faq">
      <h5>F.A.Q ( Frequently Asked Questions )</h5>

      <Accordion defaultActiveKey="0">
        {
          faq?.map((ele,i)=>(
            <>
              <Accordion.Item eventKey={i}>
                <Accordion.Header>
                  {ele?.question}
                </Accordion.Header>
                <Accordion.Body>
                  {ele?.answer}
                </Accordion.Body>
              </Accordion.Item>
            </>
          ))
        }
        {/* <Accordion.Item eventKey="1" className="mt-3">
          <Accordion.Header>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="mt-3">
          <Accordion.Header>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="mt-3">
          <Accordion.Header>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className="mt-3">
          <Accordion.Header>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item> */}
      </Accordion>
    </div>
  );
};

export default FAQ;
