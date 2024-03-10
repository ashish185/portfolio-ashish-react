import Connection from "../../connection/Connection";
import "./contactMe.scss";
import RobotParent from "./../../hero/RobotParent";
import Robot from "../../svg/Robot";

export const ContactMe = () => {
  return (
    <div className="contact-me">
      <div className="internal-content">
        <h1 className="coffee-message">Have a Coffee with me!</h1>
        <div className="connection-signature">
          <img src="./robo.png" alt="Robot Picture" className="robo" />
          <div className="connection">
            <h3 className="contact_me-message">Contact me at below mediums</h3>
            <Connection />
          </div>
        </div>
        <div className="signature">Ashish Singhal</div>
      </div>
      <footer className="footer">
        <img src="./foot.png" alt="Footer image" />
      </footer>
      s
    </div>
  );
};
