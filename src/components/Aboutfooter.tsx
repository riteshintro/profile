"use client";
import { motion } from "framer-motion";

interface AboutfooterProps { }

const Aboutfooter = () => {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "5+", label: "Technologies" },
  ];

  return (
    <div className="w-full flex flex-wrap gap-6 py-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
          className="flex-1 min-w-[140px] p-6 rounded-2xl glass text-center hover-lift"
        >
          <span className="block text-4xl font-heading font-bold text-gradient mb-2">
            {stat.value}
          </span>
          <span className="text-sm text-gray-400">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Aboutfooter;