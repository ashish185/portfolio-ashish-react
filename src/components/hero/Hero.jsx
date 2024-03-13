import { motion } from "framer-motion";
import "./hero.scss";
import { CONTACT } from "../../constant";

const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0, //setting the animate from left to right
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export const Hero = () => {
  const onContactMeClick = () => {};
  return (
    <div className="hero">
      <motion.div
        className="text-container"
        variants={textVariant}
        initial="initial"
        animate="animate"
      >
        <motion.h2 variants={textVariant} className="name_heading">
          Ashish Singhal
        </motion.h2>
        <motion.h1 variants={textVariant} className="description_heading">
          Web developer and UI designer
        </motion.h1>
        <motion.div variants={textVariant} className="buttons">
          <a href={`#${CONTACT}`} title="Go to Contact section">
            <motion.button variants={textVariant} onClick={onContactMeClick}>
              Contact me
            </motion.button>
          </a>
          <a href="https://drive.google.com/file/d/1cMQQVUTMpOThoKG9F2VIBMf8Cdx7PGCD/view?usp=sharing" download>
            <motion.button variants={textVariant} onClick={onContactMeClick} title="Download Resume">
              Resume
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
      <div className="imageContainer">
        <img src="./hero-webp-format.webp" alt="Profile Picture" />
      </div>
    </div>
  );
};
