"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface SkillsFooterProps {
  items: { alt: string; img: StaticImageData }[];
}

const SkillsFooter = ({ items }: SkillsFooterProps) => {
  return (
    <div className="flex flex-wrap gap-4 py-6">
      {items.map((skill, index) => (
        <motion.div
          key={skill.alt}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
          className="group relative p-4 rounded-xl glass hover-lift cursor-pointer"
        >
          <Image
            src={skill.img}
            alt={skill.alt}
            width={48}
            height={48}
            className="w-12 h-12 object-contain filter group-hover:brightness-110 transition-all duration-300"
          />

          {/* Tooltip */}
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs font-medium bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap capitalize">
            {skill.alt}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsFooter;
