import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationMixer, LoopRepeat } from "three";

 function LineOrbit(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/LineOrbit.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
     const mixer = new AnimationMixer(group.current);
     // Find the animation action by name or index
     const animationAction = mixer.clipAction(animations[0]); // Replace with the correct animation index or name
     // Set the desired loop behavior
     animationAction.loop = LoopRepeat;
     // Play the animation
     animationAction.play();
 
     const animate = () => {
       mixer.update(0.010); // Adjust the animation speed here
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
              <group name="Torus001_0">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus003_1">
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Cube002_4" scale={1.668}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.hide}
                />
                <group name="Cube_2" scale={0.599}>
                  <mesh
                    name="Object_12"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials.hide}
                  />
                </group>
                <group
                  name="Cube001_3"
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={0.599}
                >
                  <mesh
                    name="Object_14"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_14.geometry}
                    material={materials.hide}
                  />
                </group>
              </group>
              <group name="Torus002_5">
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_17"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_17.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus004_6">
                <mesh
                  name="Object_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cube005_9"
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.668}
              >
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.hide}
                />
                <group name="Cube003_7" scale={0.599}>
                  <mesh
                    name="Object_24"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_24.geometry}
                    material={materials.hide}
                  />
                </group>
                <group
                  name="Cube004_8"
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={0.599}
                >
                  <mesh
                    name="Object_26"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_26.geometry}
                    material={materials.hide}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/LineOrbit.glb");

export default LineOrbit;