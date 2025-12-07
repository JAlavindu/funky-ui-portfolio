import React from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const skills = [
  { name: "React", level: 95 },
  { name: "Three.js", level: 85 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "UI/UX Design", level: 85 },
  { name: "WebGL", level: 75 },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-container">
      <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
        <h2
          className="text-gradient"
          style={{
            fontSize: "2.5rem",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          Skills & Expertise
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <GlassCard hoverEffect={true}>
                <h3 style={{ marginBottom: "1rem" }}>{skill.name}</h3>
                <div
                  style={{
                    width: "100%",
                    height: "10px",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{
                      height: "100%",
                      background: "linear-gradient(90deg, #00d9ff, #ff00ff)",
                    }}
                  />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
