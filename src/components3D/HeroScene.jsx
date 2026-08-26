import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  PerspectiveCamera,
  Float,
} from "@react-three/drei";

import { useRef } from "react";

import FloatingCube from "./FloatingCube";
import ParticleField from "./ParticalField";



import reactLogo from "../assets/tech/React.png";
import javascriptLogo from "../assets/tech/JavaScript.png";
import pythonLogo from "../assets/tech/Python.png";
import htmlLogo from "../assets/tech/HTML5.png";
import cssLogo from "../assets/tech/CSS3.png";
import nodejsLogo from "../assets/tech/node-js.png";
/* ==========================================================================
   SCENE CONTENT
========================================================================== */

function SceneContent() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    /*
     * ------------------------------------
     * SMOOTH SCENE ROTATION
     * ------------------------------------
     */

    const targetRotationY =
      mouseX * 0.14;

    const targetRotationX =
      -mouseY * 0.08;

    groupRef.current.rotation.y +=
      (targetRotationY -
        groupRef.current.rotation.y) *
      0.025;

    groupRef.current.rotation.x +=
      (targetRotationX -
        groupRef.current.rotation.x) *
      0.025;

    /*
     * ------------------------------------
     * SUBTLE SCENE MOVEMENT
     * ------------------------------------
     */

    const targetX =
      mouseX * 0.12;

    const targetY =
      mouseY * 0.08;

    groupRef.current.position.x +=
      (targetX -
        groupRef.current.position.x) *
      0.02;

    groupRef.current.position.y +=
      (targetY -
        groupRef.current.position.y) *
      0.02;
  });

  return (
    <>
      {/* ================================================================
          CAMERA
      ================================================================= */}

      <PerspectiveCamera
        makeDefault
        position={[0, 0, 7]}
        fov={42}
      />


      {/* ================================================================
          LIGHTING
      ================================================================= */}

      <ambientLight
        intensity={0.4}
      />

      <directionalLight
        position={[4, 5, 6]}
        intensity={1.4}
        color="#ffffff"
      />

      <pointLight
        position={[-3, 2, 2]}
        intensity={4}
        distance={7}
        color="#3b82f6"
      />

      <pointLight
        position={[3, -2, 1]}
        intensity={3}
        distance={6}
        color="#8b5cf6"
      />


      {/* ================================================================
          PARTICLES
      ================================================================= */}

      <ParticleField count={180} />


      {/* ================================================================
          TECHNOLOGY LOGOS
      ================================================================= */}

      <group ref={groupRef}>

        {/* ============================================================
            REACT — MAIN LOGO
        ============================================================= */}

        <Float
          speed={1.05}
          rotationIntensity={0.3}
          floatIntensity={0.45}
        >
          <FloatingCube
            position={[
              0.65,
              0.45,
              0,
            ]}
            size={1.25}
            speed={0.9}
            rotationSpeed={0.7}
            color="#61dafb"
            logo={reactLogo}
            name="React"
          />
        </Float>


        {/* ============================================================
            JAVASCRIPT
        ============================================================= */}

        <Float
          speed={1.3}
          rotationIntensity={0.4}
          floatIntensity={0.6}
        >
          <FloatingCube
            position={[
              -0.95,
              1.35,
              -0.5,
            ]}
            size={0.55}
            speed={1.15}
            rotationSpeed={1}
            color="#f7df1e"
            logo={javascriptLogo}
            name="JavaScript"
          />
        </Float>


        {/* ============================================================
            PYTHON
        ============================================================= */}

        <Float
          speed={1.2}
          rotationIntensity={0.4}
          floatIntensity={0.55}
        >
          <FloatingCube
            position={[
              2.15,
              -0.25,
              -0.8,
            ]}
            size={0.68}
            speed={1}
            rotationSpeed={0.9}
            color="#3776ab"
            logo={pythonLogo}
            name="Python"
          />
        </Float>


        {/* ============================================================
            HTML
        ============================================================= */}

        <Float
          speed={1.45}
          rotationIntensity={0.5}
          floatIntensity={0.7}
        >
          <FloatingCube
            position={[
              2.05,
              1.55,
              -1.4,
            ]}
            size={0.40}
            speed={1.35}
            rotationSpeed={1.3}
            color="#e34f26"
            logo={htmlLogo}
            name="HTML"
          />
        </Float>


        {/* ============================================================
            CSS
        ============================================================= */}

        <Float
          speed={1.35}
          rotationIntensity={0.45}
          floatIntensity={0.65}
        >
          <FloatingCube
            position={[
              -1.55,
              -0.85,
              -0.6,
            ]}
            size={0.46}
            speed={1.2}
            rotationSpeed={1.2}
            color="#1572b6"
            logo={cssLogo}
            name="CSS"
          />
        </Float>

        {/* ============================================================
    NODE.JS
============================================================= */}

<Float
  speed={1.15}
  rotationIntensity={0.4}
  floatIntensity={0.6}
>
  <FloatingCube
    position={[1.15, -1.15, -0.5]}
    size={0.52}
    speed={1.1}
    rotationSpeed={1.05}
    color="#68a063"
    logo={nodejsLogo}
    name="Node.js"
  />
</Float>

      </group>
    </>
  );
}


/* ==========================================================================
   HERO CANVAS
========================================================================== */

function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference:
          "high-performance",
      }}
      frameloop="always"
    >
      <SceneContent />
    </Canvas>
  );
}

export default HeroScene;