"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* ── Laptop ─────────────────────────────── */
function LaptopMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const screenGlowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.22) * 0.38;
    if (screenGlowRef.current) {
      const mat = screenGlowRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.35 + Math.sin(t * 1.2) * 0.18;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.55}>
      <group ref={groupRef} position={[0, 0, 0]} scale={0.88}>
        {/* Lid back */}
        <mesh position={[0, 0.72, -0.06]}>
          <boxGeometry args={[3.0, 2.0, 0.09]} />
          <meshStandardMaterial color="#050510" metalness={0.85} roughness={0.15} />
        </mesh>

        {/* Bezel */}
        <mesh position={[0, 0.72, -0.01]}>
          <boxGeometry args={[2.85, 1.85, 0.018]} />
          <meshStandardMaterial color="#020208" />
        </mesh>

        {/* Screen */}
        <mesh ref={screenGlowRef} position={[0, 0.72, 0.012]}>
          <boxGeometry args={[2.65, 1.68, 0.008]} />
          <meshStandardMaterial
            color="#02051a"
            emissive="#060e2e"
            emissiveIntensity={0.35}
          />
        </mesh>

        {/* Header bar */}
        <mesh position={[0, 1.46, 0.022]}>
          <boxGeometry args={[2.65, 0.13, 0.004]} />
          <meshStandardMaterial color="#6d28d9" emissive="#6d28d9" emissiveIntensity={2.2} />
        </mesh>

        {/* Window dots */}
        {[-1.1, -0.9, -0.7].map((x, i) => (
          <mesh key={i} position={[x, 1.46, 0.028]}>
            <sphereGeometry args={[0.038, 8, 8]} />
            <meshStandardMaterial
              color={["#7c3aed", "#4f46e5", "#1d4ed8"][i]}
              emissive={["#7c3aed", "#4f46e5", "#1d4ed8"][i]}
              emissiveIntensity={1.2}
            />
          </mesh>
        ))}

        {/* Hero headline block */}
        <mesh position={[-0.5, 1.1, 0.022]}>
          <boxGeometry args={[1.4, 0.1, 0.004]} />
          <meshStandardMaterial color="#f0f4ff" emissive="#f0f4ff" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[-0.7, 0.95, 0.022]}>
          <boxGeometry args={[1.0, 0.065, 0.004]} />
          <meshStandardMaterial color="#8899bb" emissive="#8899bb" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[-0.55, 0.83, 0.022]}>
          <boxGeometry args={[1.3, 0.065, 0.004]} />
          <meshStandardMaterial color="#8899bb" emissive="#8899bb" emissiveIntensity={0.3} />
        </mesh>

        {/* CTA button */}
        <mesh position={[-0.55, 0.65, 0.022]}>
          <boxGeometry args={[0.78, 0.19, 0.004]} />
          <meshStandardMaterial color="#6d28d9" emissive="#6d28d9" emissiveIntensity={2.5} />
        </mesh>

        {/* Right panel */}
        <mesh position={[0.86, 0.85, 0.022]}>
          <boxGeometry args={[0.68, 0.88, 0.004]} />
          <meshStandardMaterial color="#060a1e" emissive="#060a1e" emissiveIntensity={1} />
        </mesh>
        <mesh position={[0.86, 1.15, 0.028]}>
          <boxGeometry args={[0.4, 0.08, 0.004]} />
          <meshStandardMaterial color="#4f46e5" emissive="#4f46e5" emissiveIntensity={2.0} />
        </mesh>
        {[1.0, 0.88, 0.76].map((y, i) => (
          <mesh key={i} position={[0.86, y, 0.028]}>
            <boxGeometry args={[0.5, 0.055, 0.004]} />
            <meshStandardMaterial color="#334466" emissive="#334466" emissiveIntensity={0.4} />
          </mesh>
        ))}

        {/* Stat cards */}
        {[
          { pos: [-0.8, 0.3], color: "#6d28d9" },
          { pos: [0.0, 0.3], color: "#1d4ed8" },
        ].map(({ pos, color }, i) => (
          <group key={i}>
            <mesh position={[pos[0], pos[1], 0.022]}>
              <boxGeometry args={[0.55, 0.38, 0.004]} />
              <meshStandardMaterial color="#060a1e" emissive="#060a1e" emissiveIntensity={1} />
            </mesh>
            <mesh position={[pos[0], pos[1] + 0.1, 0.028]}>
              <boxGeometry args={[0.3, 0.08, 0.004]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.2} />
            </mesh>
            <mesh position={[pos[0], pos[1] - 0.06, 0.028]}>
              <boxGeometry args={[0.38, 0.05, 0.004]} />
              <meshStandardMaterial color="#334466" emissive="#334466" emissiveIntensity={0.3} />
            </mesh>
          </group>
        ))}

        {/* Base */}
        <mesh position={[0, -0.48, 0.3]} rotation={[-0.08, 0, 0]}>
          <boxGeometry args={[3.0, 0.09, 2.0]} />
          <meshStandardMaterial color="#050510" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Keyboard */}
        {[0, 1, 2, 3].map((row) =>
          Array.from({ length: 11 }, (_, col) => (
            <mesh
              key={`k-${row}-${col}`}
              position={[-1.25 + col * 0.24, -0.42, 0.0 + row * 0.22 - 0.2]}
              rotation={[-0.08, 0, 0]}
            >
              <boxGeometry args={[0.19, 0.022, 0.17]} />
              <meshStandardMaterial color="#0a0f1e" metalness={0.5} roughness={0.5} />
            </mesh>
          ))
        )}

        {/* Touchpad */}
        <mesh position={[0, -0.44, 0.7]} rotation={[-0.08, 0, 0]}>
          <boxGeometry args={[1.0, 0.022, 0.64]} />
          <meshStandardMaterial color="#080c1a" metalness={0.2} roughness={0.7} />
        </mesh>
      </group>
    </Float>
  );
}

