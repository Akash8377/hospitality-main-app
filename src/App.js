/** @format */

import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import './index.css';


// Css
import "./Css/Navbar.css";
import "./Css/Lap.css";
import './Css/Responsive.css'
import './Css/Mobile.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
      {/* <div className="both-flex-container"> */}
        <div className="mains-flex">
          {/* <div className="navbar-index"> */}
          
            <Navbar />
            <AnimatedRoutes />
        </div>
          {/* </div> */}
          <div>
          
        </div>
      {/* </div> */}
        


        <Footer />

      </BrowserRouter>

    </>
  );
};

export default App;
