import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ServiceSlider.css';
import { EventModal } from "../Modals/event-modal";

const ReviewSlider = () => {
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
        <div className="main-heading-write"><img src="./Image/131.png" alt="" width="73.16px" height="18.4px"/></div>
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
        <div className="main-heading-write"><img src="./Image/131.png" alt="" width="73.16px" height="18.4px"/></div>
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
        <div className="main-heading-write"><img src="./Image/131.png" alt="" width="73.16px" height="18.4px" /></div>
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
        <div className="main-heading-write"><img src="./Image/131.png" alt="" width="73.16px" height="18.4px"/></div>
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
        <div className="main-heading-write"><img src="./Image/131.png" width="73.16px" height="18.4px" alt="" /></div>
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
        <div className="main-heading-write"><img src="./Image/131.png" width="73.16px" height="18.4px" alt="" /></div>
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
    <div><button className="popularjobs-main-1-1">Our Clients</button></div>
  </div>
    </>
   /* <EventModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        img={img}
        head={head}
        desc={description}
        descPoints={descPoints}
      />

      <div className="Service_Slider_Container Popular_Job_Slider">
        <Slider {...settings} ref={sliderRef} className="Service_Slider">
          {
            who?.map((ele,i)=>(
              <>
                <div className="Main hover">
                  <img src={ele?.mainImage} alt="" />
                  <p className="head hideOnHover">{ele?.title}</p>
                  <p className="desc hideOnHover">Earn upto {ele?.earnUpto} {ele?.currency} per {ele?.per}</p>

                  <motion.div
                    className="content-div"
                    initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
                    whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
                    whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
                    whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="head">{ele?.title}</p>
                    <p className="desc">
                      {ele?.desc}
                    </p>
                    <button onClick={() => ModalOpen(ele?.image, ele?.title, ele?.desc, ele?.descPoints)}>
                      FIND OUT MORE{" "}
                    </button>
                  </motion.div>
                </div>
              </>
            ))
          } */
          /* <div className="Main hover">
            <img src="./Image/61.png" alt="" />
            <p className="head hideOnHover">Head Chefs</p>
            <p className="desc hideOnHover">Earn upto 12 - 15 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Head Chefs</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("52", "Head Chefs")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>
          <div className="Main hover">
            <img src="./Image/59.png" alt="" />
            <p className="head hideOnHover">Head Chefs</p>
            <p className="desc hideOnHover">Earn upto 15 - 20 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Head Chef</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("52", "Head Chefs")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>
          <div className="Main hover">
            <img src="./Image/60.png" alt="" />
            <p className="head hideOnHover">Bartender</p>
            <p className="desc hideOnHover">Earn upto 20 - 25 £ per hour</p>
            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Bartender</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("100", "Bartender")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>

          <div className="Main hover">
            <img src="./Image/61.png" alt="" />
            <p className="head hideOnHover">Head Chefs</p>
            <p className="desc hideOnHover">Earn upto 12 - 15 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Head Chefs</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("52", "Head Chefs")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>

          <div className="Main hover">
            <img src="./Image/59.png" alt="" />
            <p className="head hideOnHover">Head Chefs</p>
            <p className="desc hideOnHover">Earn upto 15 - 20 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Head Chef</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("52", "Head Chefs")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>
          <div className="Main hover">
            <img src="./Image/60.png" alt="" />
            <p className="head hideOnHover">Bartender</p>
            <p className="desc hideOnHover">Earn upto 20 - 25 £ per hour</p>
            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Bartender</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("100", "Bartender")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>

          <div className="Main hover">
            <img src="./Image/61.png" alt="" />
            <p className="head hideOnHover">Bartender</p>
            <p className="desc hideOnHover">Earn upto 12 - 15 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Bartender</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("100", "Bartender")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>

          <div className="Main hover">
            <img src="./Image/59.png" alt="" />
            <p className="head hideOnHover">Head Chefs</p>
            <p className="desc hideOnHover">Earn upto 15 - 20 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Head Chef</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("52", "Head Chefs")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>
          <div className="Main hover">
            <img src="./Image/60.png" alt="" />
            <p className="head hideOnHover">Bartender</p>
            <p className="desc hideOnHover">Earn upto 20 - 25 £ per hour</p>
            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Bartender</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("100", "Bartender")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div> */
        /* </Slider>
      </div> */
  );
};

export default ReviewSlider;
