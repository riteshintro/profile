"use client";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "React.js Expert",
  "Next.js Developer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
];

const TextRotator = () => {
  return (
    <div className="flex items-center gap-3 text-xl md:text-2xl font-medium">
      <span className="text-gray-400">I&apos;m a</span>
      <div className="relative h-9 overflow-hidden">
        <motion.div
          animate={{ y: [0, -36, -72, -108, -144, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
          className="flex flex-col"
        >
          {roles.map((role, index) => (
            <span
              key={index}
              className="h-9 flex items-center text-gradient-cyan font-semibold"
            >
              {role}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TextRotator;