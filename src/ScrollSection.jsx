import react from "react";
import * as THREE from 'three';
// import { useEffect } from "react";
import { useLayoutEffect,useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Gltf, ScrollControls, useScroll, Scroll } from "@react-three/drei";
import gsap from "gsap";
import { getProject, val } from "@theatre/core";
import theatreState from "./theatreState.json";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import {
  editable as e,
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";
import MilkBottle from "./components/MilkBottle";
 
import Slider from "./Slider/Slider";

import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";

// studio.initialize();
// studio.extend(extension);


export default function ScrollSection() {

  const sheet = getProject("myProject", { state: theatreState }).sheet("Scene");
  const isMobile = window.innerWidth <= 768; // Adjust the width breakpoint as needed
  const pages = isMobile ? 4 : 4;

  


  return (
    <div style={{}}>
      <Canvas
        style={{ width: "100vw", height: "100vh" }}
        gl={{ preserveDrawingBuffer: true }}
      >

        <ScrollControls pages={pages}  distance={2} damping={0.5}>
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>
          <Scroll html style={{ width:"100vw" }}>
           

            <section style={{ marginTop:"180px", height:"100%"}}>
              <div class="container mx-auto ">
                <div className="upperBigText pl-10">
                  <p className="headingSmall fontFmly text-white txt-anim1">REPELLAT HENDRERIT MORBI UTRAQUE</p>
                  <p className="headingBig fontFmly clr-fnt txt-anim1">MASSA PERSONA</p>
                  <p className="headingBig fontFmly text-white txt-anim1">SUPPONENDO</p>
                </div>
              </div>
            </section>

            <section>
              <div class="container mx-auto ">
                <div className="DivCenter">
                  <h1 className="headingBig2">SED SAEMRE SE</h1>
                  <h5 className="headingSmall">liquam eget hendrerit enim, et rhoncus sapien.
                    Donec mollis metus ac massa pulvinar,
                    et fermentum mauris tempus. </h5>
                </div>

                <div class="flex flex-row p-8">
                  <div><img src="img-1.svg" /></div>
                  <div class="flex-auto"> </div>
                  <div><img src="img-2.svg" /></div>
                </div>
              </div>
            </section>
            <section>
      
            <Slider />
            </section>


 
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;   
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const splitText = (selector) => {
    let elems = document.querySelectorAll(selector);
    for (let i = 0; i < elems.length; i++) {
      let elem = elems[i];
      let newContent = '';
      for (let j = 0; j < elem.innerText.length; j++) {
        let char = elem.innerText[j];
        newContent += `<span class="char">${char}</span>`;
      } 
      elem.innerHTML = newContent;
    }
  };







  
  useEffect(() => {
    if (isMounted) {
      splitText('.headingSmall, .headingBig');
      
     // Timeline for .headingSmall
     const tlSmall = gsap.timeline();
     tlSmall.from('.headingSmall .char', {
       opacity: 0,
       y: -90,
       stagger: 0.05,
       ease: "back.out(1.7)",
       duration: 0.9
     });
 
     // Timeline for .headingBig
     const tlBig = gsap.timeline();
     tlBig.from('.headingBig .char', {
       opacity:0,     
       y: -90,
       stagger: 0.05,
       ease: "back.out(1.7)",
       duration: 0.8
     }, "+=0.5"); // Delay the start of this timeline
   }
 }, [isMounted]);





  useLayoutEffect(() => { 
    console.log("useLayoutEffect is running"); 
  
    const boxAnimation = gsap.timeline({ repeat: -1 });
    boxAnimation.fromTo(".centerAnimationBlue", { scale:0, opacity:1, duration:1}, { scale:1.2, opacity:0, duration:1.5});
  
  }, []);
  

  const colorMap = useLoader(TextureLoader, 'uperBg.jpg')

  return (
    <>

      <e.pointLight theatreKey="LightBlue" position={[0, 0, 1]} />
      <e.pointLight theatreKey="LightPurple" position={[0, 0, -2]} />
      <e.pointLight theatreKey="LightWhite" position={[-1, 0, -1]} />
      <e.mesh theatreKey="MilkBottle" position={[0, 0, -1]}>
        <MilkBottle />
      </e.mesh>


      <ambientLight intensity={0.2} />
      <directionalLight />
      <e.mesh theatreKey="img" position={[0, 0, -1]}>
        <planeBufferGeometry args={[14, 4]} />
        <meshStandardMaterial map={colorMap} />
      </e.mesh>

      <PerspectiveCamera
        position={[0, 0, 0]}
        theatreKey="Camera"
        makeDefault
        near={5}
        far={500}
        fov={15}
      />
    </>
  );
}
