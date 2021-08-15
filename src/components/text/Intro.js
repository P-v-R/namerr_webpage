import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedCharacters from "./AnimatedCharacters";
import "./styles.css"

export default function Intro() {
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "names, emails, and more on the fly!" },
    {
      type: "heading2",
      text: "Scroll down to see more"
    }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.019
      }
    }
  };



  return (
    <motion.div
      className="container"
      initial="hidden"
      animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      
      {placeholderText.map((item, index) => {
        return <AnimatedCharacters {...item} key={index} />;
      })}
      
      
    </motion.div >
  );
}
