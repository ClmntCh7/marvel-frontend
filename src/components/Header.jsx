import { Link } from "react-router-dom";
import logo from "../assets/logo_marvel.png";

const Header = () => {
  return (
    <header>
      <div className="Header-logo-block">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="Header-middleNav-buttons">
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
        <div>
          <Link to="/comics">
            <button>Comics</button>
          </Link>
        </div>
      </div>
      <div className="Header-leftNav-buttons">
        <Link to="/comics">
          <button>Favorites</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