/* ── Orbital rings ──────────────────────── */
function OrbitalRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.18;
    if (ring2Ref.current) ring2Ref.current.rotation.z = -t * 0.12;
    if (ring3Ref.current) ring3Ref.current.rotation.y = t * 0.25;
  });

  return (
    <>
      {/* Outer ring — violet */}
      <mesh ref={ring1Ref} rotation={[1.2, 0.3, 0]}>
        <torusGeometry args={[3.4, 0.018, 8, 120]} />
        <meshStandardMaterial
          color="#6d28d9"
          emissive="#6d28d9"
          emissiveIntensity={1.4}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Middle ring — blue */}
      <mesh ref={ring2Ref} rotation={[0.7, 0.5, 0]}>
        <torusGeometry args={[2.6, 0.012, 8, 100]} />
        <meshStandardMaterial
          color="#1d4ed8"
          emissive="#1d4ed8"
          emissiveIntensity={1.2}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Inner ring — indigo */}
      <mesh ref={ring3Ref} rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[2.0, 0.008, 8, 80]} />
        <meshStandardMaterial
          color="#4f46e5"
          emissive="#4f46e5"
          emissiveIntensity={0.6}
          transparent
          opacity={0.18}
        />
      </mesh>
    </>
  );
}

/* ── Cosmic dust / stars ────────────────── */
function CosmicDust() {
  const positions = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < 400; i++) {
      const r = 3 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }
    return new Float32Array(arr);
  }, []);

  const sizes = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < 400; i++) arr.push(Math.random() * 0.04 + 0.01);
    return new Float32Array(arr);
  }, []);

  const geoRef = useRef<THREE.BufferGeometry>(null);

  useFrame((state) => {
    if (!geoRef.current) return;
    const pos = geoRef.current.attributes.position.array as Float32Array;
    const t = state.clock.elapsedTime * 0.2;
    for (let i = 0; i < pos.length; i += 3) {
      pos[i + 1] += Math.sin(t + i) * 0.0008;
    }
    geoRef.current.attributes.position.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry ref={geoRef}>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#a78bfa"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

/* ── Orbiting dot ───────────────────────── */
function OrbitingDot() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.x = Math.cos(t * 0.4) * 3.4;
    ref.current.position.z = Math.sin(t * 0.4) * 3.4 * 0.5;
    ref.current.position.y = Math.sin(t * 0.7) * 0.6;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.07, 12, 12]} />
      <meshStandardMaterial color="#6d28d9" emissive="#6d28d9" emissiveIntensity={4} />
    </mesh>
  );
}

function OrbitingDotBlue() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime + 2.1;
    ref.current.position.x = Math.cos(-t * 0.3) * 2.6;
    ref.current.position.z = Math.sin(-t * 0.3) * 2.6 * 0.6;
    ref.current.position.y = Math.cos(t * 0.5) * 0.8;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.055, 12, 12]} />
      <meshStandardMaterial color="#1d4ed8" emissive="#1d4ed8" emissiveIntensity={4} />
    </mesh>
  );
}

/* ── Scene export ───────────────────────── */
export function FloatingScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 5.8], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.08} />
      <pointLight position={[6, 5, 4]} intensity={3} color="#6d28d9" />
      <pointLight position={[-5, -3, 3]} intensity={2} color="#1d4ed8" />
      <pointLight position={[0, 8, 0]} intensity={0.6} color="#4f46e5" />
      <pointLight position={[0, 0, 6]} intensity={0.5} color="#ffffff" />

      <LaptopMesh />
      <OrbitalRings />
      <CosmicDust />
      <OrbitingDot />
      <OrbitingDotBlue />
    </Canvas>
  );
}
