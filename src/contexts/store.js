import { useState, createContext, useEffect } from "react";
import { collection, onSnapshot, query, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const StoreContext = createContext({
    items: [],
    userCart: [],
    addToCart: (name) => {},
    removeFromCart: (name) => {},
    removeAllFromCart: (name) => {},
    checkout: () => {},
    setUserCart: (cart) => {},
    setItems: (data) => {},
    sendChanges: (item) => {},
  });
  
  let localState = {
    items: [],
    userCart: [],
    addToCart: (name) => {},
    removeFromCart: (name) => {},
    removeAllFromCart: (name) => {},
    checkout: () => {},
    setUserCart: (cart) => {},
    setItems: (data) => {},
    sendChanges: (item) => {},
  };
  
  export const StoreContextProvider = ({ children }) => {
    useEffect(() => {
      let itemsArray = [];
      localState = initState;
  
      const q = query(collection(db, "saleItems"));
      onSnapshot(q, (querySnapshot) => {
        itemsArray = [];
        querySnapshot.forEach((doc) => {
          const itemData = {
            keyName: doc.id,
            ...doc.data(),
          };
          itemsArray.push(itemData);
        });
        console.log(itemsArray)
        setItems(itemsArray);
        initCart();
      });
  
      //eslint-disable-next-line
    }, []);
  
    const initCart = () => {
      const shoppingCart = localState.items.map((item) => ({
        ...item,
        in_cart: 0,
      }));
  
      setUserCart(shoppingCart);
    };
  
    const setUserCart = (cart) => {
      localState.userCart = cart;
      setState({ ...localState });
    };
  
    const addToCart = (name) => {
      const cart = localState.userCart;
      cart.forEach((item) => {
        if (item.name === name) item.in_cart++;
      });
  
      setUserCart(cart);
    };
  
    const removeFromCart = (name) => {
      const cart = localState.userCart;
      cart.forEach((item) => {
        if (item.name === name) item.in_cart--;
      });
  
      setUserCart(cart);
    };
  
    const removeAllFromCart = (name) => {
      const cart = localState.userCart;
      cart.forEach((item) => {
        if (item.name === name) item.in_cart = 0;
      });
  
      setUserCart(cart);
    };
  
    const checkout = () => {
      const cart = localState.userCart;
      cart.forEach((item) => {
        item.in_cart = 0;
      });
  
      setUserCart(cart);
    };
  
    const setItems = (data) => {
      localState.item = data;
      setState({
        ...localState,
      });
    };
  
    const sendChanges = (item) => {
      let newItem = { ...item };
      delete newItem.keyName;
      setDoc(doc(db, "saleItems", item.keyName), newItem);
    };
  
    const initState = {
      items: [],
      userCart: [],
      removeFromCart: removeFromCart,
      removeAllFromCart: removeAllFromCart,
      checkout: checkout,
      addToCart: addToCart,
      setUserCart: setUserCart,
      setItems: setItems,
      sendChanges: sendChanges,
    };
  
    const [state, setState] = useState(initState);
  
    return (
      <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
    );
  };
  
  export default StoreContext;