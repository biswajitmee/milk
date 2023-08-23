import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

 function AlienStone(props) {
  const { nodes, materials } = useGLTF("/alien_stone.glb");
  const group = useRef();

  useEffect(() => {
    const animate = () => {
      // Rotate the group
      group.current.rotation.y += 0.005; // Adjust the rotation speed as needed

      // Float the group slightly along the Y-axis
      group.current.position.y = Math.sin(Date.now() * 0.001) * 0.1; // Adjust the floating intensity as needed


      // Request the next animation frame
      requestAnimationFrame(animate);
    };

    animate();
  }, []);



  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.052, -0.191, -0.351]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell036.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell036_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.352, 0.114, 0.003]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[0.049, 0.283, -0.089]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[0.245, -0.112, 0.254]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell004_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell004_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[0.127, -0.219, 0.034]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell006.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell006_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.186, -0.195, 0.265]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell007.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell007_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.136, -0.323, 0.146]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell008.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell008_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stone_Low_Poly__0_cell014.geometry}
        material={materials["Scene_-_Root"]}
        position={[-0.094, 0.099, 0.063]}
      />
      <group position={[0.121, 0.241, 0.249]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell010.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell010_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[0.166, 0.328, 0.059]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell011_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell011_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[0.154, -0.306, -0.231]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell012_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell012_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.053, 0.007, 0.351]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell013.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell013_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.172, 0.258, 0.259]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell014_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell014_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[0.335, -0.205, -0.035]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell015_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell015_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[0.367, 0.067, 0.006]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell017_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell017_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.086, 0.072, -0.282]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell018.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell018_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.358, -0.008, -0.167]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell019_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell019_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.211, -0.133, -0.037]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell021_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell021_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.168, -0.296, -0.161]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell022_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell022_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.331, 0.189, 0.11]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[0.171, -0.061, -0.362]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell008.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell008_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[0.182, -0.105, -0.352]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell009.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell009_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[0.304, -0.047, -0.229]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell001_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell001_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[0.233, -0.037, -0.284]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell003.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell003_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[0.265, 0.088, -0.202]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell004.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell004_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.218, 0.188, -0.233]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell001.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell001_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.379, -0.145, 0.044]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell008.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell008_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.412, -0.095, 0.121]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell003.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell003_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.133, 0.46, 0.2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001_cell008.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001_cell008_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.211, 0.425, 0.128]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001_cell001.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001_cell001_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.136, 0.412, 0.089]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001_cell003.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001_cell003_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.066, 0.427, 0.083]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001_cell004.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001_cell004_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.049, 0.438, 0.159]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001_cell003_cell008.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001_cell003_cell008_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stone_Low_Poly__0_cell001_cell003_cell001.geometry}
        material={materials["Scene_-_Root"]}
        position={[-0.047, 0.402, 0.151]}
      />
      <group position={[-0.073, 0.469, 0.174]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001_cell003_cell001_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001_cell003_cell001_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.063, 0.455, 0.198]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001_cell003_cell002.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001_cell003_cell002_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.062, 0.428, 0.188]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001_cell003_cell003.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell001_cell003_cell003_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stone_Low_Poly__0_cell003_cell007_cell.geometry}
        material={materials["Scene_-_Root"]}
        position={[-0.439, -0.07, 0.035]}
      />
      <group position={[-0.429, -0.072, 0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell007_cell001.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell007_cell001_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.427, -0.074, 0.051]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell007_cell002_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell007_cell002_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.448, -0.057, 0.079]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell007_cell003_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell007_cell003_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stone_Low_Poly__0_cell003_cell007_cell006.geometry}
        material={materials["Scene_-_Root"]}
        position={[-0.423, -0.069, 0.029]}
      />
      <group position={[-0.45, -0.057, 0.05]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell007_cell005.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell007_cell005_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.304, -0.29, -0.018]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell004_cell008.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell004_cell008_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.351, -0.214, 0.002]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell004_cell009.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell004_cell009_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.326, -0.231, -0.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell004_cell001_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell004_cell001_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.321, -0.257, 0.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell004_cell002_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell004_cell002_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.305, -0.28, -0.041]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell004_cell003_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell004_cell003_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.366, -0.16, -0.087]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell003_cell001.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell003_cell001_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.341, -0.209, -0.09]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell003_cell002.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell003_cell002_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.341, -0.208, -0.052]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell003_cell003_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell003_cell003_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.323, -0.239, -0.058]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell003_cell004_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell003_cell003_cell004_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stone_Low_Poly__0_cell007_cell004_cell.geometry}
        material={materials["Scene_-_Root"]}
        position={[-0.201, 0.341, -0.095]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stone_Low_Poly__0_cell007_cell004_cell003.geometry}
        material={materials["Scene_-_Root"]}
        position={[-0.196, 0.357, -0.081]}
      />
      <group position={[-0.192, 0.346, -0.095]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell007_cell004_cell003_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell007_cell004_cell003_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.178, 0.324, -0.132]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell007_cell003_cell008.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell007_cell003_cell008_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stone_Low_Poly__0_cell007_cell003_cell003.geometry}
        material={materials["Scene_-_Root"]}
        position={[-0.182, 0.312, -0.145]}
      />
      <group position={[-0.186, 0.316, -0.136]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell007_cell003_cell002.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell007_cell003_cell002_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.174, 0.317, -0.146]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell007_cell003_cell003_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell007_cell003_cell003_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stone_Low_Poly__0_cell007_cell003_cell007.geometry}
        material={materials["Scene_-_Root"]}
        position={[-0.193, 0.319, -0.127]}
      />
      <group position={[-0.147, 0.234, -0.244]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell007_cell008.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell007_cell008_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.135, 0.25, -0.237]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell007_cell001_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell007_cell001_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.12, 0.257, -0.237]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell007_cell002.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell007_cell002_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.148, 0.224, -0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell007_cell003.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell007_cell003_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.135, 0.239, -0.245]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell007_cell004_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell007_cell004_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stone_Low_Poly__0_cell023_cell005_cell001.geometry}
        material={materials["Scene_-_Root"]}
        position={[-0.175, 0.216, -0.204]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stone_Low_Poly__0_cell023_cell005_cell003.geometry}
        material={materials["Scene_-_Root"]}
        position={[-0.171, 0.214, -0.209]}
      />
      <group position={[-0.283, 0.139, -0.249]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell_cell008.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell_cell008_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.291, 0.147, -0.232]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell_cell009.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell_cell009_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[-0.271, 0.128, -0.253]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell_cell001_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell023_cell_cell001_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stone_Low_Poly__0_cell023_cell_cell005.geometry}
        material={materials["Scene_-_Root"]}
        position={[-0.288, 0.123, -0.256]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stone_Low_Poly__0_cell023_cell_cell007.geometry}
        material={materials["Scene_-_Root"]}
        position={[-0.262, 0.132, -0.241]}
      />
      <group position={[0.244, -0.118, -0.341]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell004_cell008.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell004_cell008_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[0.256, -0.12, -0.322]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell004_cell001.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell004_cell001_1.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stone_Low_Poly__0_cell034_cell004_cell003.geometry}
        material={materials["Scene_-_Root"]}
        position={[0.278, -0.122, -0.301]}
      />
      <group position={[0.243, -0.13, -0.342]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell004_cell004_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell004_cell004_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <group position={[0.247, -0.106, -0.331]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell004_cell005_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Low_Poly__0_cell034_cell004_cell005_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stone_Low_Poly__0.geometry}
        material={materials["Scene_-_Root"]}
        rotation={[0, 0, -Math.PI]}
      />
    </group>
  );
}

useGLTF.preload("/AlenBreak.glb");
export default AlienStone;
