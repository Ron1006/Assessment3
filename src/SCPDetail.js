import './css/scp002.css';
import React, { useEffect, useState } from "react";

function SCPDetail({selectedSCP}){

    //for Rating increase or decrease
    // Initialize the rating state to 133
    const [rating, setRating] = useState(133);

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
                    <h1>{selectedSCP.id}</h1>
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
                            
                                <span>{selectedSCP.class}</span>
                            
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
                <div id="SCP002-readBTN">
                    Read Description
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
                            Subject was discovered in a small crater in northern Portugal where it struck the Earth from orbit. Encased in a shell of thick rock, the fleshy exterior of the object was exposed by the impact. A native farmer happened upon the site and reported his findings to the village elder. Subject gained SCP attention when a Level 4 agent posted in the area detected a small radioactive anomaly generated by the object.
                            <br/><br/>
                            A collection squad of SCP security personnel led by General Mulhausen was immediately dispatched to the area where they quickly secured the subject in a large container and performed initial testing with subjects recruited from the nearby village. Three men individually sent into the structure subsequently disappeared. Upon discovering this deadly property of the subject, General Mulhausen issued a Level 4a Termination Order of any witnesses (roughly 1/3 of the village) to ensure no outside knowledge of the object and initiated its transport to SCP facility [DATA EXPUNGED].
                            <br/><br/>
                            During preparation for transport, four SCP security personnel were inexplicably drawn inside the object where they too immediately disappeared. Following inspection, it appeared as if the object had "grown" several new furnishings and was beginning to look like the interior of an apartment room. General Mulhausen immediately ordered the requisition of several Class III HAZMAT suits for the remaining security team members, who proceeded to lift the container onto a waiting freight ship for transport to the SCP containment facility.
                            <br/><br/>
                            [DATA EXPUNGED]
                            <br/><br/>
                            [DATA EXPUNGED]
                            <br/><br/>
                            Following the termination of General Mulhausen, SCP-002 was re-secured by SCP staff and brought into special containment in [CLASSIFIED], where it currently resides. Staff with clearance below Level 3 have been denied access to the SCP-002 container without prior approval of at least two Level 4 staff after the Mulhausen incident.
                        </p>
                    </div>  
                </div>
                

                
            </div>           


        </div>
    );
}

export default SCPDetail;