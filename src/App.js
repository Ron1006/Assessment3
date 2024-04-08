import SCPDetail from './SCPDetail';
import SCPMenu from './SCPMenu';
import HomePage from './HomePage';
import {useState, useEffect} from 'react';
import SCPData from './scp.json';
//import './css/homePage.css';

function App() {

  const [selectSCP, setSelectedSCP] = useState(null); // single object,null mean no object has been choosed
  // const [selectSCP, setSelectedSCP] = useState(SCPData[0]); // default display the first object
  const [showHomePage, setShowHomePage] = useState(true); // control homepage state

  const handleSelectSCP = (scp) => {
    setSelectedSCP(scp);
    setShowHomePage(false);
  }//onSelect之后，会给const handleselectSCP传送一个scp的值，然后把这个值赋予setSelectedSCP

  const handleLogoClick = () => {
    setShowHomePage(true);
  }

  return (
    <div className='app-container'>
      <SCPMenu SCPData={SCPData} onSelect={handleSelectSCP} onLogoClick={handleLogoClick} />
      {showHomePage &&<HomePage SCPData={SCPData} onSelect={handleSelectSCP} />}
      {selectSCP && <SCPDetail selectedSCP={selectSCP} />}
    </div>
  );
}

export default App;
