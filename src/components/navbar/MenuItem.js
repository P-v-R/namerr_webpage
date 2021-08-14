import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#f79226", "#c54536", "#3e415c"];

export const MenuItem = ({ i }) => {
  const style = { border: `3px solid ${colors[i[0]]}`, color: colors[i[0]] };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={{ ...style, backgroundColor: `${colors[i[0]]}` }}></div>
      <div className="text-placeholder" style={style}>{i[1]}</div>
    </motion.li>
  );
};
