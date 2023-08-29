import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ServiceSlider.css';
import { EventModal } from "../Modals/event-modal";

const StaffReview = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [modalShow, setModalShow] = useState(false);
  const [img, setImg] = useState(null);
  const [head, setHead] = useState(null);
  const [description, setDesc] = useState("");
  const [descPoints, setDP] = useState([]);
  const [services, setServices] = useState([]);

  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const url = "https://pritam-backend.vercel.app/api/v1/user/clientRating";
    try {
      const { data } = await axios.get(url);
      console.log("ewd", data?.data);
      setReviews(data?.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1450) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
      getReviews();
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);


  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1900,
  };


  return (
    <>
      <EventModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        img={img}
        head={head}
        desc={description}
        descPoints={descPoints}
      />
    <div className="carousel-container-1">
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      interval={1900} // Adjust the interval between slides (in milliseconds)
    >
      {/* Slide */}
      <div className="slide-container-1">
        <div className="image-container-1">
          
        <div className="box-container">
      <div className="shadow-box">
        <div className="main-write-heading-check"><img src="./Image/133.png" alt="" width="73.16px" height="18.4px"/></div>
        <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam</p>
        <button className="learn-more-btn">

          <div>
            <img src="./Image/132.png" alt="" />
          </div>
          <div>
            <div className="review-check">Robin Sharma</div>
            
            <p className="review-check-1">Product Developer at Webflow</p>
          </div>
        </button>
      </div>
    </div>
        
        </div>
        <div className="image-container-1">
        
        <div className="box-container">
      <div className="shadow-box">
        <div className="main-write-heading-check"><img src="./Image/134.png" alt="" width="73.16px" height="18.4px"/></div>
        <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam</p>
        <button className="learn-more-btn">

          <div>
            <img src="./Image/132.png" alt="" />
          </div>
          <div>
            <div className="review-check">Robin Sharma</div>
            
            <p className="review-check-1">Product Developer at Webflow</p>
          </div>
        </button>
      </div>
    </div>
        
        </div>
        <div className="image-container-1">
        
        <div className="box-container">
      <div className="shadow-box">
        <div className="main-write-heading-check"><img src="./Image/135.png" alt="" width="73.16px" height="18.4px" /></div>
        <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam</p>
        <button className="learn-more-btn">

          <div>
            <img src="./Image/132.png" alt="" />
          </div>
          <div>
            <div className="review-check">Robin Sharma</div>
            
            <p className="review-check-1">Product Developer at Webflow</p>
          </div>
        </button>
      </div>
    </div>
        
        </div>
      </div>

      {/* Slide */}
      <div className="slide-container-1">
      <div className="image-container-1">
      
      <div className="box-container">
      <div className="shadow-box">
        <div className="main-write-heading-check"><img src="./Image/133.png" alt="" width="73.16px" height="18.4px"/></div>
        <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam</p>
        <button className="learn-more-btn">

          <div>
            <img src="./Image/132.png" alt="" />
          </div>
          <div>
            <div className="review-check">Robin Sharma</div>
            
            <p className="review-check-1">Product Developer at Webflow</p>
          </div>
        </button>
      </div>
    </div>
        
        </div>
        <div className="image-container-1">
        
        <div className="box-container">
      <div className="shadow-box">
        <div className="main-write-heading-check"><img src="./Image/134.png" width="73.16px" height="18.4px" alt="" /></div>
        <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam</p>
        <button className="learn-more-btn">

          <div>
            <img src="./Image/132.png" alt="" />
          </div>
          <div>
            <div className="review-check">Robin Sharma</div>
            
            <p className="review-check-1">Product Developer at Webflow</p>
          </div>
        </button>
      </div>
    </div>
          
        </div>
        <div className="image-container-1">
        
        <div className="box-container">
      <div className="shadow-box">
        <div className="main-write-heading-check"><img src="./Image/135.png" width="73.16px" height="18.4px" alt="" /></div>
        <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam</p>
        <button className="learn-more-btn">

          <div>
            <img src="./Image/132.png" alt=""/>
          </div>
          <div>
            <div className="review-check">Robin Sharma</div>
            
            <p className="review-check-1">Product Developer at Webflow</p>
          </div>
        </button>
      </div>
    </div>
        
        </div>
      </div>
    </Carousel>
  </div>
    </>
    // <div className="box-container">
    //   <div className="shadow-box">
    //     <div className="main-write-heading-check"><img src="./Image/131.png" alt="" /></div>
    //     <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam</p>
    //     <button className="learn-more-btn">

    //       <div>
    //         <img src="./Image/132.png" alt="" />
    //       </div>
    //       <div>
    //         <div className="review-check">Robin Sharma</div>
            
    //         <p className="review-check-1">Product Developer at Webflow</p>
    //       </div>
    //     </button>
    //   </div>
    // </div>
  );
};

export default StaffReview;
