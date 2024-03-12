import Connection from "../../connection/Connection";
import "./contactMe.scss";

export const ContactMe = () => {
  return (
    <div className="contact-me">
      <h1 className="coffee-message">Have a Coffee with me!</h1>
      <div className="internal-content">
        <div className="connection-signature">
          <img src="./robo.png" alt="Robot Picture" className="robo" />
          <div className="connection">
            <h4 className="contact_me-message">Contact me at below mediums</h4>
            <Connection containerClassName="contact-me-icons" />
          </div>
        </div>
        <div className="signature">Ashish Singhal</div>
      </div>
      <footer className="footer">
        <img src="./foot.png" alt="Footer image" />
      </footer>
    </div>
  );
};
