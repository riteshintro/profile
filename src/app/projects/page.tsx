"use client";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const ProjectsPage = () => {
  const Projects = [
    {
      title: "FriendZ - Social Media Platform",
      description:
        "A modern social media app built with cutting-edge technologies. Features include real-time posts, likes, comments, and user interactions with Redis caching.",
      tags: ["Redis", "Auth.js", "TypeScript", "Next.js"],
      link: "#",
    },
    {
      title: "itZmyLink - Link in Bio",
      description:
        "A personalized platform to showcase all your social media profiles in one beautiful page. Simple, elegant, and effective.",
      tags: ["Next.js", "TypeScript", "Shadcn UI"],
      link: "#",
    },
    {
      title: "GitEstimate - GitHub Worth Generator",
      description:
        "A fun tool to generate your GitHub profile estimate worth card by simply entering your username. Analyze your contributions!",
      tags: ["Next.js", "TypeScript", "Shadcn UI"],
      link: "#",
    },
    {
      title: "Mixcn-ui - Component Library",
      description:
        "A collection of reusable Next.js components with modern design. Built with accessibility and developer experience in mind.",
      tags: ["Next.js", "Shadcn UI", "NPX", "Library"],
      link: "#",
    },
    {
      title: "CrouMaker - Carousel Maker",
      description:
        "Create stunning carousels with built-in templates. Edit and download in any format including PDF and images.",
      tags: ["Next.js", "jsPDF", "html2canvas", "Shadcn UI"],
      link: "#",
    },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-8 overflow-hidden">
      {/* Badge */}
      <Badge className="gap-2">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>

      {/* Main Content */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <Heading>Featured Projects</Heading>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          A curated collection of my creative endeavors and technical projects.
          Each piece represents innovation, problem-solving, and continuous learning.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="w-full flex flex-wrap gap-4">
        {Projects.map((project, index) => (
          <ProjectCards key={index} value={project} num={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
