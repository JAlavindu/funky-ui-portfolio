import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface IridescentSphereProps {
  position?: [number, number, number];
  scale?: number;
  distort?: number;
  speed?: number;
  color?: string;
}

const IridescentSphere: React.FC<IridescentSphereProps> = ({
  position = [0, 0, 0],
  scale = 1,
  distort = 0.4,
  speed = 2,
  color = "#ffffff",
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0}
        metalness={0.1}
        roughness={0.1}
        distort={distort}
        speed={speed}
      />
      {/* We can add a physical material with iridescence if we want more control, 
          but MeshDistortMaterial gives that nice organic blob feel. 
          To get true iridescence, we might need a custom shader or MeshPhysicalMaterial.
          Let's try to mix in some iridescence properties if possible, or stick to the blob for now.
      */}
    </Sphere>
  );
};

export default IridescentSphere;
