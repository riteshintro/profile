"use client";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { PackagePlus, ExternalLink, Newspaper } from "lucide-react";
import Link from "next/link";

const MorePage = () => {
  const platforms = [
    {
      title: "Dev.to",
      description: "Technical articles on web development, JavaScript, and modern frameworks.",
      link: "https://dev.to",
      color: "from-[#0a0a0a] to-[#1a1a2e]",
    },
    {
      title: "Hashnode",
      description: "In-depth tutorials and guides on trending tech stacks.",
      link: "https://hashnode.dev/",
      color: "from-[#2962ff] to-[#0a0a0a]",
    },
    {
      title: "Medium",
      description: "Stories and insights about software engineering practices.",
      link: "https://medium.com/",
      color: "from-[#0a0a0a] to-[#1a1a2e]",
    },
    {
      title: "Daily.Dev",
      description: "Active member sharing posts and engaging with the dev community.",
      link: "https://app.daily.dev/",
      color: "from-[#ce3df3] to-[#0a0a0a]",
    },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-8 overflow-hidden">
      {/* Badge */}
      <Badge className="gap-2">
        <PackagePlus className="h-4 w-4" />
        More
      </Badge>

      {/* Main Content */}
      <div className="flex flex-col gap-4 max-w-xl">
        <Heading>Writing & Community</Heading>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          I share my knowledge through technical articles on various platforms.
        </motion.p>
      </div>

      {/* Platform Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
          >
            <Link
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl glass hover-lift"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 border border-white/10">
                    <Newspaper className="w-5 h-5 text-[#667eea]" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white group-hover:text-gradient transition-all">
                    {platform.title}
                  </h3>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {platform.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MorePage;
