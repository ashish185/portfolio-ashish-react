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
  const onContactMeClick=()=>{
    
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariant}>Ashish Singhal</motion.h2>
          <motion.h1 variants={textVariant}>
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariant} className="buttons">
            <motion.button variants={textVariant}>
              See the latest works
            </motion.button>
            <a href={`#${CONTACT}`}>
              <motion.button variants={textVariant} onClick={onContactMeClick}>
                Contact me
              </motion.button>
            </a>
          </motion.div>
          <motion.img
            src="./scroll.png"
            alt="cursor scroll"
            variants={textVariant}
            animate="scrollButton"
          />
        </motion.div>
      </div>

      <div className="imageContainer">
        {/* <RobotParent /> */}
        <img src="./hero-webp-format.webp" alt="Profile Picture" />
      </div>
    </div>
  );
};
