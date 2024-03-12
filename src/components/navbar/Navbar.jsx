import "./navbar.scss";
import Connection from "../connection/Connection";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <Sidebar linksList={linksList} /> */}
      <Connection containerClassName="nav-bar-wrapper" />
    </nav>
  );
};

export default Navbar;
