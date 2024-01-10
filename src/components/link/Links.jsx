import { motion } from "framer-motion";
import { ABOUT, CONTACT, HOME_PAGE, SKILLS } from "../../constant";


const Links = () => {
  const items = [HOME_PAGE, ABOUT, SKILLS, CONTACT];

  return (
    <div className="links">
        {items.map((item)=> (<a href={`#${item}`} key={item}>{item}</a>))}
    </div>
    // <motion.div className="links" variants={variants}>
    //   {items.map((item) => (
    //     <motion.a
    //       href={`#${item}`}
    //       key={item}
    //       variants={itemVariants}
    //       whileHover={{ scale: 1.1 }}
    //       whileTap={{ scale: 0.95 }}
    //     >
    //       {item}
    //     </motion.a>
    //   ))}
    // </motion.div>
  );
};

export default Links;