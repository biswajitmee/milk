import { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Gltf, ScrollControls, useScroll, Scroll } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import theatreState from "./theatreState.json";
import { motion } from "framer-motion";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import {
  editable as e,
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";
// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";

 
import DemoTextAnimation from "./DemoTextAnimation";
import BreakCode from "./BreakCode";
import AnimatedTextSequence from "./AnimatedTextSequence";
import AnimatedTextCharacter from "./SplitTextCharacter";
import RotatingBox from "./RoutingDiv";
import HeaderBar from "./HeaderBar";
import ContactForm from "./ContactForm";
import WeOffer from "./WeOffer";
import ProfilePage from "./ProfilePage";
import Footer from "./Footer";

 
// studio.initialize();
// studio.extend(extension);
import CloseTagAnimation from "./CloseTagAnimation";
import ErrorBurnerSvg from "./ErrorBurnerSvg";
 
 
 

export default function ScrollSection() {
  const sheet = getProject("myProject", { state: theatreState }).sheet("Scene");
  const [mouse, setMouse] = useState([0, 0]);
  const handleMouseMove = (event) => {
    setMouse([event.clientX, event.clientY]);
  };



  const isMobile = window.innerWidth <= 768; // Adjust the width breakpoint as needed
  const pages = isMobile ? 9 : 8.5;



  return (
    <div
      style={{ height: "100vh", overflow: "hidden" }}
      onMouseMove={handleMouseMove}
    >
      <Canvas
        style={{ width: "100vw", height: "100vh" }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ScrollControls pages={pages} distance={2} damping={0.5}>
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>

          <Scroll html style={{ position: "absolute", width: "100vw" }}>
           
           
            <div className="mainLogo" style={{ width: "300px", margin: "auto",  }}>
              <div class="flex">
                <div class="flex-none w-14 h-14">
                  <CloseTagAnimation />
                </div>
                <div class="grow h-14">
                  <ErrorBurnerSvg />
                </div>

              </div>
            </div>
          
        
          <section>
              <div className="contanier">
                <div>
                  <h1 className=" font-semibold leading-[95px]  p-10">
                    <AnimatedTextSequence />
                  </h1>
                </div>
                <div className="barheader p-10 pl-10 py-52 ">
                  <HeaderBar />
                </div>
              </div>
            </section>

            <section>
              <div className="contanier">
              <div style={{ position:"relative" , width: "100vw", height: "50vh", marginTop:"10%", left:"20%", }}>
              <AnimatedTextCharacter text="React Devloper From Kolkata,India" />
              </div>
            </div>
            </section> 
 
            {/* --------------- Desribe text scroll overlay color ANIMATION------------------ */}
            <section>
              <div className="sm:conatiner md:container lg:container xl:container 2xl:container">
                <div className="demotextFontSM ">
                  <DemoTextAnimation />
                </div>
              </div>
            </section>

            {/* ---------biswajit card / prosenjit card ----------- */}
            <section className="text-gray-600 body-font sm:container md:container lg:container xl:container 2xl:container mx-auto clear-both ">
              <ProfilePage />

              <div className="grid justify-items-center pt-5">
                <div >
                  <AnimatedTextCharacter text=".. What we offer .." />
                </div>
              </div>
            </section>

            {/* ---------what we offer ----------- */}

            <section>
              <div>




                <div>
                  <WeOffer />
                </div>
              </div>
            </section>

            {/* ---------RotatingBox ----------- */}

            <section>
              <div className=" md:container md:mx-auto lg:container lg:mx-auto ">
                <div className=" ">
                  <RotatingBox />
                </div>
              </div>
            </section>

            {/* ---------Footer ----------- */}

            <section>
              <div className=" md:container md:mx-auto lg:container lg:mx-auto sm:container sm:mx-auto xl:container xl:mx-auto ">
                <div className="">
                  <ContactForm />
                </div>

                <div >
                  <Footer />
                </div>
              </div>
            </section>



            <motion.div
              style={{ position: "absolute" }}
              className="mt-10 "
              initial={{
                left: "30px",
                top: "15px",
                height: 1,
                width: 0,
                backgroundColor: "#31016D",
              }}
              animate={{
                left: "30px",
                top: "15px",
                height: 1,
                width: "98vw",
                backgroundColor: "#31016D",
              }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: "linear",
              }}
            />

            <motion.div
              style={{ position: "absolute" }}
              className="mt-10 overflow-hidden "
              initial={{
                left: "30px",
                top: 0,
                height: 0,
                width: 1,
                backgroundColor: "#31016D",
                opacity: 0.5,
              }}
              animate={{
                left: "30px",
                top: 0,
                height: "98vh",
                width: 1,
                backgroundColor: "#31016D",
              }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: "linear",
              }}
            />

            <motion.div
              style={{ position: "absolute" }}
              className="mt-10  "
              initial={{
                right: "40px",
                top: 0,
                height: 0,
                width: 1,
                backgroundColor: "#31016D",
                opacity: 0.1,
              }}
              animate={{
                right: "40px",
                top: 0,
                height: "98vh",
                width: 1,
                backgroundColor: "#31016D",
                opacity: 0.7,
              }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: "linear",
              }}
            />

            <motion.div
              style={{ position: "absolute" }}
              className="mt-10 overflow-hidden"
              initial={{
                height: "2px",
                width: 0,
                left: 0,
                top: "96vh",
                backgroundColor: "#31016D",
                opacity: 0.5,
              }}
              animate={{
                height: "2px",
                width: "96vw",
                top: "90vh",
                left: "34px",

                backgroundColor: "#31016D",
                opacity: 0.5,
              }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: "linear",
              }}
            />
          </Scroll>
        </ScrollControls>
        <EffectComposer>
          <DepthOfField
            focusDistance={0.01}
            focalLength={0.35}
            bokehScale={3}
            height={200}
          />
          <Bloom
            luminanceThreshold={0.4}
            luminanceSmoothing={0.4}
            height={300}
          />
          {/* <Noise opacity={0.07} /> */}
          <Vignette eskil={false} offset={0.2} darkness={1.2} />
        </EffectComposer>
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
  const bgColor = "#100D14";

  return (
    <>
      <color attach="background" args={[bgColor]} />
      <e.pointLight theatreKey="LightBlue" position={[0, 0, 1]} />
      <e.pointLight theatreKey="LightPurple" position={[0, 0, -2]} />
      <e.pointLight theatreKey="LightWhite" position={[-1, 0, -1]} />
      <e.mesh theatreKey="BreakCode" position={[0, 0, -1]}>
        <BreakCode />
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
