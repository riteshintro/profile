"use client";
import { motion } from "framer-motion";
import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import GithubBtn from "@/components/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";

export const siteConfig = {
  name: "Ritesh Maurya",
  description: "Full Stack Developer & UI/UX Enthusiast",
  ogImage: "https://riteshmaurya.vercel.app/og-image.png",
  url: "https://riteshmaurya.vercel.app",
};

export default function Home() {
  return (
    <>
      {/* Left Side - Content */}
      <div className="flex flex-col justify-start gap-8 w-full lg:w-1/2">
        <HeroTexts />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col gap-6"
        >
          <SocialLinks />
          <DownLoadResumeBtn />
        </motion.div>
      </div>

      {/* Right Side - Decorative Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden lg:block w-[45%] h-[500px] relative"
      >
        {/* Abstract Shapes */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Main Circle */}
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#667eea]/30 to-[#764ba2]/30 blur-3xl animate-pulse" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#667eea]/20 to-[#00d4ff]/20 backdrop-blur-sm border border-white/10" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#764ba2]/30 to-[#ec4899]/30 animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-16 h-16 rounded-xl bg-gradient-to-br from-[#00d4ff]/40 to-[#667eea]/40 backdrop-blur-sm border border-white/10"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-24 left-16 w-12 h-12 rounded-full bg-gradient-to-br from-[#ec4899]/40 to-[#764ba2]/40 backdrop-blur-sm border border-white/10"
          />
          <motion.div
            animate={{ y: [-5, 15, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 left-8 w-8 h-8 rounded-lg bg-gradient-to-br from-[#667eea]/50 to-[#00d4ff]/50 rotate-45"
          />
        </div>
      </motion.div>

      {/* GitHub Button */}
      <GithubBtn />
    </>
  );
}
