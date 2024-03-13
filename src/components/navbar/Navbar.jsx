import "./navbar.scss";
import Connection from "../connection/Connection";
import Sidebar from './../sidebar/Sidebar';

const Navbar = ({ linksList }) => {
  return (
    <nav className="navbar">
      {/* <Sidebar linksList={linksList} /> */}
      <Connection containerClassName="nav-bar-wrapper" />
    </nav>
  );
};

export default Navbar;
