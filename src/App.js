import "./App.scss";

import { Canvas } from "@react-three/fiber";
import Box from "./mesh/Box";

function App() {
  return (
    <>
      <Canvas
        shadows
        colorManagement
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight
          intensity={0.5}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          position={[0, 10, 0]}
        />
        <pointLight position={[-10, 0, 20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
        </group>

        <Box position={[0, 1, 0]} args={[3, 2, 1]} color="pink" />
        <Box position={[-2, 1, -5]} color="lightblue" />
        <Box position={[5, 1, -2]} color="lightblue" />
      </Canvas>
    </>
  );
}

export default App;
