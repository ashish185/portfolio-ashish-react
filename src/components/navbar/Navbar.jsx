import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { GithubIcon, GmailIcon, LinkedInIcon } from "./../icons/icon";
import Connection from "../connection/Connection";

const Navbar = ({linksList}) => {
  return (
    <nav className="navbar">
      {/* <Sidebar linksList={linksList} /> */}
      <Connection containerClassName="nav-bar-wrapper" />
    </nav>
  );
};

export default Navbar;
