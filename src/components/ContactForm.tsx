"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setIsSuccess(false), 3000);
  };

  const inputClasses = cn(
    "w-full px-4 py-3 rounded-xl",
    "bg-white/5 border border-white/10",
    "text-white placeholder-gray-500",
    "focus:outline-none focus:border-[#667eea]/50 focus:ring-2 focus:ring-[#667eea]/20",
    "transition-all duration-300"
  );

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      onSubmit={handleSubmit}
      className="w-full max-w-lg p-8 rounded-2xl glass border-gradient"
    >
      <div className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            className={inputClasses}
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            className={inputClasses}
            required
          />
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Your message..."
            className={cn(inputClasses, "resize-none")}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={cn(
            "w-full py-4 rounded-xl font-semibold text-white",
            "bg-gradient-to-r from-[#667eea] to-[#764ba2]",
            "hover:shadow-lg hover:shadow-purple-500/25",
            "focus:outline-none focus:ring-2 focus:ring-[#667eea]/50",
            "transition-all duration-300",
            "disabled:opacity-70 disabled:cursor-not-allowed",
            "flex items-center justify-center gap-2"
          )}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Message Sent!
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
