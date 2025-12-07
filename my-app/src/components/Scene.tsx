import React from "react";
import { Environment, Float, Stars } from "@react-three/drei";
import IridescentSphere from "./IridescentSphere";

const Scene: React.FC = () => {
  return (
    <>
      <color attach="background" args={["#0a192f"]} />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <IridescentSphere position={[0, 0, -5]} scale={2} color="#00d9ff" />
      </Float>

      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <IridescentSphere
          position={[-4, 2, -8]}
          scale={1.5}
          color="#ff00ff"
          distort={0.3}
        />
      </Float>

      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1}>
        <IridescentSphere
          position={[4, -2, -6]}
          scale={1.2}
          color="#8b00ff"
          distort={0.5}
        />
      </Float>

      {/* Background particles or smaller spheres */}
      {Array.from({ length: 10 }).map((_, i) => (
        <Float
          key={i}
          speed={1 + Math.random()}
          rotationIntensity={2}
          floatIntensity={2}
        >
          <IridescentSphere
            position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20,
              -10 - Math.random() * 10,
            ]}
            scale={0.2 + Math.random() * 0.5}
            color={Math.random() > 0.5 ? "#00d9ff" : "#ff00ff"}
            distort={0}
          />
        </Float>
      ))}
    </>
  );
};

export default Scene;
