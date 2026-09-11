import "./hero.scss";
import { CONTACT } from "../../constant";

export const Hero = ({ resumeLink }) => {
  const onContactMeClick = () => {};
  return (
    <div className="hero">
        <div className="imageContainer">
        <img src="./tech-consultant.webp" alt="Profile Picture" />
      </div>
      <div className="text-container">
        <h2 className="name_heading slide-in" style={{ animationDelay: "0s" }}>
          Ashish Singhal
        </h2>
        <h1
          className="description_heading slide-in"
          style={{ animationDelay: "0.1s" }}
        >
          Web developer and UI designer
        </h1>
        <div className="buttons slide-in" style={{ animationDelay: "0.2s" }}>
          <a href={`#${CONTACT}`} title="Go to Contact section">
            <button onClick={onContactMeClick}>Contact me</button>
          </a>
          <a href={resumeLink} download>
            <button onClick={onContactMeClick} title="Download Resume">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
