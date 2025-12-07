import React from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="section-container"
      style={{ alignItems: "center", textAlign: "center" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <GlassCard className="hero-card" hoverEffect={true}>
          <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>
            <span className="text-gradient">John Doe</span>
          </h1>
          <h2
            style={{ fontSize: "2rem", marginBottom: "2rem", fontWeight: 300 }}
          >
            Creative Developer & UI/UX Designer
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            Crafting immersive digital experiences with code and creativity.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "1rem 2rem",
              fontSize: "1.2rem",
              background: "linear-gradient(90deg, #00d9ff, #0066ff)",
              border: "none",
              borderRadius: "50px",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(0, 217, 255, 0.4)",
            }}
          >
            View Portfolio
          </motion.button>
        </GlassCard>
      </motion.div>
    </section>
  );
};

export default Hero;
