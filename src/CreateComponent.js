import {useState} from 'react';
import {collection, addDoc} from 'firebase/firestore';
import {db} from './fbconfig';
import './css/homePage.css';

function CreateComponent({ onClose })
{

    //const [Id, setId] = useState("");
    const [Subject, setSubject] = useState("");
    const [Item, setItem] = useState("");
    const [Pic, setPic] = useState("");
    const [Topimage, setTopimage] = useState("");
    const [ClassType, setClassType] = useState("");
    const [Containment, setContainment] = useState("");
    const [Description, setDescription] = useState("");

    const ourCollection = collection(db, "data");

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        try{
            await addDoc(ourCollection, {subject: Subject, item: Item, pic: Pic, topimage: Topimage, classType: ClassType, containment: Containment, description: Description});
            
            //setId("");
            setSubject("")
            setItem("");
            setPic("");
            setTopimage("");
            setClassType("");
            setContainment("");
            setDescription("");
            // Reload the page
            window.location.reload();
            onClose(); // close popup after submit success
        }
        catch(error){
            console.error("Error adding document: ", error);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit} className='form-group  rounded p-3'>
                {/* <input className='form-control mb-3 col-11' type='text' value={Id} onChange={e => setId(e.target.value)} placeholder='ID'/> */}
                <input className='form-control mb-3 col-11' type='text' value={Subject} onChange={e => setSubject(e.target.value)} placeholder='Subject'/>
                <input className='form-control mb-3 col-11' type='text' value={Item} onChange={e => setItem(e.target.value)} placeholder='Item'/>
                <input className='form-control mb-3 col-11' type='text' value={Pic} onChange={e => setPic(e.target.value)} placeholder='Pic'/>
                <input className='form-control mb-3 col-11' type='text' value={Topimage} onChange={e => setTopimage(e.target.value)} placeholder='Topimage'/>
                <input className='form-control mb-3 col-11' type='text' value={ClassType} onChange={e => setClassType(e.target.value)} placeholder='ClassType'/>
                <textarea className='form-control mb-3 col-11' type='text' value={Containment} onChange={e => setContainment(e.target.value)} placeholder='Containment'></textarea>
                <textarea className='form-control mb-3 col-11' type='text' value={Description} onChange={e => setDescription(e.target.value)} placeholder='Description'></textarea>
                <button type='submit' className='btn btn-custom col-11'>Create SCP</button>
            </form>
        </>
    )
}

export default CreateComponent;