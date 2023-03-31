/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshBasicMaterial } from "three";
import { useFrame } from "@react-three/fiber";

export default function GlobeModel(props) {
  const { nodes, materials } = useGLTF("./assets/models/globe.gltf");

  const [rotation, setRotation] = useState([0, 0, 0]);

  useFrame(() => {
    setRotation([rotation[0], rotation[1] + 0.0025, rotation[2]]);
  });

  return (
    <group {...props} rotation={rotation} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flatEarth_lands.geometry}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial color="green"/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flatEarth_sea.geometry}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial color="blue"/>
      </mesh>
    </group>
  );
}

useGLTF.preload("./assets/models/globe.gltf");