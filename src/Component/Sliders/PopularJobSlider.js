/** @format */

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EventModal } from "../Modals/event-modal";
import { motion } from "framer-motion";
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './PopolarJobs.css';


const PopularJobSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [img, setImg] = useState(null);
  const [head, setHead] = useState(null);
  const [description, setDesc] = useState("");
  const [descPoints, setDP] = useState([]);

  function ModalOpen(img, head, desc, descP) {
    setImg(img);
    setHead(head);
    setDesc(desc);
    setDP(descP);
    setModalShow(true);
  }

  const [who, setWho] = useState([]);
  const getWho = async()=>{
    const url = "https://pritam-backend.vercel.app/api/v1/admin/getPopularJob";
    try{
      const {data} = await axios.get(url);
      console.log(data?.data);
      setWho(data?.data);
    }catch(err){
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
      getWho();
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
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
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
    <div className="carousel-container">
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      interval={1500} // Adjust the interval between slides (in milliseconds)
    >
      {/* Slide */}
      <div className="slide-container">
        <div className="image-container">
        <img src="./Image/115.png" alt="" />
        </div>
        <div className="image-container">
        <img src="./Image/116.png" alt="" />
        </div>
        <div className="image-container">
        <img src="./Image/117.png" alt="" />
        </div>
      </div>

      {/* Slide */}
      <div className="slide-container">
      <div className="image-container">
        <img src="./Image/117.png" alt="" />
        </div>
        <div className="image-container">
          <img src="./Image/115.png"  alt=""/>
        </div>
        <div className="image-container">
        <img src="./Image/116.png" alt="" />
        </div>
      </div>
    </Carousel>
  </div>
     
      <div><button className="popularjobs-main">Opening</button></div>
    </>
  );
};

export default PopularJobSlider;
