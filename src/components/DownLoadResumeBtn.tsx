"use client";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const DownLoadResumeBtn = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.1 }}
    >
      <Link
        href="/Ritesh.pdf"
        target="_blank"
        className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl overflow-hidden"
      >
        {/* Gradient Background */}
        <span className="absolute inset-0 bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#667eea] bg-[length:200%_100%] transition-all duration-500 group-hover:bg-[position:100%_0]" />

        {/* Shimmer Effect */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </span>

        {/* Glow */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-[#667eea] to-[#764ba2]" />

        {/* Content */}
        <span className="relative flex items-center gap-3 text-white font-semibold text-lg">
          <Download className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
          Download Resume
        </span>
      </Link>
    </motion.div>
  );
};

export default DownLoadResumeBtn;