"use client";
import { motion } from "framer-motion";
import Aboutfooter from "@/components/Aboutfooter";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Code2, User2 } from "lucide-react";

const page = () => {
  const hobbies = [
    "Coding",
    "Reading Tech News",
    "Watching Movies",
    "Tech Blog Writing",
    "Building Projects",
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-8 overflow-hidden">
      {/* Badge */}
      <Badge className="gap-2">
        <User2 className="h-4 w-4" />
        About Me
      </Badge>

      {/* Main Content */}
      <div className="flex flex-col gap-6 max-w-3xl">
        <Heading>
          Software Engineer & Web Developer
        </Heading>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center gap-2 text-gray-400"
        >
          <MapPin className="w-4 h-4 text-[#667eea]" />
          <span>Based in Jaunpur, India</span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          I am a Full Stack Web Developer passionate about crafting exceptional digital experiences.
          I specialize in building modern web applications using React, Next.js, and TypeScript.
          With a keen eye for detail and commitment to clean code, I create seamless,
          responsive interfaces that leave lasting impressions.
        </motion.p>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-3 p-4 rounded-xl glass"
        >
          <Code2 className="w-6 h-6 text-[#00d4ff]" />
          <span className="text-gray-300">
            Currently working as a <span className="text-white font-medium">React.js Developer</span>
          </span>
        </motion.div>
      </div>

      {/* Stats */}
      <Aboutfooter />

      {/* Hobbies Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="w-full"
      >
        <h2 className="flex items-center gap-3 text-2xl font-heading font-semibold text-white mb-4">
          <Heart className="w-6 h-6 text-pink-500" />
          Hobbies & Interests
        </h2>

        <div className="flex flex-wrap gap-3">
          {hobbies.map((hobby, index) => (
            <motion.span
              key={hobby}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
              className="px-4 py-2 rounded-full glass text-gray-300 text-sm hover:text-white hover:border-[#667eea]/50 transition-all cursor-default"
            >
              {hobby}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default page;
