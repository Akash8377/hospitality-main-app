// import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaThList
// }from "react-icons/fa";
// import { NavLink } from 'react-router-dom';
// import Logo from '../../../public/Image/9.png'


// const Sidebar = ({children}) => {
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const [modalShow, setModalShow] = useState(false);
//     const [showModal, setShowModal] = useState(false);
//     const [openModal, setOpenModal] = useState(false);
//     const [openFree, setOpenFree] = useState(false);
//     const menuItem=[
//         {
//             path:"/",
//             name:"Find Work",
//             icon:<FaTh/>
//         },
//         {
//             path:"/about",
//             name:"About",
//             icon:<FaUserAlt/>
//         },
//         {
//             path:"/analytics",
//             name:"Analytics",
//             icon:<FaRegChartBar/>
//         },
//         {
//             path:"/comment",
//             name:"Comment",
//             icon:<FaCommentAlt/>
//         },
//         {
//             path:"/product",
//             name:"Product",
//             icon:<FaShoppingBag/>
//         },
//         {
//             path:"/productList",
//             name:"Product List",
//             icon:<FaThList/>
//         }
//     ]
//     return (
//         <div className="container">
//            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
//                <div className="top_section">
//                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img src={Logo} alt='' /></h1>
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                        <FaBars onClick={toggle}/>
//                    </div>
//                </div>
//                {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                            <div className="icon">{item.icon}</div>
//                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//            </div>
//            <FindWorkModal show={modalShow} onHide={() => setModalShow(false)} />
//       <FindStaffModal show={showModal} onHide={() => setShowModal(false)} />
//       <BoardingModal show={openModal} onHide={() => setOpenModal(false)} />
//       <Freelancing show={openFree} onHide={() => setOpenFree(false)} />
//            <div className="two_button">
//             <button onClick={() => setModalShow(true)}>
//               {" "}
//               <img src="./Image/1.svg" alt="" /> Find Work
//             </button>

//             <button onClick={() => setShowModal(true)}>
//               {" "}
//               <img src="./Image/1.svg" alt="" /> Find Talented Staff
//             </button>
//           </div>
//           <div className="two_button" style={{marginTop:"20px"}}>
//             <button onClick={() => setOpenFree(true)}>
//               {" "}
//               <img src="./Image/1.svg" alt="" /> Freelancing
//             </button>
//           </div> 

//            <button className="Bottom_Button" onClick={() => setOpenModal(true)}>
//             {" "}
//             <img src="./Image/1.svg" alt="" /> School for Bartending...JOIN NOW
//           </button>
//            <main>{children}</main>
//         </div>
//     );
// };

// export default Sidebar;