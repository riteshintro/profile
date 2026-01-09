"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "border-white/10 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10",
        gradient:
          "border-transparent bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-lg shadow-purple-500/20",
        outline:
          "border-white/20 bg-transparent text-gray-300 hover:bg-white/5",
        glass:
          "border-white/10 bg-white/5 backdrop-blur-md text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={cn(badgeVariants({ variant }), className)} {...props}>
        {children}
      </div>
    </motion.div>
  );
}

export { Badge, badgeVariants };
