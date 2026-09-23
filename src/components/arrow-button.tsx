//animated arrow button with motion dependency

"use client";

import { motion, spring } from "motion/react";
import Link from "next/link";

export default function ArrowButton({ href, children }: { href: string; children: React.ReactNode }) {

  const parentVariants = {
    default: { backgroundColor: "var(--charis-yellow)", scale: 1 },
    hover: { backgroundColor: "var(--charis-accent-green)", scale: 1.01}
  };

  const childVariants = {
    default: { x: 0},
    hover: { x: 20} // triggers when parent is hovered
  };

    return (
    <motion.div className="button-style-2 text-(--charis-black)" initial="default" variants={parentVariants}
      whileHover="hover" transition={{type: spring}}>
      <Link href={href} className="flex flex-row">
        {children}
        <motion.p className="px-2 text-(--charis-black)" variants={childVariants}>&#8594;</motion.p>
      </Link>
    </motion.div>
  );
    
}