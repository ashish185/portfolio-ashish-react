import React from 'react';
import './parallax.scss';
import { motion, useScroll } from "framer-motion";

export const Parallax = () => {
  return (
    <motion.div
      className="parallax"
      style={{
        background: "linear-gradient(180deg, #0c0c1d, #111132)",
      }}
    >
      <motion.h1>This is Parallax page</motion.h1>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="stars"></div>
    </motion.div>
  );
};