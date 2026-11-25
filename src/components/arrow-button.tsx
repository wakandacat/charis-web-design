//animated arrow button with motion dependency

"use client";

import { motion, spring } from "motion/react";
import Link from "next/link";

export default function ArrowButton({ href, newTab, children, direction, onClick }: { href: string; newTab?: boolean; children: React.ReactNode; direction?: "left" | "right"; onClick?: () => void }) {

  const parentVariants = {
    default: { backgroundColor: "var(--charis-yellow)", scale: 1 },
    hover: { backgroundColor: "var(--charis-accent-green)", scale: 1.01}
  };

  const childVariantLeft = {
    default: { x: 0},
    hover: { x: 20} // triggers when parent is hovered
  };

  const childVariantRight = {
    default: { x: 0},
    hover: { x: -20} // triggers when parent is hovered
  };

    return (
   <motion.div
      className="button-style-2 relative z-100 text-(--charis-black)"
      initial="default"
      variants={parentVariants}
      whileHover="hover"
      transition={{ type: "spring" }}
    >
      <Link
        href={href}
        className="flex flex-row after:absolute after:-inset-0.5 after:content-['']"
        onClick={onClick}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {children}
        {direction === "left" ? (
          <motion.p className="px-2 text-(--charis-black)" variants={childVariantRight}>&#8592;</motion.p>
        ) : (
          <motion.p className="px-2 text-(--charis-black)" variants={childVariantLeft}>&#8594;</motion.p>
        )}
      </Link>
    </motion.div>
  );
    
}