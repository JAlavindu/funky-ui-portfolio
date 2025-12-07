import React from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ maxWidth: "600px", margin: "0 auto", width: "100%" }}
      >
        <GlassCard>
          <h2
            className="text-gradient"
            style={{
              fontSize: "2.5rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Get In Touch
          </h2>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <input
              type="text"
              placeholder="Name"
              style={{
                padding: "1rem",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                color: "white",
                outline: "none",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              style={{
                padding: "1rem",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                color: "white",
                outline: "none",
              }}
            />
            <textarea
              placeholder="Message"
              rows={5}
              style={{
                padding: "1rem",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                color: "white",
                outline: "none",
                resize: "vertical",
              }}
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: "1rem",
                background: "linear-gradient(90deg, #00d9ff, #0066ff)",
                border: "none",
                borderRadius: "8px",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "1.1rem",
              }}
            >
              Send Message
            </motion.button>
          </form>
        </GlassCard>
      </motion.div>
    </section>
  );
};

export default Contact;
