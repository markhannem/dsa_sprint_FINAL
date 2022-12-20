import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit" }}>
          <span className="logo">NFLDtravel</span>
        </Link>
        <div className="navItems">
          <button className="navBtn">SIGNUP</button>
          <button className="navBtn">LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
