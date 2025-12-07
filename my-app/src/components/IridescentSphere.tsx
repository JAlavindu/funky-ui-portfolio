import React, { useRef, useState } from "react";
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
  const materialRef =
    useRef<React.ElementRef<typeof MeshDistortMaterial>>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const { clock, mouse } = state;

    if (meshRef.current) {
      // Continuous rotation mixed with mouse influence
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2 + mouse.y * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3 + mouse.x * 0.2;

      // Smooth scale transition
      const targetScale = hovered ? scale * 1.2 : scale;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }

    if (materialRef.current) {
      // Smoothly interpolate distortion
      materialRef.current.distort = THREE.MathUtils.lerp(
        materialRef.current.distort,
        hovered ? 0.6 : distort,
        0.05
      );
    }
  });

  return (
    <Sphere
      ref={meshRef}
      args={[1, 64, 64]}
      position={position}
      scale={scale}
      onPointerOver={() => {
        document.body.style.cursor = "pointer";
        setHovered(true);
      }}
      onPointerOut={() => {
        document.body.style.cursor = "auto";
        setHovered(false);
      }}
    >
      <MeshDistortMaterial
        ref={materialRef}
        color={color}
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0}
        metalness={0.1}
        roughness={0.1}
        distort={distort}
        speed={hovered ? 4 : speed}
      />
    </Sphere>
  );
};

export default IridescentSphere;
