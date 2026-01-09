"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: string[];
    link: string;
  };
  num: number;
}

const ProjectCards = ({ value, num }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + num * 0.1 }}
      className="group relative w-full md:w-[calc(50%-0.5rem)] p-6 rounded-2xl glass border-gradient hover-lift overflow-hidden"
    >
      {/* Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#00d4ff] opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Content */}
      <div className="relative z-10">
        {/* Title & Link */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="font-heading text-xl font-semibold text-white group-hover:text-gradient transition-all duration-300">
            {value.title}
          </h3>
          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            aria-label="View project"
          >
            {value.link.includes("github") ? (
              <Github className="w-5 h-5" />
            ) : (
              <ExternalLink className="w-5 h-5" />
            )}
          </Link>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {value.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {value.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#667eea]/20 via-[#764ba2]/20 to-[#00d4ff]/20 blur-xl" />
      </div>
    </motion.div>
  );
};

export default ProjectCards;
