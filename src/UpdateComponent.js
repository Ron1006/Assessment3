import {useState} from 'react';

import {doc, updateDoc} from 'firebase/firestore';
import {db} from './fbconfig';

function UpdateComponent({id, initialSubject, initialItem, initialPic, initialTopimage, initialClassType, initialContainment, initialDescription, onUpdated})
{
    const [Subject, setSubject] = useState(initialSubject);
    const [Item, setItem] = useState(initialItem);
    const [Pic, setPic] = useState(initialPic);
    const [Topimage, setTopimage] = useState(initialTopimage);
    const [ClassType, setClassType] = useState(initialClassType);
    const [Containment, setContainment] = useState(initialContainment);
    const [Description, setDescription] = useState(initialDescription);

    const handleUpdate = async (e) =>
        {
            e.preventDefault()
            const documentRef = doc(db, "data", id);

            try {
                await updateDoc(documentRef, {subject: Subject, item: Item, pic: Pic, topimage: Topimage, classType: ClassType, containment: Containment, description: Description});
                onUpdated(); //Notify ReadComponent to refresh the list
            }
            catch(error){
                console.error("Error updating document: ", error);
            }
        }

    return(
        <>
        <form onSubmit={handleUpdate} className='form-group rounded p-3 mt-5'>
            <input className='form-control mb-3 col-11' type='text' value={Subject} onChange={e => setSubject(e.target.value)} placeholder='Subject' />
            <input className='form-control mb-3 col-11' type='text' value={Item} onChange={e => setItem(e.target.value)} placeholder='Item'/>
            <input className='form-control mb-3 col-11' type='text' value={Pic} onChange={e => setPic(e.target.value)} placeholder='Pic'/>
            <input className='form-control mb-3 col-11' type='text' value={Topimage} onChange={e => setTopimage(e.target.value)} placeholder='Topimage'/>
            <input className='form-control mb-3 col-11' type='text' value={ClassType} onChange={e => setClassType(e.target.value)} placeholder='ClassType'/>
            <textarea className='form-control mb-3 col-11' type='text' value={Containment} onChange={e => setContainment(e.target.value)} placeholder='Containment'></textarea>
            <textarea className='form-control mb-3 col-11' type='text' value={Description} onChange={e => setDescription(e.target.value)} placeholder='Description'></textarea>
            <button type='submit' className='btn btn-custom col-11'>Update SCP</button>
        </form>
        </>
    )
}

export default UpdateComponent;