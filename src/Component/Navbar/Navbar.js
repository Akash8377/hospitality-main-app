import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Layout, Menu } from 'antd';
// import {MobileOutlined,WechatOutlined,UsergroupDeleteOutlined} from '@ant-design/icons';
// import { FindWorkModal } from "../Modals/FindWorkModal";
// import { FindStaffModal } from "../Modals/FindStaffModal";
// import { BoardingModal } from "../Modals/BoardingModal";
// import { Freelancing } from "../Modals/Freelancing";
// // import { useAppContext } from '@/context/appContext';
import '../../Css/Navbar.css'
import {AiOutlineMenu} from 'react-icons/ai'


// import {


//   CustomerServiceOutlined,
//   FileTextOutlined,
//   FileSyncOutlined,
//   DashboardOutlined,


// } from '@ant-design/icons';

// const { Sider } = Layout;
// const { SubMenu } = Menu;

// export default function Navbar() {


//   return (
//     <>
//     <div className='navbarCheck'>
//       <Sider  className="Navbar">
//         <div className="logo">
//           <img
//             src="./Image/9.png"
//             alt="Logo"
//             height="116"
//             width="106"

//           />
//         </div>
//         <Menu mode="inline">
//           <Menu.Item key={'FindWork'} icon={<DashboardOutlined />}>
//             <Link to={'/'} />
//             Find Work
//           </Menu.Item>
//           <Menu.Item key={'Customer'} icon={<CustomerServiceOutlined />}>
//             <Link to={'/customer'} />
//             Find Talented
//           </Menu.Item>
//           <Menu.Item key={'Invoice'} icon={<FileTextOutlined />}>
//             <Link to={'/invoice'} />
//             Freelancing
//           </Menu.Item>
//           <Menu.Item key={'Quote'} icon={<FileSyncOutlined />}>
//             <Link to={'/quote'} />
//             School For<br/>Bartending
//           </Menu.Item>


//         </Menu>
//       </Sider>
//       </div>
//     </>
//   );
// }
import React from 'react';
import { FindWorkModal } from "../Modals/FindWorkModal";
import { FindStaffModal } from "../Modals/FindStaffModal";
import { BoardingModal } from "../Modals/BoardingModal";
import { Freelancing } from "../Modals/Freelancing";
import {MenuModal} from '../Modals/MenuModal';



const Navbar = () => {
  
  const [modalShow, setModalShow] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openFree, setOpenFree] = useState(false);

  const openOverlay = () => {
    setShowOverlay(true);
  };
  return (


    <div className='main-navi'>
      <FindWorkModal show={modalShow} onHide={() => setModalShow(false)} />
      <MenuModal show={menuShow} onHide={()=>{setMenuShow(false)}}/>
      <FindStaffModal show={showModal} onHide={() => setShowModal(false)} />
      <BoardingModal show={openModal} onHide={() => setOpenModal(false)} />
      <Freelancing show={openFree} onHide={() => setOpenFree(false)} />
      <div className='logo-container-main-navi'>
        <Link to="/">
        <img src="./Image/9.png" alt="" />
        </Link>
      </div>
      <button className='nav-button' onClick={() => setMenuShow(true)}><AiOutlineMenu className='ai-logo-menu'/></button>
      <div>

        <button className='nav-button' onClick={() => setModalShow(true)}>
          <div>
            <img src="./Image/108.png" alt="" />
          </div>
          <div>
            Find Work
          </div>
        </button>

      </div>
      <div>

        <button className='nav-button' onClick={() => setShowModal(true)}>
          {" "}
          <img src="./Image/110.png" alt="" />
          Find Talented
        </button>

      </div>
      <div>

        <button className='nav-button' onClick={() => setOpenFree(true)}>
          <img src="./Image/109.png" alt="" />
          Freelancing
        </button>

      </div>
      <div>

        <button className='nav-button' onClick={() => setOpenModal(true)}>
          {" "}
          <img src="./Image/111.png" alt="" />
          School For<br /> Bartending
        </button>

      </div>
    </div>
  );
};

export default Navbar;
