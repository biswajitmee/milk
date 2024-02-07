import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MilkBottle from "./MilkBottle";

gsap.registerPlugin(ScrollTrigger);

function RotatingModel(props) {
  const modelGroup = useRef();

  useEffect(() => {
    console.log("modelGroup.current:", modelGroup.current);
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "canvas",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  
    if (modelGroup.current) {
      tl.to(modelGroup.current.rotation, { x: Math.PI * 2, ease: "none" });
    }
  
    return () => {
     
      tl.kill();
    };
  }, [modelGroup.current]);

  ScrollTrigger.refresh();

  return (
    <Canvas
      style={{ width: "100vw", height: "200vh" }}
      camera={{ position: [0, 0, 5], fov: 100 }}
    >
      <group ref={modelGroup}>
        <MilkBottle position={[0, -2, 0]} />

        <pointLight position={[0, 0, 1]} />
        <pointLight position={[0, 0, 2]} />
        <pointLight position={[-1, 0, 3]} />
      </group>
    </Canvas>
  );
}

export default RotatingModel;
