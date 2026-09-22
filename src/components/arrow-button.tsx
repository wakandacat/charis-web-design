//animated arrow button with motion dependency

"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function ArrowButton({ href, children }: { href: string; children: React.ReactNode }) {

    return (
    // <motion.div
    //   whileHover={{ scale: 1.03 }}
    //   whileTap={{ scale: 0.97 }}
    //   transition={{ type: "spring", stiffness: 400, damping: 17 }}
    // >

// initial={{ x: 0 }}
//       animate={{ x: 100 }}
//       transition={{ duration: 0.8 }}

//animate the arrow moving to the right and the whole thing changing colour

    // className="button-style"
    <motion.div whileHover={{color: "charis-green"}} whileTap={{color: "charis-green"}} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
      <Link href={href} >
        {children}
      </Link>
    </motion.div>
  );
    
}