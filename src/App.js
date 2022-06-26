import "./App.scss";

import { Canvas } from "@react-three/fiber";
import Box from "./mesh/Box";

function App() {
  return (
    <>
      <Canvas>
        <Box />
      </Canvas>
    </>
  );
}

export default App;
