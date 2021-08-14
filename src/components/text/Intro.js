import React from "react";
import { motion } from "framer-motion";
import AnimatedCharacters from "./AnimatedCharacters";
import "./styles.css";

export default function Intro() {
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Namerr is a package for generating large ammounts of \n names, emails and more on the fly!" },
    {
      type: "heading2",
      text: "Scroll down to see more"
    }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };



  return (
    <motion.div
      className="App"
      initial="hidden"
      // animate="visible"
      // animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedCharacters {...item} key={index} />;
        })}
      </div>
      
    </motion.div>
  );
}
