"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Line, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function CameraRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * 0.12,
      0.04,
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointer.y * 0.06 + Math.sin(clock.elapsedTime * 0.35) * 0.015,
      0.04,
    );
  });

  return <group ref={group}>{children}</group>;
}

function TrackLine() {
  const points = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-3.9, -1.2, -2.4),
        new THREE.Vector3(-2.2, -0.25, -1.4),
        new THREE.Vector3(-0.45, -0.85, -0.3),
        new THREE.Vector3(1.35, -0.12, 0.25),
        new THREE.Vector3(3.4, -0.9, -0.85),
        new THREE.Vector3(2.5, -1.7, -2.55),
        new THREE.Vector3(0.35, -1.45, -3.05),
        new THREE.Vector3(-2.7, -1.75, -2.75),
        new THREE.Vector3(-3.9, -1.2, -2.4),
      ],
      true,
      "catmullrom",
      0.45,
    );

    return curve.getPoints(140);
  }, []);

  return (
    <group rotation={[0.24, 0, 0]}>
      <Line points={points} color="#f03d3d" lineWidth={4} transparent opacity={0.9} />
      <Line points={points} color="#9ffcff" lineWidth={1.25} transparent opacity={0.7} />
    </group>
  );
}

function TelemetryRings() {
  const ring = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ring.current) return;
    ring.current.rotation.z = clock.elapsedTime * 0.16;
    ring.current.rotation.y = Math.sin(clock.elapsedTime * 0.35) * 0.08;
  });

  return (
    <group ref={ring} position={[0.25, 0.25, -1.25]} rotation={[1.12, 0.18, 0.1]}>
      {[1.1, 1.65, 2.25].map((radius, index) => (
        <mesh key={radius} rotation={[0, 0, index * 0.36]}>
          <torusGeometry args={[radius, 0.012, 8, 140, Math.PI * (1.35 + index * 0.14)]} />
          <meshStandardMaterial
            color={index === 1 ? "#f03d3d" : "#9ffcff"}
            emissive={index === 1 ? "#f03d3d" : "#9ffcff"}
            emissiveIntensity={1.35}
            metalness={0.8}
            roughness={0.24}
          />
        </mesh>
      ))}
    </group>
  );
}

function CockpitPanels() {
  const bars = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!bars.current) return;
    bars.current.children.forEach((child, index) => {
      child.scale.y = 0.45 + Math.abs(Math.sin(clock.elapsedTime * 1.6 + index)) * 1.15;
    });
  });

  return (
    <group position={[0, -1.55, -0.1]} rotation={[0.18, 0, 0]}>
      <mesh position={[0, -0.08, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[4.2, 0.24, 1.35]} />
        <meshStandardMaterial color="#101112" metalness={0.65} roughness={0.38} />
      </mesh>
      <mesh position={[0, 0.12, 0.46]} rotation={[-0.22, 0, 0]}>
        <boxGeometry args={[3.35, 0.08, 0.18]} />
        <meshStandardMaterial color="#f03d3d" emissive="#f03d3d" emissiveIntensity={1.2} metalness={0.5} />
      </mesh>
      <group ref={bars} position={[-1.1, 0.2, 0.05]}>
        {Array.from({ length: 10 }).map((_, index) => (
          <mesh key={index} position={[index * 0.24, 0, 0]}>
            <boxGeometry args={[0.08, 0.22, 0.08]} />
            <meshStandardMaterial
              color={index % 3 === 0 ? "#f03d3d" : "#9ffcff"}
              emissive={index % 3 === 0 ? "#f03d3d" : "#9ffcff"}
              emissiveIntensity={0.95}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function FloatingModules() {
  return (
    <group>
      {[
        { position: [-2.85, 0.7, -1.4], color: "#9ffcff" },
        { position: [2.65, 1.0, -1.65], color: "#f03d3d" },
        { position: [0.05, 1.75, -1.95], color: "#f6f2e8" },
      ].map((module, index) => (
        <Float key={index} speed={1.15 + index * 0.22} rotationIntensity={0.18} floatIntensity={0.35}>
          <group position={module.position as [number, number, number]} rotation={[0.12, index % 2 ? -0.25 : 0.25, 0]}>
            <mesh>
              <boxGeometry args={[0.98, 0.38, 0.06]} />
              <meshStandardMaterial
                color="#101112"
                emissive="#111111"
                metalness={0.75}
                roughness={0.22}
              />
            </mesh>
            <mesh position={[-0.22, 0, 0.045]}>
              <boxGeometry args={[0.1, 0.18, 0.012]} />
              <meshStandardMaterial color={module.color} emissive={module.color} emissiveIntensity={1.4} />
            </mesh>
            <mesh position={[0.08, 0, 0.045]}>
              <boxGeometry args={[0.34, 0.08, 0.012]} />
              <meshStandardMaterial color={module.color} emissive={module.color} emissiveIntensity={1.15} />
            </mesh>
          </group>
        </Float>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={0.75} />
      <spotLight position={[2.5, 4, 4]} angle={0.36} penumbra={0.75} intensity={42} color="#f4f0e8" />
      <pointLight position={[-3, 1.2, 1.4]} intensity={7} color="#f03d3d" />
      <pointLight position={[3, 1.6, 1.8]} intensity={5} color="#9ffcff" />
      <PerspectiveCamera makeDefault position={[0, 0.4, 5.2]} fov={43} />
      <CameraRig>
        <TelemetryRings />
        <TrackLine />
        <CockpitPanels />
        <FloatingModules />
        <Sparkles count={75} scale={[5.5, 2.8, 2.8]} size={1.4} speed={0.35} color="#9ffcff" opacity={0.45} />
      </CameraRig>
    </>
  );
}

export default function F1CockpitScene() {
  return (
    <Canvas
      className="h-full w-full"
      dpr={[1, 1.85]}
      gl={{ antialias: true, alpha: false, preserveDrawingBuffer: true }}
      camera={{ position: [0, 0.4, 5.2] }}
    >
      <Scene />
    </Canvas>
  );
}
