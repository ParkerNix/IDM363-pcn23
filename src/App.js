import "./App.css";

import { Outlet, Link } from "react-router-dom";
import { collection, onSnapshot, query, } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "./store/slices/items";

function App() {
  const dispatch = useDispatch();
  
  const [allItems, setAllItems] = useState([])

  useEffect(() => {
    const q = query(collection(db, "saleItems"))
    onSnapshot(q, querySnapshot => {
      setAllItems([])
      querySnapshot.forEach(doc => {
        setAllItems(prevAllItems => [
          ...prevAllItems,
          doc.data()
        ])
      })
    })
  }, [])

  useEffect(() => {
    dispatch(update(allItems))
  })

  console.log(allItems)

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='d-flex justify-content-center mt-5'>
              <h1>Flavor Life</h1>
              <h1>{process.env.REACT_APP_FIREBASE_API_KEY}</h1>
            </div>
            <nav>
              <ul className='nav justify-content-center'>
                <li className='nav-item mx-1'>
                  <Link className='nav-link' to="/">Home</Link>
                </li>
                <li className='nav-item mx-1'>
                  <Link className='nav-link' to="shop">Shop</Link>
                </li>
                <li className='nav-item mx-1'>
                  <Link className='nav-link' to="cart">Cart</Link>
                </li>
                <li className='nav-item mx-1'>
                  <Link className='nav-link' to="admin">Admin</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
