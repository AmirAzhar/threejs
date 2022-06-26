import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { MeshWobbleMaterial } from "@react-three/drei/core";

const Box = ({ position, args, color, speed }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={1}
      />
    </mesh>
  );
};

export default Box;
