import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { GithubIcon, LinkedInIcon } from "./../icons/icon";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <span></span>
        <div className="social">
          {/* Note: files in the public directory are served at the root path 
            therefore instead of /public/instagram.png use /instagram.png
            */}
          <a href="https://www.linkedin.com/in/ashish185/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/ashish185">
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
