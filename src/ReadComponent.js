import {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore'

import {db} from './fbconfig';

function ReadComponent()
{
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

    

    return(
        <>
        </>
    )
}

export default ReadComponent;