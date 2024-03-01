import Connection from "../../connection/Connection";
import "./contactMe.scss";
import RobotParent from "./../../hero/RobotParent";

export const ContactMe = () => {
  return (
    <div className="contact-me">
      <h1>Have a Coffee with me!</h1>
      <div className="robot">
        <RobotParent />
      </div>
      <div className="connection-signature">
        <h3>Contact me at</h3>
        <div className="connection">
          <Connection />
        </div>
        <div className="signature">Ashish Singhal</div>
        <footer className="footer">
          <img src="./foot.png" alt="Footer image"/>
        </footer>
      </div>
    </div>
  );
};
