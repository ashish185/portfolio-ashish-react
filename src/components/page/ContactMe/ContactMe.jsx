import Connection from "../../connection/Connection";
import "./contactMe.scss";

export const ContactMe = () => {
  return (
    <div className="contact-me">
      <h1>Have a Coffee with me!</h1>
      <div className="connection-signature">
        <div className="connection">
          <Connection />
        </div>
        <div className="signature">Ashish Singhal</div>
        <footer className="footer">
          <img src="./foot.png"></img>
        </footer>
      </div>
    </div>
  );
};
