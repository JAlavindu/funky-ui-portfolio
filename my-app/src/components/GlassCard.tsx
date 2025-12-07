import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hoverEffect = false,
}) => {
  return (
    <motion.div
      className={`glass-panel ${className}`}
      whileHover={
        hoverEffect
          ? { scale: 1.02, boxShadow: "0 8px 32px rgba(0, 217, 255, 0.2)" }
          : {}
      }
      transition={{ type: "spring", stiffness: 300 }}
      style={{ padding: "2rem" }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
