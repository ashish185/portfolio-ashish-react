import { useState } from "react";
import "./sidebar.scss";
import Links from "../link/Links";
import { ToggleButton } from './../toggleButton/ToggleButton';

const Sidebar = ({ linksList = {} }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`sidebar ${open ? "open" : "closed"}`}>
      <div className="bg">
        <Links linksList={linksList} />
      </div>
      {/* <ToggleButton open={open} setOpen={setOpen} /> */}
    </div>
  );
};

export default Sidebar;
