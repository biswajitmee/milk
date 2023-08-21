import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

 function BlackSoul(props) {
  const { nodes, materials } = useGLTF("/black_soul_stone.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.075, 0.266, 0.186]}
        rotation={[-1.262, 0.009, 0.084]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box001__0.geometry}
            material={materials["Scene_-_Root"]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/black_soul_stone.glb");
export default BlackSoul;