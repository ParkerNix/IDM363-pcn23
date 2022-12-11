import { useDispatch } from "react-redux"
import { useState } from 'react'
import { update } from "../../store/slices/items"
import { getDoc, setDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';

const AdminItem = ( { id, title, price, desc}  ) => {

    const dispatch = useDispatch();

    const [item, setItem] = useState({
        id, title, price, desc
    });
  
    function handleInputChange(e) {
        if (e.target.type === "number") {
            setItem({
              ...item,
              [e.target.name]: parseFloat(e.target.value),
            })
        } else {
            setItem({
              ...item,
              [e.target.name]: e.target.value,
            });
      };
    };
  
    async function updateFirestore(id, title, price, desc){
        const docRef = doc(db, "saleItems", id);
        const docSnap = await getDoc(docRef);
        const docData = docSnap.data();
        setDoc(docRef, {
            ...docData,
            title: title,
            price: price,
            desc: desc
        })
        dispatch(update({id, title, price, desc}));
    };
  
    return(
        <>
            <div className="card mb-3 p-3" key={`admin-${id}`}>
                <form className="card-body d-flex flex-column">
                    <label className="mb-3">
                        <h3>Flavor title</h3>
                        <input 
                            name='title'
                            onChange={e => handleInputChange(e)}
                            type='text'
                            value={item.title}
                        />
                    </label>
                    <label className="mb-3">
                        <h3>Flavor description</h3>
                        <input 
                            name='desc'
                            onChange={e => handleInputChange(e)}
                            type='text'
                            value={item.desc}
                        />
                    </label>
                    <label>
                        <h3>Flavor price in cents</h3>
                        <input 
                            name='price'
                            onChange={e => handleInputChange(e)}
                            type='number'
                            value={item.price}
                        />
                    </label>
                </form>
                <button className="py-2 px-2" onClick={e => updateFirestore(item.id, item.title, item.price, item.desc)}>Update!</button>
            </div>
        </>
    );
};


export default AdminItem;