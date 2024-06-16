import './css/scp002.css';
import React, { useEffect, useState } from "react";
import UpdateComponent from './UpdateComponent';
import Modal from './common/Modal'; // popup

import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from './fbconfig';

function SCPDetail({selectedSCP}){

    // Initialize the rating state to 133
    const [rating, setRating] = useState(133);
    const [isModalOpen, setModalOpen] = useState(false); // for create component popup
    // state to track what document is being edited
    const [editingId, setEditingID] = useState(null);
    const [scpData, setScpData] = useState(selectedSCP);

    //Function to handle thumbs up click
    const handleThumbsUpClick = () => {
        // Increase the rating by 1
        setRating(rating + 1);
    };
    //Function to handle thumbs down click
    const handleThumbsDownClick = () => {
        // Decrease the rating by 1
        setRating(rating - 1);
    };

    // Function to fetch updated SCP data
    const fetchData = async (id) => {
        const documentRef = doc(db, "data", id);
        const docSnap = await getDoc(documentRef);
        if (docSnap.exists()) {
            setScpData(docSnap.data());
        } else {
            console.log("No such document!");
        }
    };

    const handleUpdateClick = () => {
        setEditingID(selectedSCP.id);
        setModalOpen(true);
        //handleRefresh();
    };
    //function to handle data refresh
    const handleRefresh = () => {
        fetchData(selectedSCP.id); //call this to refresh data
        window.location.reload();
    }

    const handleDelete = async (id) => {
        const docRef = doc(db, "data", id)
        try{
            await deleteDoc(docRef);
            handleRefresh();
        }
        catch(error){
            console.error("Error deleting document: ", error);
        }
    }

    // useEffect(() => {
    //     setScpData(selectedSCP); // Update state when selectedSCP changes
    // }, [selectedSCP]);
    
    return(
        <div className="SCP002-content">
            <div className="SCP002-top-pic" style={{backgroundImage:`url(${selectedSCP.topimage})`}}>
                <div className="SCP002-rating">
                    <div id="SCP002-thumbDown" onClick={handleThumbsDownClick}>
                        <img src="./images/thumbdown.png" alt="thumbDown"/>
                    </div>
                    <div id="rating">{rating}</div>
                    <div id="SCP002-thumbUp" onClick={handleThumbsUpClick}>
                        <img src="./images/thumbup.png" alt="thumbDown"/>
                    </div>
                </div>
            </div>

            {/* Attributes */}                
            <div className="SCP002-item002">
                <div className="SCP002-item002-1">
                    <h2>ITEM#:</h2>
                    <h1>{selectedSCP.item}</h1>
                    <div className="SCP002-item-gap">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <h3>LEVEL??</h3> 
                        
                        <p id="scpClass">
                            
                                <span>{selectedSCP.classType}</span>
                            
                        </p>
                    </div>
                </div>
        
                <div className="SCP002-item002-3">
                    <div className="SCP002-item-class1">
                        <div className="SCP002-class-left">
                            <div className="SCP002-class-containment">
                                <p>CONTAINMENT CLASS:</p>
                                <h4>KETER</h4>
                            </div>
                            <div className="SCP002-class-containment2">
                                <p>SECONDARY CLASS:</p>
                                <h4>RADIX</h4>
                            </div>
                        </div>
                        <div className="SCP002-icon-1">
                            <img src="./images/keter-icon.svg" alt="keter" />
                        </div>
                        <div className="SCP002-icon-2">
                            <img src="./images/RADIX.svg" alt="keter" />
                        </div>
                    </div>                          
            
                    <div className="SCP002-item-class2">
                        <div className="SCP002-class-containment3">
                            <div>
                                <p>DISRUPTION CLASS:</p>
                                <h4>INFRARED</h4>
                            </div>                    
                            <div className="SCP002-icon-3">
                                <img src="./images/Infrared.svg" alt="keter" />
                            </div>
                        </div>
                        <div className="SCP002-class-containment4">
                            <div>
                                <p>RISK CLASS:</p>
                                <h4>CRYPTIC</h4>
                            </div>
                            <div className="SCP002-icon-4">
                                <img src="./images/Cryptic.svg" alt="keter" />
                            </div>
                        </div>
                    </div>
            
                    <div className="SCP002-item-class3">
                        <div className="SCP002-icon-top">
                            <img src="./images/keter-icon.svg" alt="keter" />
                        </div>
                        <div className="SCP002-icon-center">
                            <div className="SCP002-icon-left">
                                <img src="./images/RADIX.svg" alt="keter" />
                            </div>
                            <div className="SCP002-icon-right">
                                <img src="./images/Infrared.svg" alt="keter" />
                            </div>
                        </div>
                        
                        <div className="SCP002-icon-down">
                            <img src="./images/Cryptic.svg" alt="keter" />
                        </div>
                    </div>
                </div>
            </div>

            {/*Content*/}
            <div className="SCP002-SCP002-content">
                <div className="SCP002-containment">
                    <p>{selectedSCP.containment}</p>
                </div>
                <div className="SCP002-description"><p>{selectedSCP.description}</p></div>
                <div className="SCP-control">
                    <button className="SCP002-update" onClick={() => handleUpdateClick(selectedSCP.id)} >Update</button>
                    <button className="SCP002-delete" onClick={() => handleDelete(selectedSCP.id)}>Delete</button>
                    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                        {
                            editingId == selectedSCP.id && (
                                <UpdateComponent 
                                id={selectedSCP.id}
                                initialSubject={selectedSCP.subject}
                                initialItem={selectedSCP.item}
                                initialPic={selectedSCP.pic}
                                initialTopimage={selectedSCP.topimage}
                                initialClassType={selectedSCP.classType}
                                initialContainment={selectedSCP.containment}
                                initialDescription={selectedSCP.description}
                                onUpdated={handleRefresh}
                                />
                            )
                        }
                    </Modal>



                    
                </div>
                
                <div className="SCP002-refer">
                    <p>Refer to the Mulhausen Report [cross-ref:document00.023.603] for details related to object's discovery.</p>
                </div>
                <div className="SCP002-contentSCP">
                    <p><strong>Reference: </strong>To date, subject has been responsible for the disappearances of seven personnel. It has also in its time at the facility further furnished itself with two lamps, a throw rug, a television, a radio, a beanbag chair, three books in an unknown language, four children's toys, and a small potted plant. Tests with a variety of lab animals including higher primates have failed to provoke a response in SCP-002. Cadavers as well fail to produce any effect. Whatever process the subject uses to convert organic matter into furnishings is apparently only facilitated by the introduction of living humans.  </p>
                </div>
                <div className="SCP002-report">
                    <p>view Mulhausen Report docid:00.023.603</p>
                </div>

                <div className="SCP002-report2">
                    <div className="SCP002-report2-text">
                        <p>Mulhausen Report [00.023.603]<br/><br/>
                            The following is a brief report detailing the discovery of SCP-002<br/><br/>      
                            The first contact was with SCP-7003-1 on March 20th, 2087, after the siege of the Patriot's Eastern Blockade failed. The encounter was recorded after the activation of Endal Emergency Distress Beacon, ID #41551. Transcript is below.
                            <br/><br/>
                            After an exhaustive multi-week long search, SCP-7003-1 was tracked 14 kilometers southwest of Foundation Stronghold-4, located in the northeastern American region of the Coalition of North American Nations7 (CNAN). During the search, SCP-7003-1 generally moved away from personnel, also demonstrating an ability to de-manifest if threatened or approached too closely. These simple rules laid the groundwork for corralling the anomaly. The Foundation set about to collect and distribute water amongst the highest priority populations and defense forces. Rain is not continuous, but it is without a doubt more common near SCP-7003-1 than anywhere else.
                            <br/><br/>

                            [DATA EXPUNGED]
                            <br/><br/>
                            [DATA EXPUNGED]
n
                        </p>
                    </div>  
                </div>
                

                
            </div>           


        </div>
    );
}

export default SCPDetail;