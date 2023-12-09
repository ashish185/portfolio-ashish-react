import React from 'react'
import { motion } from "framer-motion";

const Test = () => {
  return (
    <div className="course">
      <motion.div
        className="box"
        initial={{
          opacity: 0,
          scale: 0.5, 
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 200, // move to x to 200px with going scaling
          //if 0 ek dum dikhega then gayab ho jayege
        }}
        /*  transition={{
          delay: 2, //it gonna wait 2 sec to apply the transition effect that is animate.
          duration: 2, //duration se 2 sec bad diminished hoyega
        }} */
        whileHover={{
          opacity: 1,
          scale: 0.5, //jab hi hover krenge, tab box chota ho jayega, if hover nhi hoga to bda ho jayega
        }}
      ></motion.div>
    </div>
  );
}

export default Test