import './css/homePage.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function HomePage({SCPData, onSelect}){
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
                        {SCPData.map((SCPData, index) =>(     
                                <img 
                                    key={index} 
                                    src={`${SCPData.pic}`} 
                                    alt={SCPData.subject} 
                                    onClick={()=>onSelect(SCPData)} 
                                />
                            //使用require来动态导入图片
                        ))}
                        
                    </div>
                </div>
        </div>
    );
}

export default HomePage;