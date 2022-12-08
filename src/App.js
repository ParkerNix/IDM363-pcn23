import "./App.css";

import { Outlet, Link } from "react-router-dom";

function App() {

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='d-flex justify-content-center mt-5'>
              <h1>Flavor Life</h1>
            </div>
            <nav>
              <ul className='nav justify-content-center'>
                <li className='nav-item mx-1 active'>
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
