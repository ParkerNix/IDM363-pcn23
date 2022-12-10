import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import { update } from "../../store/slices/items"
import { getDoc, setDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';

export const Admin = (keyName, title, price, text) => {
    const dispatch = useDispatch();
  
    const [item, setItem] = useState({
      keyName, text, title, price
    })
  
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
        })
      }
    }
  
    async function updateFirestore(id, title, price, text){
      const docRef = doc(db, 'saleItems', id);
      const docSnap = await getDoc(docRef);
      const docData = docSnap.data()
      setDoc(docRef, {
          ...docData,
          item_title: item.title,
          price: item.price,
          text: item.text
      })
      dispatch(update({id, title, price, text}));
    }
  
    return(
        <div className='form'>
            <form>
                <label>
                    <input 
                        name='title'
                        onChange={e => handleInputChange(e)}
                        type='text'
                        value={item.name}
                    />
                </label>
                <label>
                    <input 
                        name='text'
                        onChange={e => handleInputChange(e)}
                        type='text'
                        value={item.text}
                    />
                </label>
                <label>
                    <input 
                        name='price'
                        onChange={e => handleInputChange(e)}
                        type='number'
                        value={item.price}
                    />
                </label>
            </form>
            <button onClick={e => updateFirestore(item.id, item.name, item.price, item.text)}>Update Firestore</button>
        </div>
    )
}


export default Admin;