import React from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const projects = [
  {
    title: "Project Alpha",
    description: "A futuristic dashboard with real-time data visualization.",
    tags: ["React", "D3.js", "Glassmorphism"],
  },
  {
    title: "Neon Commerce",
    description: "E-commerce platform with 3D product previews.",
    tags: ["Three.js", "Shopify", "WebGL"],
  },
  {
    title: "Cyber Chat",
    description: "Encrypted messaging app with a cyberpunk aesthetic.",
    tags: ["Socket.io", "Node.js", "Crypto"],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-container">
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <h2
          className="text-gradient"
          style={{
            fontSize: "2.5rem",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          Featured Projects
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <GlassCard hoverEffect={true} className="project-card">
                <div
                  style={{
                    height: "200px",
                    background: "rgba(0,0,0,0.3)",
                    borderRadius: "8px",
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "3rem" }}>🚀</span>
                </div>
                <h3 style={{ marginBottom: "0.5rem" }}>{project.title}</h3>
                <p style={{ marginBottom: "1rem" }}>{project.description}</p>
                <div
                  style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.8rem",
                        padding: "0.2rem 0.8rem",
                        background: "rgba(255,255,255,0.1)",
                        borderRadius: "20px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
