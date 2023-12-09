import React from "react";
import { motion } from "framer-motion";

const TestList = () => {
  const items = ["item1", "item2", "item3"];
  const variants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 2 }, //it waits for 2sec then display the list item.
    },
    hidden: { opacity: 0 },
  };
  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item) => (
          <motion.li variants={variants} key={item}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default TestList;
