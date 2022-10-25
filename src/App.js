import './App.css';

import {Layout, Example} from './components/layouts/layout.jsx';

import {Outlet, Link} from "react-router-dom";

function App() {
  return (
    <>
      /<Layout leprop="yo" />
      <br></br>
      <h1>the app of your dreams</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">here</Link>
          </li>
          <li>
            <Link to="header">header</Link>
          </li>
          <li>
            <Link to="footer">footer</Link>
          </li>
          <li>
            <Link to="sidebar">sidebar</Link>
          </li>
        </ul>
      </nav>
      <Example />
      <Outlet />
    </>
  );
}

export default App;
