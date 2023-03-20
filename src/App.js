import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';

function App() {
  return (
    <Canvas>
      <ambientLight />
      <Box position={[0, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
