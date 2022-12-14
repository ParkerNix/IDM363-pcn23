import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Admin, Shop, Details, Home } from './components';
import store from './store/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/shop" element={<Shop />}>
                  <Route path=":itemKey" element={<Details />}></Route>
                </Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="/*" element={<p>Nothing found here.</p>}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
