

import './css/homePage.css';
import React, { useEffect, useState } from "react";
import logo from './images/logo.png';
import menuHome from './images/menuHome.png';
import Modal from './common/Modal'; // popup
import CreateComponent from './CreateComponent';




function SCPMenu({readData, onSelect, onLogoClick}){

    const [isMobileNavVisible, setMobileNavVisible] = useState(false)
    const [isModalOpen, setModalOpen] = useState(false); // for create component popup
    const [isMenuModalOpen, setMenuModalOpen] = useState(false); // for menu

    // 处理菜单点击事件,点击显示移动端MENU，！表示反值
    const handleMenuClick = () => {
        setMobileNavVisible(!isMobileNavVisible);
    };

    return(
        <div className="header">

                    <img src={logo} alt="Logo" className="logo" onClick={onLogoClick} />  
           
                <div className="menu-icon" onClick={handleMenuClick}>
                    <img src={menuHome} alt="menu" />
                </div>
                <div className="desktop-nav">
                    <div id="nav">
                    
                        
                    </div>
                    <div className="header-right">
                        <input type="text" placeholder="Search..." className="search" />
                        <button className="login2" onClick={() => setMenuModalOpen(true)}>Menu</button>
                        {/* SCPData, index为索引，从0开始 ，item.link是获取json里的link*/}
                        <Modal isOpen={isMenuModalOpen} onClose={() => setMenuModalOpen(false)} className="menu-modal">
                            {
                                readData.map(
                                    (readData, index) => (
                                        <span key={index} onClick={()=>onSelect(readData)}>
                                            {readData.subject}
                                        </span>
                                    )
                                )
                            }
                        </Modal>
                        <button className="login" onClick={() => setModalOpen(true)}>Create</button>
                        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                            <CreateComponent />
                        </Modal>
                    </div>
                </div>
                {/*如果isMobileNavVisible为true，则display的值为'flex'，这将使<div>可见并采用Flexbox布局。反之是none,隐藏 */}
                <div className="mobile-nav" style={{ display: isMobileNavVisible ? 'flex' : 'none' }}>
                    <div className="close-icon" onClick={handleMenuClick}>X</div>
                    <div id="navMB">
                        {/* 根据 navItems 渲染移动导航链接 */}
                        {
                            readData.map(
                                (readData, index) => (
                                    <li key={index} onClick={() => { onSelect(readData); handleMenuClick(); }}>
                                        {readData.subject}
                                    </li>
                                )
                            )
                        }
                        
                    </div>
                    <input type="text" placeholder="Search..." className="search" />
                    <button className="login" onClick={() => setModalOpen(true)}>Create</button>
                    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                        <CreateComponent />
                    </Modal>
                    
                </div>
            </div>

    );
   
}

export default SCPMenu;