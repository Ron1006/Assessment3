import './css/homePage.css';
import React, { useEffect, useState } from "react";
import logo from './images/logo.png';
import menuHome from './images/menuHome.png';


function SCPMenu({SCPData, onSelect, onLogoClick}){

    const [isMobileNavVisible, setMobileNavVisible] = useState(false)

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
                        {/* SCPData, index为索引，从0开始 ，item.link是获取json里的link*/}
                        {
                            SCPData.map(
                                (SCPData, index) => (
                                    <span key={index} onClick={()=>onSelect(SCPData)}>
                                        {SCPData.subject}
                                    </span>
                                )
                            )
                        }
                    </div>
                    <div className="header-right">
                        <input type="text" placeholder="Search..." className="search" />
                        <button className="login">Sign In</button>
                    </div>
                </div>
                {/*如果isMobileNavVisible为true，则display的值为'flex'，这将使<div>可见并采用Flexbox布局。反之是none,隐藏 */}
                <div className="mobile-nav" style={{ display: isMobileNavVisible ? 'flex' : 'none' }}>
                    <div className="close-icon" onClick={handleMenuClick}>X</div>
                    <div id="navMB">
                        {/* 根据 navItems 渲染移动导航链接 */}
                        {
                            SCPData.map(
                                (SCPData, index) => (
                                    <li key={index} onClick={() => { onSelect(SCPData); handleMenuClick(); }}>
                                        {SCPData.subject}
                                    </li>
                                )
                            )
                        }
                        
                    </div>
                    <input type="text" placeholder="Search..." className="search" />
                </div>
            </div>

        
        // <div>
        //     {
        //         SCPData.map(
        //             (SCPData, index) => (
        //                 <li key={index} onClick={()=>onSelect(SCPData)}>
        //                     {SCPData.subject}
        //                 </li>
        //             )
        //         )
        //     }
        // </div>
    );
   
}

export default SCPMenu;