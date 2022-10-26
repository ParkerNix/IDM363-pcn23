import "./App.css";

import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="https://use.typekit.net/sem7ueo.css"></link>

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
                  <Link className='nav-link' to="header">Cart</Link>
                </li>
                <li className='nav-item mx-1'>
                  <Link className='nav-link' to="footer">Admin</Link>
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
