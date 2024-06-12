import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/homePage.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function HomePage({readData, onSelect}){
    return(
        <div className='home-content'>
            <div className="content">
                    <div className="left-section">
                    
                    <p className="introduction"><strong>WARNING:</strong> THE FOUNDATION DATABASE IS</p>
                    <h1>CLASSIFIED</h1>
                    <p>UNAUTHORIZED PERSONNEL WILL BE</p>
                    <h3>TRACKED, LOCATED, AND DETAINED</h3>
                    <div className="social-icon">
                        
                        <img src={icon1} alt="icon" />
                        <img src={icon2} alt="icon" />
                        <img src={icon3} alt="icon" />
                        <img src={icon4} alt="icon" />
                    </div>
                    </div>
                    <div className="right-section">
                        {readData.map((readData, index) =>(     
                                <img 
                                    key={index} 
                                    src={`${readData.pic}`} 
                                    alt={readData.subject} 
                                    onClick={()=>onSelect(readData)} 
                                />
                            //使用require来动态导入图片
                        ))}
                        
                    </div>
                </div>
        </div>
    );
}

export default HomePage;