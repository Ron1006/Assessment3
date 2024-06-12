import SCPDetail from './SCPDetail';
import SCPMenu from './SCPMenu';
import HomePage from './HomePage';
import {useState, useEffect} from 'react';

import {collection, getDocs} from 'firebase/firestore'
import {db} from './fbconfig';
//import './css/homePage.css';



function App() {

  const ourCollection = collection(db, "data");
    const [readData, setReadData] = useState([]);

    useEffect(
        () => {

            const fetchData = async() => {
                try{
                    const snapshot = await getDocs(ourCollection);
                    setReadData(
                        snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
                    );
                }
                catch(error){
                    console.error("Error fetching data: ", error)
                }
            }
            fetchData();
        }, []
    );

  const [selectSCP, setSelectedSCP] = useState(null); // single object,null mean no object has been choosed 123
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
      <SCPMenu readData={readData} onSelect={handleSelectSCP} onLogoClick={handleLogoClick} />
      {showHomePage &&<HomePage readData={readData} onSelect={handleSelectSCP} />}
      {selectSCP && <SCPDetail selectedSCP={selectSCP} />}
    </div>
  );
}

export default App;
