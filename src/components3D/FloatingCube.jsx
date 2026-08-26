import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

function FloatingCube({
  position = [0, 0, 0],
  size = 1,
  speed = 1,
  rotationSpeed = 1,
  color = "#3b82f6",
  logo = null,
  name = "",
}) {
  const groupRef = useRef();
  const cubeRef = useRef();
  const glowRef = useRef();

  const [hovered, setHovered] = useState(false);

  /*
   * Load logo texture
   */
  const texture = logo ? useTexture(logo) : null;

  /*
   * Animation
   */
  useFrame((state, delta) => {
    if (!groupRef.current || !cubeRef.current) {
      return;
    }

    const time = state.clock.elapsedTime;

    /*
     * -------------------------
     * FLOATING
     * -------------------------
     */

    const targetY =
      position[1] +
      Math.sin(
        time * speed + position[0] * 2
      ) *
        0.20;

    groupRef.current.position.y +=
      (targetY - groupRef.current.position.y) *
      0.045;

    /*
     * -------------------------
     * ROTATION
     * -------------------------
     */

    const rotationMultiplier = hovered
      ? 1.8
      : 1;

    cubeRef.current.rotation.x +=
      delta *
      0.18 *
      rotationSpeed *
      rotationMultiplier;

    cubeRef.current.rotation.y +=
      delta *
      0.32 *
      rotationSpeed *
      rotationMultiplier;

    /*
     * -------------------------
     * HOVER SCALE
     * -------------------------
     */

    const targetScale = hovered
      ? 1.15
      : 1;

    cubeRef.current.scale.x +=
      (targetScale - cubeRef.current.scale.x) *
      0.08;

    cubeRef.current.scale.y +=
      (targetScale - cubeRef.current.scale.y) *
      0.08;

    cubeRef.current.scale.z +=
      (targetScale - cubeRef.current.scale.z) *
      0.08;

    /*
     * -------------------------
     * GLOW
     * -------------------------
     */

    if (glowRef.current) {
      const pulse =
        1 +
        Math.sin(time * 2) *
          0.04;

      glowRef.current.scale.set(
        pulse,
        pulse,
        pulse
      );

      glowRef.current.material.opacity =
        hovered
          ? 0.14
          : 0.045;
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
    >
      {/* =========================
          OUTER GLOW
      ========================= */}

      <mesh ref={glowRef}>
        <boxGeometry
          args={[
            size * 1.18,
            size * 1.18,
            size * 1.18,
          ]}
        />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.045}
          depthWrite={false}
        />
      </mesh>

      {/* =========================
          TECHNOLOGY LOGO OBJECT
      ========================= */}

      <mesh
        ref={cubeRef}
        onPointerEnter={() => {
          setHovered(true);

          document.body.style.cursor =
            "pointer";
        }}
        onPointerLeave={() => {
          setHovered(false);

          document.body.style.cursor =
            "default";
        }}
      >
        <boxGeometry
          args={[
            size,
            size,
            size,
          ]}
        />

        <meshStandardMaterial
          color="#ffffff"
          map={texture || null}
          roughness={0.28}
          metalness={0.08}
          transparent
        />
      </mesh>
    </group>
  );
}

export default FloatingCube;