import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
 
  return (
    
    <>
      <nav className="navbar">
        <ul>
        <div className="img">
            <img src="/imagens/logo.png" alt="logo"></img>
        </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Characters">Characters</Link>
          </li>
          <li>
            <Link to="/SearchByName">Search By Name</Link>
          </li>
          <li>
            <Link to="/SearchByStatus">Search By Status</Link>
          </li>
          <li>
            <Link to="/SearchBySpecies">Search By Species</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
