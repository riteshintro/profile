"use client";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const GithubBtn = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.3 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <Link
        href="https://github.com/riteshintro"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-5 py-3 rounded-full glass-strong hover:scale-105 transition-all duration-300"
      >
        <Github className="w-5 h-5 text-white group-hover:text-purple-400 transition-colors" />
        <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
          Star on GitHub
        </span>

        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full border border-purple-500/20 animate-ping opacity-75" />
      </Link>
    </motion.div>
  );
};

export default GithubBtn;
