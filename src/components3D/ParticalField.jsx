import {
  useMemo,
  useRef,
} from "react";

import {
  useFrame,
} from "@react-three/fiber";


function ParticleField({
  count = 180,
}) {

  const pointsRef =
    useRef(null);


  /* ============================================================
     GENERATE PARTICLE POSITIONS
  ============================================================ */

  const positions = useMemo(() => {

    const values =
      new Float32Array(
        count * 3
      );


    for (
      let i = 0;
      i < count;
      i++
    ) {

      const i3 =
        i * 3;


      /* X */

      values[i3] =
        (Math.random() - 0.5) *
        9;


      /* Y */

      values[i3 + 1] =
        (Math.random() - 0.5) *
        6;


      /* Z */

      values[i3 + 2] =
        (Math.random() - 0.5) *
        5;

    }


    return values;

  }, [count]);


  /* ============================================================
     PARTICLE ANIMATION
  ============================================================ */

  useFrame(
    (
      state,
      delta
    ) => {

      if (!pointsRef.current) {
        return;
      }


      pointsRef.current.rotation.y +=
        delta * 0.006;


      pointsRef.current.rotation.x +=
        delta * 0.002;

    }
  );


  /* ============================================================
     RENDER
  ============================================================ */

  return (

    <points
      ref={pointsRef}
    >

      <bufferGeometry>

        <bufferAttribute
          attach="attributes-position"
          count={
            positions.length / 3
          }
          array={positions}
          itemSize={3}
        />

      </bufferGeometry>


      <pointsMaterial
        size={0.014}
        color="#94a3b8"
        transparent
        opacity={0.25}
        depthWrite={false}
        sizeAttenuation
      />

    </points>

  );
}


export default ParticleField;