import RobotParent from "../../hero/RobotParent";
import "./parallax.scss";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <motion.div className="parallax">
      <div className="description_robot">
        <div className="robot">
          <RobotParent />
        </div>
        <div className="description">
          Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with a
          passion for creating beautiful, functional, and user-centered digital
          experiences. With 4 years of experience in the field. I am always
          looking for new and innovative ways to bring my Clients visions to
          life.
          {/* <p className="font-medium">
          I believe that design is about more than just making things look
          pretty – it&apos;s about solving problems and creating intuitive,
          enjoyable experiences for users.
        </p>
        <p className="font-medium">
          Whether I&apos;m working on a website, mobile app, or other digital
          product, I bring my commitment to design excellence and user-centered
          thinking to every project I work on. I look forward to the opportunity
          to bring my skills and passion to your next project.
        </p> */}
        </div>
      </div>
      {/* <div className="mountains"></div> */}
      <div className="planets"></div>
      <div className="stars"></div>
    </motion.div>
  );
};
