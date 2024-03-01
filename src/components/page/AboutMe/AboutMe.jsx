import RobotParent from "../../hero/RobotParent";
import "./AboutMe.scss";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <motion.div className="parallax">
      <div className="description_robot">
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
      {/* <div className="mountains"></div> */}
      {/* <div className="planets"></div> */}
      {/* <div className="stars"></div> */}
    </motion.div>
  );
};
