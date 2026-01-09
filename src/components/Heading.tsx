"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

const Heading = ({ children }: HeadingProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
    >
      <span className="text-gradient">{children}</span>
    </motion.h1>
  );
};

export default Heading;
