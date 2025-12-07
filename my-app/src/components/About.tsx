import React from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const About: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <GlassCard>
          <h2
            className="text-gradient"
            style={{ fontSize: "2.5rem", marginBottom: "2rem" }}
          >
            About Me
          </h2>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: "300px" }}>
              <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
                I'm a passionate developer who loves to build beautiful and
                functional websites. With a background in design and
                engineering, I bridge the gap between aesthetics and
                performance.
              </p>
              <p style={{ fontSize: "1.1rem" }}>
                I specialize in React, Three.js, and modern web technologies to
                create cutting-edge digital solutions.
              </p>
            </div>
            <div style={{ flex: "0 0 200px" }}>
              {/* Placeholder for image */}
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #00d9ff, #ff00ff)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                JD
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
};

export default About;
