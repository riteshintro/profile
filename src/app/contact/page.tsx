"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/riteshintro", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/riteshintro", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/riteshintro", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/riteshintro", label: "Instagram" },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-8 overflow-hidden">
      {/* Badge */}
      <Badge className="gap-2">
        <Phone className="h-4 w-4" />
        Contact
      </Badge>

      {/* Main Content */}
      <div className="flex flex-col gap-4 max-w-xl">
        <Heading>Get In Touch</Heading>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          Have a project in mind or want to collaborate? Feel free to reach out!
        </motion.p>
      </div>

      {/* Contact Section */}
      <div className="w-full flex flex-col lg:flex-row gap-8">
        {/* Contact Form */}
        <div className="flex-1">
          <ContactForm />
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full lg:w-80 space-y-6"
        >
          {/* Info Cards */}
          <div className="p-6 rounded-2xl glass space-y-4">
            <h3 className="text-lg font-heading font-semibold text-white mb-4">
              Contact Info
            </h3>

            <div className="flex items-center gap-3 text-gray-300">
              <div className="p-2 rounded-lg bg-[#667eea]/20">
                <Mail className="w-4 h-4 text-[#667eea]" />
              </div>
              <span className="text-sm">riteshintro@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <div className="p-2 rounded-lg bg-[#00d4ff]/20">
                <MapPin className="w-4 h-4 text-[#00d4ff]" />
              </div>
              <span className="text-sm">Jaunpur, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-6 rounded-2xl glass">
            <h3 className="text-lg font-heading font-semibold text-white mb-4">
              Follow Me
            </h3>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
