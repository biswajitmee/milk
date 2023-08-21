import React, { useRef,useEffect  } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationMixer, LoopRepeat } from "three";


function BackgroundNew(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/background-new.glb");
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
      mixer.update(0.020); // Adjust the animation speed here
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      mixer.stopAllAction();
    };
  }, [animations]);












  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Cube001_1"
                position={[-1, -1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube002_2"
                position={[1, -1, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube003_3"
                position={[1, 1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube004_4" scale={3}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube005_5"
                position={[-1, 1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube006_6"
                position={[-1, -1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube007_7"
                position={[1, -1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube008_8"
                position={[1, 1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube009_9" position={[0, 0, -2]} scale={3}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube010_10"
                position={[-1, 1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube011_11"
                position={[-1, -1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube012_12"
                position={[1, -1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube013_13"
                position={[1, 1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube014_14" position={[0, 0, -4]} scale={3}>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube015_15"
                position={[-1, 1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube016_16"
                position={[-1, -1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube017_17"
                position={[1, -1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube018_18"
                position={[1, 1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube019_19" position={[0, 0, -6]} scale={3}>
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube020_20"
                position={[-1, 1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube021_21"
                position={[-1, -1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube022_22"
                position={[1, -1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube023_23"
                position={[1, 1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube024_24" position={[0, 0, -8]} scale={3}>
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube025_25"
                position={[-1, 1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube026_26"
                position={[-1, -1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube027_27"
                position={[1, -1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube028_28"
                position={[1, 1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_60"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube029_29" position={[0, 0, -10]} scale={3}>
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube030_30"
                position={[-1, 1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube031_31"
                position={[-1, -1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube032_32"
                position={[1, -1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube033_33"
                position={[1, 1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube034_34" position={[0, 0, -12]} scale={3}>
                <mesh
                  name="Object_72"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube035_35"
                position={[-1, 1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_74"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_74.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube036_36"
                position={[-1, -1, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_76"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_76.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube037_37"
                position={[1, -1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_78"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_78.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube038_38"
                position={[1, 1, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_80"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_80.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube039_39" position={[0, 0, -14]} scale={3}>
                <mesh
                  name="Object_82"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_82.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube040_40"
                position={[-1, 1, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_84"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_84.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube041_41"
                position={[-1, -1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_86"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_86.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube042_42"
                position={[1, -1, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_88"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_88.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube043_43"
                position={[1, 1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_90"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_90.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube044_44" scale={3}>
                <mesh
                  name="Object_92"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_92.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube045_45"
                position={[-1, 1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_94"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_94.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube046_46"
                position={[-1, -1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_96"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_96.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube047_47"
                position={[1, -1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_98"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_98.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube048_48"
                position={[1, 1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_100"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_100.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube049_49" position={[0, 0, -2]} scale={3}>
                <mesh
                  name="Object_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube050_50"
                position={[-1, 1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_104"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube051_51"
                position={[-1, -1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_106"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_106.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube052_52"
                position={[1, -1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_108"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_108.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube053_53"
                position={[1, 1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_110"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_110.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube054_54" position={[0, 0, -4]} scale={3}>
                <mesh
                  name="Object_112"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_112.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube055_55"
                position={[-1, 1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_114"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_114.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube056_56"
                position={[-1, -1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_116"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_116.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube057_57"
                position={[1, -1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_118"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_118.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube058_58"
                position={[1, 1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_120"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_120.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube059_59" position={[0, 0, -6]} scale={3}>
                <mesh
                  name="Object_122"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_122.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube060_60"
                position={[-1, 1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_124"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_124.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube061_61"
                position={[-1, -1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_126"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_126.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube062_62"
                position={[1, -1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_128"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_128.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube063_63"
                position={[1, 1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_130"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_130.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube064_64" position={[0, 0, -8]} scale={3}>
                <mesh
                  name="Object_132"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_132.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube065_65"
                position={[-1, 1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_134"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_134.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube066_66"
                position={[-1, -1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_136"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_136.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube067_67"
                position={[1, -1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_138"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_138.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube068_68"
                position={[1, 1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_140"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_140.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube069_69" position={[0, 0, -10]} scale={3}>
                <mesh
                  name="Object_142"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_142.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube070_70"
                position={[-1, 1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_144"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_144.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube071_71"
                position={[-1, -1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_146"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_146.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube072_72"
                position={[1, -1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_148"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_148.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube073_73"
                position={[1, 1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_150"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_150.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube074_74" position={[0, 0, -12]} scale={3}>
                <mesh
                  name="Object_152"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_152.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube075_75"
                position={[-1, 1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_154"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_154.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube076_76"
                position={[-1, -1, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_156"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_156.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube077_77"
                position={[1, -1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_158"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_158.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube078_78"
                position={[1, 1, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_160"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_160.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube079_79" position={[0, 0, -14]} scale={3}>
                <mesh
                  name="Object_162"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_162.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube080_80"
                position={[-1, 7, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_164"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_164.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube081_81"
                position={[-1, 5, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_166"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_166.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube082_82"
                position={[1, 5, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_168"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_168.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube083_83"
                position={[1, 7, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_170"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_170.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube084_84" position={[0, 6, 0]} scale={3}>
                <mesh
                  name="Object_172"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_172.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube085_85"
                position={[-1, 7, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_174"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_174.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube086_86"
                position={[-1, 5, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_176"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_176.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube087_87"
                position={[1, 5, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_178"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_178.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube088_88"
                position={[1, 7, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_180"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_180.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube089_89" position={[0, 6, -2]} scale={3}>
                <mesh
                  name="Object_182"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_182.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube090_90"
                position={[-1, 7, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_184"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_184.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube091_91"
                position={[-1, 5, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_186"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_186.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube092_92"
                position={[1, 5, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_188"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_188.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube093_93"
                position={[1, 7, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_190"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_190.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube094_94" position={[0, 6, -4]} scale={3}>
                <mesh
                  name="Object_192"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_192.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube095_95"
                position={[-1, 7, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_194"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_194.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube096_96"
                position={[-1, 5, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_196"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_196.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube097_97"
                position={[1, 5, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_198"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_198.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube098_98"
                position={[1, 7, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_200"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_200.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube099_99" position={[0, 6, -6]} scale={3}>
                <mesh
                  name="Object_202"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_202.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube100_100"
                position={[-1, 7, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_204"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_204.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube101_101"
                position={[-1, 5, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_206"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_206.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube102_102"
                position={[1, 5, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_208"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_208.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube103_103"
                position={[1, 7, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_210"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_210.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube104_104" position={[0, 6, -8]} scale={3}>
                <mesh
                  name="Object_212"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_212.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube105_105"
                position={[-1, 7, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_214"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_214.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube106_106"
                position={[-1, 5, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_216"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_216.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube107_107"
                position={[1, 5, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_218"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_218.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube108_108"
                position={[1, 7, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_220"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_220.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube109_109" position={[0, 6, -10]} scale={3}>
                <mesh
                  name="Object_222"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_222.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube110_110"
                position={[-1, 7, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_224"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_224.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube111_111"
                position={[-1, 5, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_226"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_226.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube112_112"
                position={[1, 5, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_228"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_228.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube113_113"
                position={[1, 7, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_230"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_230.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube114_114" position={[0, 6, -12]} scale={3}>
                <mesh
                  name="Object_232"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_232.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube115_115"
                position={[-1, 7, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_234"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_234.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube116_116"
                position={[-1, 5, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_236"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_236.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube117_117"
                position={[1, 5, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_238"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_238.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube118_118"
                position={[1, 7, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_240"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_240.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube119_119" position={[0, 6, -14]} scale={3}>
                <mesh
                  name="Object_242"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_242.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube120_120"
                position={[-1, 7, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_244"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_244.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube121_121"
                position={[-1, 5, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_246"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_246.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube122_122"
                position={[1, 5, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_248"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_248.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube123_123"
                position={[1, 7, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_250"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_250.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube124_124" position={[0, 6, 0]} scale={3}>
                <mesh
                  name="Object_252"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_252.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube125_125"
                position={[-1, 7, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_254"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_254.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube126_126"
                position={[-1, 5, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_256"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_256.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube127_127"
                position={[1, 5, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_258"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_258.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube128_128"
                position={[1, 7, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_260"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_260.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube129_129" position={[0, 6, -2]} scale={3}>
                <mesh
                  name="Object_262"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_262.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube130_130"
                position={[-1, 7, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_264"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_264.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube131_131"
                position={[-1, 5, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_266"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_266.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube132_132"
                position={[1, 5, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_268"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_268.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube133_133"
                position={[1, 7, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_270"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_270.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube134_134" position={[0, 6, -4]} scale={3}>
                <mesh
                  name="Object_272"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_272.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube135_135"
                position={[-1, 7, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_274"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_274.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube136_136"
                position={[-1, 5, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_276"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_276.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube137_137"
                position={[1, 5, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_278"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_278.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube138_138"
                position={[1, 7, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_280"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_280.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube139_139" position={[0, 6, -6]} scale={3}>
                <mesh
                  name="Object_282"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_282.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube140_140"
                position={[-1, 7, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_284"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_284.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube141_141"
                position={[-1, 5, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_286"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_286.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube142_142"
                position={[1, 5, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_288"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_288.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube143_143"
                position={[1, 7, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_290"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_290.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube144_144" position={[0, 6, -8]} scale={3}>
                <mesh
                  name="Object_292"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_292.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube145_145"
                position={[-1, 7, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_294"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_294.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube146_146"
                position={[-1, 5, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_296"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_296.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube147_147"
                position={[1, 5, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_298"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_298.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube148_148"
                position={[1, 7, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_300"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_300.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube149_149" position={[0, 6, -10]} scale={3}>
                <mesh
                  name="Object_302"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_302.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube150_150"
                position={[-1, 7, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_304"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_304.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube151_151"
                position={[-1, 5, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_306"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_306.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube152_152"
                position={[1, 5, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_308"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_308.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube153_153"
                position={[1, 7, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_310"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_310.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube154_154" position={[0, 6, -12]} scale={3}>
                <mesh
                  name="Object_312"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_312.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube155_155"
                position={[-1, 7, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_314"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_314.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube156_156"
                position={[-1, 5, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_316"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_316.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube157_157"
                position={[1, 5, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_318"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_318.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube158_158"
                position={[1, 7, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_320"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_320.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube159_159" position={[0, 6, -14]} scale={3}>
                <mesh
                  name="Object_322"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_322.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube160_160"
                position={[-7, 1, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_324"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_324.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube161_161"
                position={[-7, -1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_326"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_326.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube162_162"
                position={[-5, -1, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_328"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_328.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube163_163"
                position={[-5, 1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_330"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_330.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube164_164" position={[-6, 0, 0]} scale={3}>
                <mesh
                  name="Object_332"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_332.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube165_165"
                position={[-7, 1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_334"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_334.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube166_166"
                position={[-7, -1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_336"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_336.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube167_167"
                position={[-5, -1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_338"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_338.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube168_168"
                position={[-5, 1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_340"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_340.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube169_169" position={[-6, 0, -2]} scale={3}>
                <mesh
                  name="Object_342"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_342.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube170_170"
                position={[-7, 1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_344"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_344.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube171_171"
                position={[-7, -1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_346"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_346.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube172_172"
                position={[-5, -1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_348"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_348.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube173_173"
                position={[-5, 1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_350"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_350.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube174_174" position={[-6, 0, -4]} scale={3}>
                <mesh
                  name="Object_352"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_352.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube175_175"
                position={[-7, 1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_354"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_354.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube176_176"
                position={[-7, -1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_356"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_356.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube177_177"
                position={[-5, -1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_358"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_358.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube178_178"
                position={[-5, 1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_360"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_360.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube179_179" position={[-6, 0, -6]} scale={3}>
                <mesh
                  name="Object_362"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_362.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube180_180"
                position={[-7, 1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_364"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_364.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube181_181"
                position={[-7, -1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_366"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_366.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube182_182"
                position={[-5, -1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_368"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_368.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube183_183"
                position={[-5, 1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_370"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_370.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube184_184" position={[-6, 0, -8]} scale={3}>
                <mesh
                  name="Object_372"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_372.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube185_185"
                position={[-7, 1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_374"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_374.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube186_186"
                position={[-7, -1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_376"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_376.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube187_187"
                position={[-5, -1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_378"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_378.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube188_188"
                position={[-5, 1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_380"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_380.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube189_189" position={[-6, 0, -10]} scale={3}>
                <mesh
                  name="Object_382"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_382.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube190_190"
                position={[-7, 1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_384"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_384.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube191_191"
                position={[-7, -1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_386"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_386.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube192_192"
                position={[-5, -1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_388"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_388.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube193_193"
                position={[-5, 1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_390"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_390.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube194_194" position={[-6, 0, -12]} scale={3}>
                <mesh
                  name="Object_392"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_392.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube195_195"
                position={[-7, 1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_394"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_394.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube196_196"
                position={[-7, -1, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_396"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_396.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube197_197"
                position={[-5, -1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_398"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_398.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube198_198"
                position={[-5, 1, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_400"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_400.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube199_199" position={[-6, 0, -14]} scale={3}>
                <mesh
                  name="Object_402"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_402.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube200_200"
                position={[-7, 1, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_404"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_404.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube201_201"
                position={[-7, -1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_406"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_406.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube202_202"
                position={[-5, -1, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_408"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_408.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube203_203"
                position={[-5, 1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_410"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_410.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube204_204" position={[-6, 0, 0]} scale={3}>
                <mesh
                  name="Object_412"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_412.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube205_205"
                position={[-7, 1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_414"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_414.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube206_206"
                position={[-7, -1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_416"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_416.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube207_207"
                position={[-5, -1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_418"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_418.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube208_208"
                position={[-5, 1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_420"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_420.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube209_209" position={[-6, 0, -2]} scale={3}>
                <mesh
                  name="Object_422"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_422.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube210_210"
                position={[-7, 1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_424"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_424.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube211_211"
                position={[-7, -1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_426"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_426.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube212_212"
                position={[-5, -1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_428"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_428.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube213_213"
                position={[-5, 1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_430"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_430.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube214_214" position={[-6, 0, -4]} scale={3}>
                <mesh
                  name="Object_432"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_432.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube215_215"
                position={[-7, 1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_434"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_434.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube216_216"
                position={[-7, -1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_436"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_436.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube217_217"
                position={[-5, -1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_438"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_438.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube218_218"
                position={[-5, 1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_440"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_440.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube219_219" position={[-6, 0, -6]} scale={3}>
                <mesh
                  name="Object_442"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_442.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube220_220"
                position={[-7, 1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_444"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_444.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube221_221"
                position={[-7, -1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_446"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_446.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube222_222"
                position={[-5, -1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_448"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_448.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube223_223"
                position={[-5, 1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_450"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_450.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube224_224" position={[-6, 0, -8]} scale={3}>
                <mesh
                  name="Object_452"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_452.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube225_225"
                position={[-7, 1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_454"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_454.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube226_226"
                position={[-7, -1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_456"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_456.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube227_227"
                position={[-5, -1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_458"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_458.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube228_228"
                position={[-5, 1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_460"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_460.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube229_229" position={[-6, 0, -10]} scale={3}>
                <mesh
                  name="Object_462"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_462.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube230_230"
                position={[-7, 1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_464"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_464.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube231_231"
                position={[-7, -1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_466"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_466.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube232_232"
                position={[-5, -1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_468"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_468.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube233_233"
                position={[-5, 1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_470"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_470.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube234_234" position={[-6, 0, -12]} scale={3}>
                <mesh
                  name="Object_472"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_472.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube235_235"
                position={[-7, 1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_474"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_474.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube236_236"
                position={[-7, -1, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_476"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_476.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube237_237"
                position={[-5, -1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_478"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_478.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube238_238"
                position={[-5, 1, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_480"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_480.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube239_239" position={[-6, 0, -14]} scale={3}>
                <mesh
                  name="Object_482"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_482.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube240_240"
                position={[5.1, 1, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_484"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_484.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube241_241"
                position={[5.1, -1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_486"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_486.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube242_242"
                position={[7.1, -1, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_488"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_488.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube243_243"
                position={[7.1, 1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_490"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_490.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube244_244" position={[6.1, 0, 0]} scale={3}>
                <mesh
                  name="Object_492"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_492.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube245_245"
                position={[5.1, 1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_494"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_494.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube246_246"
                position={[5.1, -1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_496"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_496.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube247_247"
                position={[7.1, -1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_498"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_498.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube248_248"
                position={[7.1, 1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_500"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_500.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube249_249" position={[6.1, 0, -2]} scale={3}>
                <mesh
                  name="Object_502"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_502.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube250_250"
                position={[5.1, 1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_504"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_504.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube251_251"
                position={[5.1, -1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_506"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_506.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube252_252"
                position={[7.1, -1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_508"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_508.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube253_253"
                position={[7.1, 1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_510"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_510.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube254_254" position={[6.1, 0, -4]} scale={3}>
                <mesh
                  name="Object_512"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_512.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube255_255"
                position={[5.1, 1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_514"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_514.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube256_256"
                position={[5.1, -1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_516"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_516.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube257_257"
                position={[7.1, -1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_518"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_518.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube258_258"
                position={[7.1, 1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_520"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_520.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube259_259" position={[6.1, 0, -6]} scale={3}>
                <mesh
                  name="Object_522"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_522.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube260_260"
                position={[5.1, 1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_524"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_524.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube261_261"
                position={[5.1, -1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_526"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_526.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube262_262"
                position={[7.1, -1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_528"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_528.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube263_263"
                position={[7.1, 1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_530"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_530.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube264_264" position={[6.1, 0, -8]} scale={3}>
                <mesh
                  name="Object_532"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_532.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube265_265"
                position={[5.1, 1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_534"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_534.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube266_266"
                position={[5.1, -1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_536"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_536.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube267_267"
                position={[7.1, -1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_538"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_538.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube268_268"
                position={[7.1, 1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_540"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_540.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube269_269" position={[6.1, 0, -10]} scale={3}>
                <mesh
                  name="Object_542"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_542.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube270_270"
                position={[5.1, 1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_544"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_544.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube271_271"
                position={[5.1, -1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_546"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_546.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube272_272"
                position={[7.1, -1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_548"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_548.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube273_273"
                position={[7.1, 1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_550"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_550.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube274_274" position={[6.1, 0, -12]} scale={3}>
                <mesh
                  name="Object_552"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_552.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube275_275"
                position={[5.1, 1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_554"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_554.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube276_276"
                position={[5.1, -1, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_556"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_556.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube277_277"
                position={[7.1, -1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_558"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_558.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube278_278"
                position={[7.1, 1, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_560"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_560.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube279_279" position={[6.1, 0, -14]} scale={3}>
                <mesh
                  name="Object_562"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_562.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube280_280"
                position={[5.1, 1, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_564"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_564.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube281_281"
                position={[5.1, -1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_566"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_566.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube282_282"
                position={[7.1, -1, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_568"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_568.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube283_283"
                position={[7.1, 1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_570"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_570.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube284_284" position={[6.1, 0, 0]} scale={3}>
                <mesh
                  name="Object_572"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_572.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube285_285"
                position={[5.1, 1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_574"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_574.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube286_286"
                position={[5.1, -1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_576"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_576.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube287_287"
                position={[7.1, -1, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_578"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_578.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube288_288"
                position={[7.1, 1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_580"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_580.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube289_289" position={[6.1, 0, -2]} scale={3}>
                <mesh
                  name="Object_582"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_582.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube290_290"
                position={[5.1, 1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_584"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_584.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube291_291"
                position={[5.1, -1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_586"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_586.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube292_292"
                position={[7.1, -1, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_588"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_588.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube293_293"
                position={[7.1, 1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_590"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_590.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube294_294" position={[6.1, 0, -4]} scale={3}>
                <mesh
                  name="Object_592"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_592.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube295_295"
                position={[5.1, 1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_594"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_594.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube296_296"
                position={[5.1, -1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_596"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_596.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube297_297"
                position={[7.1, -1, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_598"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_598.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube298_298"
                position={[7.1, 1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_600"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_600.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube299_299" position={[6.1, 0, -6]} scale={3}>
                <mesh
                  name="Object_602"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_602.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube300_300"
                position={[5.1, 1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_604"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_604.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube301_301"
                position={[5.1, -1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_606"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_606.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube302_302"
                position={[7.1, -1, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_608"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_608.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube303_303"
                position={[7.1, 1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_610"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_610.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube304_304" position={[6.1, 0, -8]} scale={3}>
                <mesh
                  name="Object_612"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_612.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube305_305"
                position={[5.1, 1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_614"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_614.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube306_306"
                position={[5.1, -1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_616"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_616.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube307_307"
                position={[7.1, -1, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_618"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_618.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube308_308"
                position={[7.1, 1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_620"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_620.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube309_309" position={[6.1, 0, -10]} scale={3}>
                <mesh
                  name="Object_622"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_622.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube310_310"
                position={[5.1, 1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_624"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_624.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube311_311"
                position={[5.1, -1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_626"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_626.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube312_312"
                position={[7.1, -1, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_628"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_628.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube313_313"
                position={[7.1, 1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_630"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_630.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube314_314" position={[6.1, 0, -12]} scale={3}>
                <mesh
                  name="Object_632"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_632.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube315_315"
                position={[5.1, 1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_634"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_634.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube316_316"
                position={[5.1, -1, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_636"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_636.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube317_317"
                position={[7.1, -1, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_638"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_638.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube318_318"
                position={[7.1, 1, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_640"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_640.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube319_319" position={[6.1, 0, -14]} scale={3}>
                <mesh
                  name="Object_642"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_642.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube320_320"
                position={[-1, -5, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_644"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_644.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube321_321"
                position={[-1, -7, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_646"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_646.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube322_322"
                position={[1, -7, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_648"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_648.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube323_323"
                position={[1, -5, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_650"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_650.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube324_324" position={[0, -6, 0]} scale={3}>
                <mesh
                  name="Object_652"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_652.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube325_325"
                position={[-1, -5, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_654"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_654.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube326_326"
                position={[-1, -7, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_656"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_656.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube327_327"
                position={[1, -7, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_658"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_658.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube328_328"
                position={[1, -5, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_660"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_660.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube329_329" position={[0, -6, -2]} scale={3}>
                <mesh
                  name="Object_662"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_662.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube330_330"
                position={[-1, -5, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_664"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_664.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube331_331"
                position={[-1, -7, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_666"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_666.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube332_332"
                position={[1, -7, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_668"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_668.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube333_333"
                position={[1, -5, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_670"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_670.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube334_334" position={[0, -6, -4]} scale={3}>
                <mesh
                  name="Object_672"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_672.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube335_335"
                position={[-1, -5, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_674"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_674.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube336_336"
                position={[-1, -7, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_676"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_676.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube337_337"
                position={[1, -7, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_678"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_678.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube338_338"
                position={[1, -5, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_680"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_680.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube339_339" position={[0, -6, -6]} scale={3}>
                <mesh
                  name="Object_682"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_682.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube340_340"
                position={[-1, -5, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_684"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_684.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube341_341"
                position={[-1, -7, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_686"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_686.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube342_342"
                position={[1, -7, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_688"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_688.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube343_343"
                position={[1, -5, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_690"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_690.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube344_344" position={[0, -6, -8]} scale={3}>
                <mesh
                  name="Object_692"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_692.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube345_345"
                position={[-1, -5, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_694"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_694.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube346_346"
                position={[-1, -7, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_696"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_696.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube347_347"
                position={[1, -7, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_698"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_698.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube348_348"
                position={[1, -5, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_700"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_700.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube349_349" position={[0, -6, -10]} scale={3}>
                <mesh
                  name="Object_702"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_702.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube350_350"
                position={[-1, -5, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_704"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_704.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube351_351"
                position={[-1, -7, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_706"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_706.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube352_352"
                position={[1, -7, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_708"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_708.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube353_353"
                position={[1, -5, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_710"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_710.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube354_354" position={[0, -6, -12]} scale={3}>
                <mesh
                  name="Object_712"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_712.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube355_355"
                position={[-1, -5, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_714"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_714.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube356_356"
                position={[-1, -7, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_716"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_716.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube357_357"
                position={[1, -7, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_718"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_718.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube358_358"
                position={[1, -5, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_720"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_720.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube359_359" position={[0, -6, -14]} scale={3}>
                <mesh
                  name="Object_722"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_722.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube360_360"
                position={[-1, -5, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_724"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_724.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube361_361"
                position={[-1, -7, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_726"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_726.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube362_362"
                position={[1, -7, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_728"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_728.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube363_363"
                position={[1, -5, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_730"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_730.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube364_364" position={[0, -6, 0]} scale={3}>
                <mesh
                  name="Object_732"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_732.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube365_365"
                position={[-1, -5, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_734"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_734.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube366_366"
                position={[-1, -7, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_736"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_736.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube367_367"
                position={[1, -7, -1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_738"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_738.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube368_368"
                position={[1, -5, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_740"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_740.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube369_369" position={[0, -6, -2]} scale={3}>
                <mesh
                  name="Object_742"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_742.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube370_370"
                position={[-1, -5, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_744"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_744.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube371_371"
                position={[-1, -7, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_746"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_746.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube372_372"
                position={[1, -7, -3]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_748"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_748.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube373_373"
                position={[1, -5, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_750"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_750.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube374_374" position={[0, -6, -4]} scale={3}>
                <mesh
                  name="Object_752"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_752.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube375_375"
                position={[-1, -5, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_754"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_754.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube376_376"
                position={[-1, -7, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_756"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_756.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube377_377"
                position={[1, -7, -5]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_758"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_758.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube378_378"
                position={[1, -5, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_760"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_760.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube379_379" position={[0, -6, -6]} scale={3}>
                <mesh
                  name="Object_762"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_762.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube380_380"
                position={[-1, -5, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_764"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_764.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube381_381"
                position={[-1, -7, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_766"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_766.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube382_382"
                position={[1, -7, -7]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_768"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_768.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube383_383"
                position={[1, -5, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_770"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_770.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube384_384" position={[0, -6, -8]} scale={3}>
                <mesh
                  name="Object_772"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_772.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube385_385"
                position={[-1, -5, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_774"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_774.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube386_386"
                position={[-1, -7, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_776"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_776.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube387_387"
                position={[1, -7, -9]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_778"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_778.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube388_388"
                position={[1, -5, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_780"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_780.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube389_389" position={[0, -6, -10]} scale={3}>
                <mesh
                  name="Object_782"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_782.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube390_390"
                position={[-1, -5, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_784"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_784.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube391_391"
                position={[-1, -7, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_786"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_786.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube392_392"
                position={[1, -7, -11]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_788"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_788.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube393_393"
                position={[1, -5, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_790"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_790.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube394_394" position={[0, -6, -12]} scale={3}>
                <mesh
                  name="Object_792"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_792.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube395_395"
                position={[-1, -5, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_794"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_794.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube396_396"
                position={[-1, -7, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_796"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_796.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube397_397"
                position={[1, -7, -13]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_798"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_798.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Cube398_398"
                position={[1, -5, -15]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_800"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_800.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube399_399" position={[0, -6, -14]} scale={3}>
                <mesh
                  name="Object_802"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_802.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Cube_0"
                position={[-1, 1, 1]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials["Material.001"]}
                />
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/background-new.glb");

export default BackgroundNew;


