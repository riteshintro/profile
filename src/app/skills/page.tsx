"use client";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Code, Wrench } from "lucide-react";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import js from "../../../public/js.png";
import ts from "../../../public/ts.png";
import react from "../../../public/react.png";
import nextjs from "../../../public/next_js.webp";
import python from "../../../public/python.webp";
import nestjs from "../../../public/nestjs.png";
import pg from "../../../public/pg.png";
import github from "../../../public/github.png";
import electron from "../../../public/electron.png";
import reactnative from "../../../public/reactnative.svg";
import extenstion from "../../../public/extenstion.png";

const SkillsPage = () => {
  const languages = [
    { alt: "html", img: html },
    { alt: "css", img: css },
    { alt: "javascript", img: js },
    { alt: "typescript", img: ts },
    { alt: "python", img: python },
  ];

  const frameworks = [
    { alt: "react", img: react },
    { alt: "next.js", img: nextjs },
    { alt: "nestjs", img: nestjs },
    { alt: "postgresql", img: pg },
    { alt: "github", img: github },
    { alt: "electron", img: electron },
    { alt: "react native", img: reactnative },
    { alt: "chrome extension", img: extenstion },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-8 overflow-hidden">
      {/* Badge */}
      <Badge className="gap-2">
        <Lightbulb className="h-4 w-4" />
        My Skills
      </Badge>

      {/* Main Content */}
      <div className="flex flex-col gap-6 max-w-3xl">
        <Heading>Technical Skills & Expertise</Heading>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          I specialize in building modern web applications with a strong foundation in
          HTML5, CSS3, JavaScript, and TypeScript. My expertise includes React ecosystem,
          Next.js for full-stack development, and various backend technologies.
        </motion.p>
      </div>

      {/* Languages Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full"
      >
        <h2 className="flex items-center gap-3 text-xl font-heading font-semibold text-white mb-2">
          <Code className="w-5 h-5 text-[#667eea]" />
          Programming Languages
        </h2>
        <SkillsFooter items={languages} />
      </motion.div>

      {/* Frameworks Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full"
      >
        <h2 className="flex items-center gap-3 text-xl font-heading font-semibold text-white mb-2">
          <Wrench className="w-5 h-5 text-[#00d4ff]" />
          Frameworks & Tools
        </h2>
        <SkillsFooter items={frameworks} />
      </motion.div>
    </div>
  );
};

export default SkillsPage;
