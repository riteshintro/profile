"use client";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationPage = () => {
  const education = [
    {
      period: "July 2018 - 2022",
      degree: "Bachelor of Technology",
      institution: "VBSP Purvanchal University, Jaunpur",
      description:
        "Completed B.Tech with a focus on Computer Science fundamentals. The program provided a well-rounded education covering theoretical foundations and practical applications of software development.",
      location: "Jaunpur, UP",
    },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-8 overflow-hidden">
      {/* Badge */}
      <Badge className="gap-2">
        <Briefcase className="h-4 w-4" />
        Education
      </Badge>

      {/* Main Content */}
      <div className="flex flex-col gap-4">
        <Heading>Educational Background</Heading>
      </div>

      {/* Education Cards */}
      <div className="w-full max-w-3xl space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
            className="p-6 rounded-2xl glass border-gradient hover-lift"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 border border-white/10">
                  <GraduationCap className="w-6 h-6 text-[#667eea]" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400">{edu.institution}</p>
                </div>
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4 text-[#00d4ff]" />
                {edu.period}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[#ec4899]" />
                {edu.location}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
