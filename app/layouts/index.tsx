import React from "react";
import { motion } from "framer-motion";

interface LayoutChildren {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutChildren) {
  return (
    <motion.div
      initial={{ translateY: 50, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8"
    >
      {children}
    </motion.div>
  );
}
