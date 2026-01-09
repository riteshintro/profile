"use client";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  FolderKanban,
  Home,
  Layers,
  Lightbulb,
  Phone,
  User2,
} from "lucide-react";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const items = [
    { name: "Home", icon: <Home className="w-5 h-5" />, link: "/" },
    { name: "About", icon: <User2 className="w-5 h-5" />, link: "/about" },
    { name: "Skills", icon: <Lightbulb className="w-5 h-5" />, link: "/skills" },
    { name: "Projects", icon: <FolderKanban className="w-5 h-5" />, link: "/projects" },
    { name: "Experience", icon: <Layers className="w-5 h-5" />, link: "/experience" },
    { name: "Education", icon: <Briefcase className="w-5 h-5" />, link: "/education" },
    { name: "Contact", icon: <Phone className="w-5 h-5" />, link: "/contact" },
  ];

  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50",
        "px-2 py-2 rounded-full",
        "glass-strong",
        "flex items-center gap-1",
        "transition-all duration-300",
        scrolling && "top-2 scale-95"
      )}
    >
      {items.map((item) => {
        const isActive = pathname === item.link;

        return (
          <Link
            key={item.name}
            href={item.link}
            className={cn(
              "relative px-4 py-2.5 rounded-full",
              "flex items-center justify-center",
              "transition-all duration-300 ease-out",
              "hover:scale-105",
              "group"
            )}
          >
            {/* Active Background */}
            {isActive && (
              <motion.div
                layoutId="navbar-active"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}

            {/* Icon */}
            <span
              className={cn(
                "relative z-10 transition-colors duration-300",
                isActive
                  ? "text-white"
                  : "text-gray-400 group-hover:text-white"
              )}
            >
              {item.icon}
            </span>

            {/* Tooltip */}
            <span
              className={cn(
                "absolute -bottom-10 left-1/2 -translate-x-1/2",
                "px-3 py-1.5 rounded-lg",
                "bg-gray-900/90 backdrop-blur-sm",
                "text-xs font-medium text-white whitespace-nowrap",
                "opacity-0 translate-y-2 pointer-events-none",
                "group-hover:opacity-100 group-hover:translate-y-0",
                "transition-all duration-200",
                "border border-white/10"
              )}
            >
              {item.name}
              {/* Tooltip Arrow */}
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45 border-l border-t border-white/10" />
            </span>
          </Link>
        );
      })}
    </motion.nav>
  );
};

export default Navbar;
