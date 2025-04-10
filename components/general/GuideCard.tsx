import * as motion from "motion/react-client";
import React from "react";
import { twMerge } from "tailwind-merge";
interface GuideCardProps {
  readonly heading: string;
  readonly desc: string;
  readonly icon: React.ReactNode;
  readonly animationIndex: number;
}

export default function GuideCard({
  heading,
  desc,
  icon,
  animationIndex,
}: GuideCardProps) {
  const baseStyles = twMerge(
    " startup-card p-6 text-center shadow-sm rounded-lg border transition-colors duration-200 ease-in-out ",
    "bg-white dark:bg-background border-primary-400 dark:border-primary-700",
    "text-primary-600 dark:text-white",
    "hover:bg-primary-50 dark:hover:bg-primary-900 hover:border-primary-300 dark:hover:border-primary-600"
  );

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        delay: animationIndex * 0.2,
      }}
      className={baseStyles}
    >
      <div className="w-12 h-12 bg-primary-400/30 dark:bg-primary-500/90 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold   tracking-wide mb-2">{heading}</h3>
      <p className="text-slate-700 dark:text-primary-50/80">{desc}</p>
    </motion.div>
  );
}
