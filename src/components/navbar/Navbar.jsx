import React from "react";
import './navbar.scss';
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <span>Ashish Page</span>
        <div className="social">
          {/* Note: files in the public directory are served at the root path 
            therefore instead of /public/instagram.png use /instagram.png
            */}
          <a href="#">
            <img src="/instagram.png"></img>
          </a>
          <a href="#">
            <img src="/youtube.png"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
