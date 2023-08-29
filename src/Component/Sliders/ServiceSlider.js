/** @format */

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import { Link } from "react-router-dom";
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ServiceSlider.css';
import { EventModal } from "../Modals/event-modal";

const ServiceSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [modalShow, setModalShow] = useState(false);
  const [img, setImg] = useState(null);
  const [head, setHead] = useState(null);
  const [description, setDesc] = useState("");
  const [descPoints, setDP] = useState([]);
  const [services, setServices] = useState([]);

  const getServices = async () => {
    const url =
      "https://pritam-backend.vercel.app/api/v1/admin/getTrendingService";
    try {
      const { data } = await axios.get(url);
      console.log(data?.data);
      setServices(data?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1200) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 1450) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
      getServices();
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
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2100,
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
      interval={1800} // Adjust the interval between slides (in milliseconds)
    >
      {/* Slide */}
      <div className="slide-container-1">
        <div className="image-container-1">
          <Link to="/event-booking">
        <img src="./Image/118.png" alt="" />
        </Link>
        </div>
        <div className="image-container-1">
        <Link to="/book-full-bar">
        <img src="./Image/120.png" alt="" />
        </Link>
        </div>
        <div className="image-container-1">
        <Link to="/permanent-job">
        <img src="./Image/119.png" alt="" />
        </Link>
        </div>
      </div>

      {/* Slide */}
      <div className="slide-container-1">
      <div className="image-container-1">
      <Link to="/book-full-bar">
        <img src="./Image/120.png" alt="" />
        </Link>
        </div>
        <div className="image-container-1">
        <Link to="/permanent-job">
          <img src="./Image/119.png"  alt=""/>
          </Link>
        </div>
        <div className="image-container-1">
        <Link to="/event-booking">
        <img src="./Image/118.png" alt="" />
        </Link>
        </div>
      </div>
    </Carousel>
    <div><button className="popularjobs-main-1-1">Our Clients</button></div>
  </div>
    </>
  );
};

export default ServiceSlider;
