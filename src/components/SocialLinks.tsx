"use client";
import { Github, Instagram, Linkedin, Twitter, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SocialLinks = () => {
  const links = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/riteshintro",
      icon: <Instagram className="w-5 h-5" />,
      color: "hover:text-pink-500 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
    },
    {
      name: "Twitter",
      link: "https://x.com/riteshintro",
      icon: <Twitter className="w-5 h-5" />,
      color: "hover:text-sky-400 hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/riteshintro",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:text-blue-500 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
    },
    {
      name: "GitHub",
      link: "https://github.com/riteshintro",
      icon: <Github className="w-5 h-5" />,
      color: "hover:text-purple-400 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
        >
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center",
              "w-12 h-12 rounded-xl",
              "bg-white/5 border border-white/10",
              "text-gray-400",
              "transition-all duration-300 ease-out",
              "hover:scale-110 hover:-translate-y-1",
              item.color
            )}
            aria-label={item.name}
          >
            {item.icon}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialLinks;
