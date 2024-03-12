import RobotParent from "../../hero/RobotParent";
import "./AboutMe.scss";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <motion.div className="about-me">
      <div className="description">
        {/* <div className="robot">
          <RobotParent />
        </div> */}
        <h2>About me!</h2>
        <div className="description">
          Hi, I&apos;m Ashish, a web developer and UI/UX designer with a passion
          for creating beautiful, functional, and user-centered digital
          experiences. With 5+ years of experience in the field. I am always
          looking for new and innovative ways to bring Consumers visions to
          life.
          <p className="font-medium">
            I believe that design is about more than just making things look
            pretty – it&apos;s about solving problems and creating intuitive,
            enjoyable experiences for users.
          </p>
        </div>
      </div>
      <div className="companies-experiences">
        <h1>Companies I worked upon</h1>
        <div className="companies">
          <a href="https://www.nagarro.com/en">
            <img src="./nagarro.png" alt='nagarro company logo' />
          </a>
          <a href="https://www.soprasteria.com/">
           <img src="./soprasteria.png" alt="sopra steria company logo"/>
          </a>
        </div>
      </div>
      {/* <div className="mountains"></div> */}
      {/* <div className="planets"></div> */}
      {/* <div className="stars"></div> */}
    </motion.div>
  );
};
