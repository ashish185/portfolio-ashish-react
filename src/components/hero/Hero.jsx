import "./hero.scss";
import { motion } from "framer-motion";

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

const sliderVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%", //setting the animate from left to right
    transition: {
      repeat: Infinity,
      duration: 20,
    },
  },
};

export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
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
            <motion.button variants={textVariant}>Contact me</motion.button>
          </motion.div>
          <motion.img
            src="./scroll.png"
            alt="cursor scroll"
            variants={textVariant}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariant}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="./hero.png"></img>
      </div>
    </div>
  );
};
