"use client";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Layers, Building2, Calendar } from "lucide-react";

const ExperiencePage = () => {
  const experiences = [
    {
      period: "Nov 2022 - Present",
      role: "React.js Developer",
      company: "Technobren Infotech Pvt Ltd",
      description:
        "Working on enterprise-level React applications, implementing new features, optimizing performance, and collaborating with cross-functional teams to deliver high-quality software solutions.",
      current: true,
    },
    {
      period: "June 2022 - Nov 2022",
      role: "React.js Trainee",
      company: "Technobren Infotech Pvt Ltd",
      description:
        "Learned and applied React.js fundamentals, building components, managing state, and contributing to real-world projects under senior developer mentorship.",
      current: false,
    },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-8 overflow-hidden">
      {/* Badge */}
      <Badge className="gap-2">
        <Layers className="h-4 w-4" />
        Experience
      </Badge>

      {/* Main Content */}
      <div className="flex flex-col gap-4">
        <Heading>Work Experience</Heading>
      </div>

      {/* Timeline */}
      <div className="w-full max-w-3xl space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
            className="relative flex gap-6"
          >
            {/* Timeline Line */}
            <div className="flex flex-col items-center">
              <div
                className={`w-4 h-4 rounded-full border-2 ${exp.current
                    ? "bg-gradient-to-r from-[#667eea] to-[#764ba2] border-[#667eea] shadow-lg shadow-purple-500/30"
                    : "bg-gray-700 border-gray-600"
                  }`}
              />
              {index < experiences.length - 1 && (
                <div className="w-0.5 h-full bg-gradient-to-b from-gray-600/50 to-transparent mt-2" />
              )}
            </div>

            {/* Content Card */}
            <div className="flex-1 pb-8">
              <div className="p-6 rounded-2xl glass hover-lift">
                {/* Period Badge */}
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                  {exp.current && (
                    <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                      Current
                    </span>
                  )}
                </div>

                {/* Role */}
                <h3 className="text-xl font-heading font-semibold text-white mb-1">
                  {exp.role}
                </h3>

                {/* Company */}
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Building2 className="w-4 h-4 text-[#667eea]" />
                  {exp.company}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
