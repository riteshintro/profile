"use client";
import { motion } from "framer-motion";
import TextRotator from "./TextRotator";

const HeroTexts = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg md:text-xl text-gray-400 font-medium tracking-wide"
      >
        Hello, I&apos;m
      </motion.p>

      {/* Name with Gradient */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
      >
        <span className="text-gradient">Ritesh</span>
        <br />
        <span className="text-white">Maurya</span>
        <span className="text-gradient">.</span>
      </motion.h1>

      {/* Animated Underline */}
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="w-32 h-1.5 rounded-full bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#00d4ff]"
      />

      {/* Role Rotator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <TextRotator />
      </motion.div>
    </div>
  );
};

export default HeroTexts;