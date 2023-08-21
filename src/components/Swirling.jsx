 

import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationMixer, LoopRepeat } from "three";
 function Swirling(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/swirling.glb");
 


  
  useEffect(() => {
     const mixer = new AnimationMixer(group.current);
     // Find the animation action by name or index
     const animationAction = mixer.clipAction(animations[0]); // Replace with the correct animation index or name
     // Set the desired loop behavior
     animationAction.loop = LoopRepeat;
     // Play the animation
     animationAction.play();
 
     const animate = () => {
       mixer.update(0.050); // Adjust the animation speed here
       requestAnimationFrame(animate);
     };
 
     animate();
 
     return () => {
       mixer.stopAllAction();
     };
   }, [animations]);



  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sphere_0" scale={1.127}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.base}
                />
              </group>
              <group name="Sphere001_1" scale={1.227}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.material}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/swirling.glb");

export default Swirling;