import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationMixer, LoopRepeat } from "three";

 function OrbitCut(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Orbitcut.glb");
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
       mixer.update(0.030); // Adjust the animation speed here
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
          scale={0.71}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Icosphere134_0" scale={1.374}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere135_1" scale={1.374}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere136_2" scale={1.374}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere137_3" scale={1.374}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere138_4" scale={1.374}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere139_5" scale={1.374}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere140_6" scale={1.374}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere141_7" scale={1.374}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere142_8" scale={1.374}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere143_9" scale={1.374}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere144_10" scale={1.374}>
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere147_11" scale={1.374}>
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere148_12" scale={1.374}>
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere149_13" scale={1.374}>
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere150_14" scale={1.374}>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere154_15" scale={1.374}>
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere155_16" scale={1.374}>
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere157_17" scale={1.374}>
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere158_18" scale={1.374}>
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere162_19" scale={1.374}>
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere163_20" scale={1.374}>
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere166_21" scale={1.374}>
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere167_22" scale={1.374}>
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere169_23" scale={1.374}>
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere171_24" scale={1.374}>
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere173_25" scale={1.374}>
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere174_26" scale={1.374}>
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere177_27" scale={1.374}>
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere178_28" scale={1.374}>
                <mesh
                  name="Object_60"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere181_29" scale={1.374}>
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere182_30" scale={1.374}>
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere185_31" scale={1.374}>
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere186_32" scale={1.374}>
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere189_33" scale={1.374}>
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere190_34" scale={1.374}>
                <mesh
                  name="Object_72"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere193_35" scale={1.374}>
                <mesh
                  name="Object_74"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_74.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere194_36" scale={1.374}>
                <mesh
                  name="Object_76"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_76.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere197_37" scale={1.374}>
                <mesh
                  name="Object_78"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_78.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere198_38" scale={1.374}>
                <mesh
                  name="Object_80"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_80.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere200_39" scale={1.374}>
                <mesh
                  name="Object_82"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_82.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere201_40" scale={1.374}>
                <mesh
                  name="Object_84"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_84.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere202_41" scale={1.374}>
                <mesh
                  name="Object_86"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_86.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere203_42" scale={1.374}>
                <mesh
                  name="Object_88"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_88.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere204_43" scale={1.374}>
                <mesh
                  name="Object_90"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_90.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere205_44" scale={1.374}>
                <mesh
                  name="Object_92"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_92.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere206_45" scale={1.374}>
                <mesh
                  name="Object_94"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_94.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere207_46" scale={1.374}>
                <mesh
                  name="Object_96"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_96.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere208_47" scale={1.374}>
                <mesh
                  name="Object_98"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_98.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere209_48" scale={1.374}>
                <mesh
                  name="Object_100"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_100.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere210_49" scale={1.374}>
                <mesh
                  name="Object_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere211_50" scale={1.374}>
                <mesh
                  name="Object_104"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere212_51" scale={1.374}>
                <mesh
                  name="Object_106"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_106.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere213_52" scale={1.374}>
                <mesh
                  name="Object_108"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_108.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere214_53" scale={1.374}>
                <mesh
                  name="Object_110"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_110.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere215_54" scale={1.374}>
                <mesh
                  name="Object_112"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_112.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere216_55" scale={1.374}>
                <mesh
                  name="Object_114"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_114.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere217_56" scale={1.374}>
                <mesh
                  name="Object_116"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_116.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere218_57" scale={1.374}>
                <mesh
                  name="Object_118"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_118.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere219_58" scale={1.374}>
                <mesh
                  name="Object_120"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_120.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere220_59" scale={1.374}>
                <mesh
                  name="Object_122"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_122.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere221_60" scale={1.374}>
                <mesh
                  name="Object_124"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_124.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere222_61" scale={1.374}>
                <mesh
                  name="Object_126"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_126.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere223_62" scale={1.374}>
                <mesh
                  name="Object_128"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_128.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere224_63" scale={1.374}>
                <mesh
                  name="Object_130"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_130.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere225_64" scale={1.374}>
                <mesh
                  name="Object_132"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_132.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere226_65" scale={1.374}>
                <mesh
                  name="Object_134"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_134.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere227_66" scale={1.374}>
                <mesh
                  name="Object_136"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_136.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere228_67" scale={1.374}>
                <mesh
                  name="Object_138"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_138.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere229_68" scale={1.374}>
                <mesh
                  name="Object_140"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_140.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere230_69" scale={1.374}>
                <mesh
                  name="Object_142"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_142.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere231_70" scale={1.374}>
                <mesh
                  name="Object_144"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_144.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere232_71" scale={1.374}>
                <mesh
                  name="Object_146"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_146.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere233_72" scale={1.374}>
                <mesh
                  name="Object_148"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_148.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere234_73" scale={1.374}>
                <mesh
                  name="Object_150"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_150.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere235_74" scale={1.374}>
                <mesh
                  name="Object_152"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_152.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere236_75" scale={1.374}>
                <mesh
                  name="Object_154"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_154.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere237_76" scale={1.374}>
                <mesh
                  name="Object_156"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_156.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere238_77" scale={1.374}>
                <mesh
                  name="Object_158"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_158.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere239_78" scale={1.374}>
                <mesh
                  name="Object_160"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_160.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere240_79" scale={1.374}>
                <mesh
                  name="Object_162"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_162.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere241_80" scale={1.374}>
                <mesh
                  name="Object_164"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_164.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere242_81" scale={1.374}>
                <mesh
                  name="Object_166"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_166.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere243_82" scale={1.374}>
                <mesh
                  name="Object_168"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_168.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere244_83" scale={1.374}>
                <mesh
                  name="Object_170"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_170.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere245_84" scale={1.374}>
                <mesh
                  name="Object_172"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_172.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere246_85" scale={1.374}>
                <mesh
                  name="Object_174"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_174.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere247_86" scale={1.374}>
                <mesh
                  name="Object_176"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_176.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere248_87" scale={1.374}>
                <mesh
                  name="Object_178"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_178.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere249_88" scale={1.374}>
                <mesh
                  name="Object_180"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_180.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere250_89" scale={1.374}>
                <mesh
                  name="Object_182"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_182.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere251_90" scale={1.374}>
                <mesh
                  name="Object_184"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_184.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere252_91" scale={1.374}>
                <mesh
                  name="Object_186"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_186.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere253_92" scale={1.374}>
                <mesh
                  name="Object_188"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_188.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere254_93" scale={1.374}>
                <mesh
                  name="Object_190"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_190.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere255_94" scale={1.374}>
                <mesh
                  name="Object_192"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_192.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere256_95" scale={1.374}>
                <mesh
                  name="Object_194"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_194.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere257_96" scale={1.374}>
                <mesh
                  name="Object_196"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_196.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere258_97" scale={1.374}>
                <mesh
                  name="Object_198"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_198.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere259_98" scale={1.374}>
                <mesh
                  name="Object_200"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_200.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere260_99" scale={1.374}>
                <mesh
                  name="Object_202"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_202.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere261_100" scale={1.374}>
                <mesh
                  name="Object_204"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_204.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere262_101" scale={1.374}>
                <mesh
                  name="Object_206"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_206.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere263_102" scale={1.374}>
                <mesh
                  name="Object_208"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_208.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere264_103" scale={1.374}>
                <mesh
                  name="Object_210"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_210.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere265_104" scale={1.374}>
                <mesh
                  name="Object_212"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_212.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere266_105" scale={1.374}>
                <mesh
                  name="Object_214"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_214.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere267_106" scale={1.374}>
                <mesh
                  name="Object_216"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_216.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere268_107" scale={1.374}>
                <mesh
                  name="Object_218"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_218.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere269_108" scale={1.374}>
                <mesh
                  name="Object_220"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_220.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere270_109" scale={1.374}>
                <mesh
                  name="Object_222"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_222.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere271_110" scale={1.374}>
                <mesh
                  name="Object_224"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_224.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere272_111" scale={1.374}>
                <mesh
                  name="Object_226"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_226.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere273_112" scale={1.374}>
                <mesh
                  name="Object_228"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_228.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere274_113" scale={1.374}>
                <mesh
                  name="Object_230"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_230.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere275_114" scale={1.374}>
                <mesh
                  name="Object_232"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_232.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere276_115" scale={1.374}>
                <mesh
                  name="Object_234"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_234.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere277_116" scale={1.374}>
                <mesh
                  name="Object_236"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_236.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere278_117" scale={1.374}>
                <mesh
                  name="Object_238"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_238.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere279_118" scale={1.374}>
                <mesh
                  name="Object_240"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_240.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere280_119" scale={1.374}>
                <mesh
                  name="Object_242"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_242.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere281_120" scale={1.374}>
                <mesh
                  name="Object_244"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_244.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere282_121" scale={1.374}>
                <mesh
                  name="Object_246"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_246.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere283_122" scale={1.374}>
                <mesh
                  name="Object_248"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_248.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere284_123" scale={1.374}>
                <mesh
                  name="Object_250"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_250.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere285_124" scale={1.374}>
                <mesh
                  name="Object_252"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_252.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere286_125" scale={1.374}>
                <mesh
                  name="Object_254"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_254.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere287_126" scale={1.374}>
                <mesh
                  name="Object_256"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_256.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere288_127" scale={1.374}>
                <mesh
                  name="Object_258"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_258.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere289_128" scale={1.374}>
                <mesh
                  name="Object_260"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_260.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere290_129" scale={1.374}>
                <mesh
                  name="Object_262"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_262.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere291_130" scale={1.374}>
                <mesh
                  name="Object_264"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_264.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere292_131" scale={1.374}>
                <mesh
                  name="Object_266"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_266.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere293_132" scale={1.374}>
                <mesh
                  name="Object_268"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_268.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere294_133" scale={1.374}>
                <mesh
                  name="Object_270"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_270.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere295_134" scale={1.374}>
                <mesh
                  name="Object_272"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_272.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere296_135" scale={1.374}>
                <mesh
                  name="Object_274"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_274.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere297_136" scale={1.374}>
                <mesh
                  name="Object_276"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_276.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere298_137" scale={1.374}>
                <mesh
                  name="Object_278"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_278.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere299_138" scale={1.374}>
                <mesh
                  name="Object_280"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_280.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere300_139" scale={1.374}>
                <mesh
                  name="Object_282"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_282.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere301_140" scale={1.374}>
                <mesh
                  name="Object_284"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_284.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere302_141" scale={1.374}>
                <mesh
                  name="Object_286"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_286.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere303_142" scale={1.374}>
                <mesh
                  name="Object_288"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_288.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere304_143" scale={1.374}>
                <mesh
                  name="Object_290"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_290.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere305_144" scale={1.374}>
                <mesh
                  name="Object_292"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_292.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere306_145" scale={1.374}>
                <mesh
                  name="Object_294"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_294.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere307_146" scale={1.374}>
                <mesh
                  name="Object_296"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_296.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere308_147" scale={1.374}>
                <mesh
                  name="Object_298"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_298.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere309_148" scale={1.374}>
                <mesh
                  name="Object_300"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_300.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere310_149" scale={1.374}>
                <mesh
                  name="Object_302"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_302.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere311_150" scale={1.374}>
                <mesh
                  name="Object_304"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_304.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere312_151" scale={1.374}>
                <mesh
                  name="Object_306"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_306.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere313_152" scale={1.374}>
                <mesh
                  name="Object_308"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_308.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere314_153" scale={1.374}>
                <mesh
                  name="Object_310"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_310.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere315_154" scale={1.374}>
                <mesh
                  name="Object_312"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_312.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere316_155" scale={1.374}>
                <mesh
                  name="Object_314"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_314.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere317_156" scale={1.374}>
                <mesh
                  name="Object_316"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_316.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere318_157" scale={1.374}>
                <mesh
                  name="Object_318"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_318.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere319_158" scale={1.374}>
                <mesh
                  name="Object_320"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_320.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere320_159" scale={1.374}>
                <mesh
                  name="Object_322"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_322.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Circle_160" />
              <group name="Icosphere001_161" scale={1.374}>
                <mesh
                  name="Object_325"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_325.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere002_162" scale={1.374}>
                <mesh
                  name="Object_327"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_327.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere003_163" scale={1.374}>
                <mesh
                  name="Object_329"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_329.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere004_164" scale={1.374}>
                <mesh
                  name="Object_331"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_331.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere005_165" scale={1.374}>
                <mesh
                  name="Object_333"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_333.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere006_166" scale={1.374}>
                <mesh
                  name="Object_335"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_335.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere007_167" scale={1.374}>
                <mesh
                  name="Object_337"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_337.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere008_168" scale={1.374}>
                <mesh
                  name="Object_339"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_339.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere009_169" scale={1.374}>
                <mesh
                  name="Object_341"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_341.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere010_170" scale={1.374}>
                <mesh
                  name="Object_343"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_343.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere011_171" scale={1.374}>
                <mesh
                  name="Object_345"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_345.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere012_172" scale={1.374}>
                <mesh
                  name="Object_347"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_347.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere013_173" scale={1.374}>
                <mesh
                  name="Object_349"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_349.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere014_174" scale={1.374}>
                <mesh
                  name="Object_351"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_351.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere015_175" scale={1.374}>
                <mesh
                  name="Object_353"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_353.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere016_176" scale={1.374}>
                <mesh
                  name="Object_355"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_355.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere017_177" scale={1.374}>
                <mesh
                  name="Object_357"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_357.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere018_178" scale={1.374}>
                <mesh
                  name="Object_359"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_359.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere019_179" scale={1.374}>
                <mesh
                  name="Object_361"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_361.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere020_180" scale={1.374}>
                <mesh
                  name="Object_363"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_363.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere021_181" scale={1.374}>
                <mesh
                  name="Object_365"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_365.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere022_182" scale={1.374}>
                <mesh
                  name="Object_367"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_367.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere023_183" scale={1.374}>
                <mesh
                  name="Object_369"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_369.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere024_184" scale={1.374}>
                <mesh
                  name="Object_371"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_371.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere025_185" scale={1.374}>
                <mesh
                  name="Object_373"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_373.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere026_186" scale={1.374}>
                <mesh
                  name="Object_375"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_375.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere027_187" scale={1.374}>
                <mesh
                  name="Object_377"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_377.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere028_188" scale={1.374}>
                <mesh
                  name="Object_379"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_379.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere029_189" scale={1.374}>
                <mesh
                  name="Object_381"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_381.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere030_190" scale={1.374}>
                <mesh
                  name="Object_383"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_383.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere031_191" scale={1.374}>
                <mesh
                  name="Object_385"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_385.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere032_192" scale={1.374}>
                <mesh
                  name="Object_387"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_387.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere033_193" scale={1.374}>
                <mesh
                  name="Object_389"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_389.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere034_194" scale={1.374}>
                <mesh
                  name="Object_391"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_391.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere035_195" scale={1.374}>
                <mesh
                  name="Object_393"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_393.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere036_196" scale={1.374}>
                <mesh
                  name="Object_395"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_395.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere037_197" scale={1.374}>
                <mesh
                  name="Object_397"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_397.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere038_198" scale={1.374}>
                <mesh
                  name="Object_399"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_399.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere039_199" scale={1.374}>
                <mesh
                  name="Object_401"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_401.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere040_200" scale={1.374}>
                <mesh
                  name="Object_403"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_403.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere041_201" scale={1.374}>
                <mesh
                  name="Object_405"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_405.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere042_202" scale={1.374}>
                <mesh
                  name="Object_407"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_407.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere043_203" scale={1.374}>
                <mesh
                  name="Object_409"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_409.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere044_204" scale={1.374}>
                <mesh
                  name="Object_411"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_411.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere045_205" scale={1.374}>
                <mesh
                  name="Object_413"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_413.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere046_206" scale={1.374}>
                <mesh
                  name="Object_415"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_415.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere047_207" scale={1.374}>
                <mesh
                  name="Object_417"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_417.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere048_208" scale={1.374}>
                <mesh
                  name="Object_419"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_419.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere049_209" scale={1.374}>
                <mesh
                  name="Object_421"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_421.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere050_210" scale={1.374}>
                <mesh
                  name="Object_423"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_423.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere051_211" scale={1.374}>
                <mesh
                  name="Object_425"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_425.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere052_212" scale={1.374}>
                <mesh
                  name="Object_427"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_427.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere053_213" scale={1.374}>
                <mesh
                  name="Object_429"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_429.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere054_214" scale={1.374}>
                <mesh
                  name="Object_431"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_431.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere055_215" scale={1.374}>
                <mesh
                  name="Object_433"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_433.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere056_216" scale={1.374}>
                <mesh
                  name="Object_435"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_435.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere057_217" scale={1.374}>
                <mesh
                  name="Object_437"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_437.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere058_218" scale={1.374}>
                <mesh
                  name="Object_439"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_439.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere059_219" scale={1.374}>
                <mesh
                  name="Object_441"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_441.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere060_220" scale={1.374}>
                <mesh
                  name="Object_443"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_443.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere061_221" scale={1.374}>
                <mesh
                  name="Object_445"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_445.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere062_222" scale={1.374}>
                <mesh
                  name="Object_447"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_447.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere063_223" scale={1.374}>
                <mesh
                  name="Object_449"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_449.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere064_224" scale={1.374}>
                <mesh
                  name="Object_451"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_451.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere065_225" scale={1.374}>
                <mesh
                  name="Object_453"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_453.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere066_226" scale={1.374}>
                <mesh
                  name="Object_455"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_455.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere067_227" scale={1.374}>
                <mesh
                  name="Object_457"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_457.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere068_228" scale={1.374}>
                <mesh
                  name="Object_459"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_459.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere069_229" scale={1.374}>
                <mesh
                  name="Object_461"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_461.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere070_230" scale={1.374}>
                <mesh
                  name="Object_463"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_463.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere071_231" scale={1.374}>
                <mesh
                  name="Object_465"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_465.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere072_232" scale={1.374}>
                <mesh
                  name="Object_467"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_467.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere073_233" scale={1.374}>
                <mesh
                  name="Object_469"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_469.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere074_234" scale={1.374}>
                <mesh
                  name="Object_471"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_471.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere075_235" scale={1.374}>
                <mesh
                  name="Object_473"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_473.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere076_236" scale={1.374}>
                <mesh
                  name="Object_475"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_475.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere077_237" scale={1.374}>
                <mesh
                  name="Object_477"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_477.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere078_238" scale={1.374}>
                <mesh
                  name="Object_479"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_479.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere079_239" scale={1.374}>
                <mesh
                  name="Object_481"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_481.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere080_240" scale={1.374}>
                <mesh
                  name="Object_483"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_483.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere081_241" scale={1.374}>
                <mesh
                  name="Object_485"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_485.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere082_242" scale={1.374}>
                <mesh
                  name="Object_487"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_487.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere083_243" scale={1.374}>
                <mesh
                  name="Object_489"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_489.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere084_244" scale={1.374}>
                <mesh
                  name="Object_491"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_491.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere085_245" scale={1.374}>
                <mesh
                  name="Object_493"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_493.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere086_246" scale={1.374}>
                <mesh
                  name="Object_495"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_495.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere087_247" scale={1.374}>
                <mesh
                  name="Object_497"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_497.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere088_248" scale={1.374}>
                <mesh
                  name="Object_499"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_499.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere089_249" scale={1.374}>
                <mesh
                  name="Object_501"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_501.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere090_250" scale={1.374}>
                <mesh
                  name="Object_503"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_503.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere091_251" scale={1.374}>
                <mesh
                  name="Object_505"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_505.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere092_252" scale={1.374}>
                <mesh
                  name="Object_507"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_507.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere093_253" scale={1.374}>
                <mesh
                  name="Object_509"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_509.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere094_254" scale={1.374}>
                <mesh
                  name="Object_511"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_511.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere095_255" scale={1.374}>
                <mesh
                  name="Object_513"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_513.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere096_256" scale={1.374}>
                <mesh
                  name="Object_515"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_515.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere097_257" scale={1.374}>
                <mesh
                  name="Object_517"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_517.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere098_258" scale={1.374}>
                <mesh
                  name="Object_519"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_519.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere099_259" scale={1.374}>
                <mesh
                  name="Object_521"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_521.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere100_260" scale={1.374}>
                <mesh
                  name="Object_523"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_523.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere101_261" scale={1.374}>
                <mesh
                  name="Object_525"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_525.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere102_262" scale={1.374}>
                <mesh
                  name="Object_527"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_527.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere103_263" scale={1.374}>
                <mesh
                  name="Object_529"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_529.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere104_264" scale={1.374}>
                <mesh
                  name="Object_531"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_531.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere105_265" scale={1.374}>
                <mesh
                  name="Object_533"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_533.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere106_266" scale={1.374}>
                <mesh
                  name="Object_535"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_535.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere107_267" scale={1.374}>
                <mesh
                  name="Object_537"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_537.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere108_268" scale={1.374}>
                <mesh
                  name="Object_539"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_539.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere109_269" scale={1.374}>
                <mesh
                  name="Object_541"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_541.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere110_270" scale={1.374}>
                <mesh
                  name="Object_543"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_543.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere111_271" scale={1.374}>
                <mesh
                  name="Object_545"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_545.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere112_272" scale={1.374}>
                <mesh
                  name="Object_547"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_547.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere113_273" scale={1.374}>
                <mesh
                  name="Object_549"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_549.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere114_274" scale={1.374}>
                <mesh
                  name="Object_551"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_551.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere115_275" scale={1.374}>
                <mesh
                  name="Object_553"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_553.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere116_276" scale={1.374}>
                <mesh
                  name="Object_555"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_555.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere117_277" scale={1.374}>
                <mesh
                  name="Object_557"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_557.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere118_278" scale={1.374}>
                <mesh
                  name="Object_559"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_559.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere119_279" scale={1.374}>
                <mesh
                  name="Object_561"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_561.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere120_280" scale={1.374}>
                <mesh
                  name="Object_563"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_563.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere121_281" scale={1.374}>
                <mesh
                  name="Object_565"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_565.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere122_282" scale={1.374}>
                <mesh
                  name="Object_567"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_567.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere123_283" scale={1.374}>
                <mesh
                  name="Object_569"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_569.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere124_284" scale={1.374}>
                <mesh
                  name="Object_571"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_571.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere125_285" scale={1.374}>
                <mesh
                  name="Object_573"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_573.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere126_286" scale={1.374}>
                <mesh
                  name="Object_575"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_575.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere127_287" scale={1.374}>
                <mesh
                  name="Object_577"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_577.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere128_288" scale={1.374}>
                <mesh
                  name="Object_579"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_579.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere129_289" scale={1.374}>
                <mesh
                  name="Object_581"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_581.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere130_290" scale={1.374}>
                <mesh
                  name="Object_583"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_583.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere131_291" scale={1.374}>
                <mesh
                  name="Object_585"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_585.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere132_292" scale={1.374}>
                <mesh
                  name="Object_587"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_587.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere133_293" scale={1.374}>
                <mesh
                  name="Object_589"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_589.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere145_294" scale={1.374}>
                <mesh
                  name="Object_591"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_591.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere146_295" scale={1.374}>
                <mesh
                  name="Object_593"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_593.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere151_296" scale={1.374}>
                <mesh
                  name="Object_595"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_595.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere152_297" scale={1.374}>
                <mesh
                  name="Object_597"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_597.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere153_298" scale={1.374}>
                <mesh
                  name="Object_599"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_599.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere156_299" scale={1.374}>
                <mesh
                  name="Object_601"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_601.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere159_300" scale={1.374}>
                <mesh
                  name="Object_603"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_603.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere160_301" scale={1.374}>
                <mesh
                  name="Object_605"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_605.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere161_302" scale={1.374}>
                <mesh
                  name="Object_607"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_607.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere164_303" scale={1.374}>
                <mesh
                  name="Object_609"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_609.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere165_304" scale={1.374}>
                <mesh
                  name="Object_611"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_611.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere168_305" scale={1.374}>
                <mesh
                  name="Object_613"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_613.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere170_306" scale={1.374}>
                <mesh
                  name="Object_615"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_615.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere172_307" scale={1.374}>
                <mesh
                  name="Object_617"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_617.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere175_308" scale={1.374}>
                <mesh
                  name="Object_619"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_619.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere176_309" scale={1.374}>
                <mesh
                  name="Object_621"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_621.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere179_310" scale={1.374}>
                <mesh
                  name="Object_623"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_623.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere180_311" scale={1.374}>
                <mesh
                  name="Object_625"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_625.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere183_312" scale={1.374}>
                <mesh
                  name="Object_627"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_627.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere184_313" scale={1.374}>
                <mesh
                  name="Object_629"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_629.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere187_314" scale={1.374}>
                <mesh
                  name="Object_631"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_631.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere188_315" scale={1.374}>
                <mesh
                  name="Object_633"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_633.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere191_316" scale={1.374}>
                <mesh
                  name="Object_635"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_635.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere192_317" scale={1.374}>
                <mesh
                  name="Object_637"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_637.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere195_318" scale={1.374}>
                <mesh
                  name="Object_639"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_639.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere196_319" scale={1.374}>
                <mesh
                  name="Object_641"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_641.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Icosphere199_320" scale={1.374}>
                <mesh
                  name="Object_643"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_643.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Circle001_321" rotation={[-Math.PI, 0, 0]} />
              <group name="Circle002_322" scale={2.5} />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Orbitcut.glb");

export default OrbitCut;
