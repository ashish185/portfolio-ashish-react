import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { GithubIcon, GmailIcon, LinkedInIcon } from "./../icons/icon";

const Navbar = ({linksList}) => {
  return (
    <div className="navbar">
      <Sidebar linksList={linksList} />
      <div className="wrapper">
        <span></span>
        <div className="social">
          {/* Note: files in the public directory are served at the root path 
            therefore instead of /public/instagram.png use /instagram.png
            */}
          <a
            href="https://www.linkedin.com/in/ashish185/"
            aria-label="Contact through LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:singhalash185@gmail.com"
            aria-label="Contact through Gmail"
          >
            <GmailIcon />
          </a>
          <a
            href="https://github.com/ashish185"
            aria-label="Contact through Github"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
