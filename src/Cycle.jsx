import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationMixer, LoopRepeat } from "three";

function Cycle(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/cycle.glb");
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
       mixer.update(0.015); // Adjust the animation speed here
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
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.585}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Torus_0" position={[-1, 0, 0]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus001_2" position={[1, 0, 0]}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus002_4" position={[0, 1, 0]}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus003_6" position={[0, -1, 0]}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus004_8" position={[-0.707, 0.707, 0]}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus005_10" position={[0.707, -0.707, 0]}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus006_12" position={[0.707, 0.707, 0]}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus007_14" position={[-0.707, -0.707, 0]}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus008_16" position={[-0.924, 0.383, 0]}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus009_18" position={[0.924, -0.383, 0]}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus010_20" position={[0.383, 0.924, 0]}>
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus011_22" position={[-0.383, -0.924, 0]}>
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus012_24" position={[-0.383, 0.924, 0]}>
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus013_26" position={[0.383, -0.924, 0]}>
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus014_28" position={[0.924, 0.383, 0]}>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus015_30" position={[-0.924, -0.383, 0]}>
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus016_32" position={[-0.981, 0.195, 0]}>
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus017_34" position={[0.981, -0.195, 0]}>
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus018_36" position={[0.195, 0.981, 0]}>
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus019_38" position={[-0.195, -0.981, 0]}>
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus020_40" position={[-0.556, 0.831, 0]}>
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus021_42" position={[0.556, -0.831, 0]}>
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus022_44" position={[0.831, 0.556, 0]}>
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus023_46" position={[-0.831, -0.556, 0]}>
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus024_48" position={[-0.831, 0.556, 0]}>
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus025_50" position={[0.831, -0.556, 0]}>
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus026_52" position={[0.556, 0.831, 0]}>
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus027_54" position={[-0.556, -0.831, 0]}>
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus028_56" position={[-0.195, 0.981, 0]}>
                <mesh
                  name="Object_60"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus029_58" position={[0.195, -0.981, 0]}>
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus030_60" position={[0.981, 0.195, 0]}>
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Torus031_62" position={[-0.981, -0.195, 0]}>
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
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

useGLTF.preload("/cycle.glb");

export default Cycle;
