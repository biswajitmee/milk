import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import BackgroundNew from "./BackgroundNew";
 import LineOrbit from "./LineOrbit";
 
 import AlienStone from "./components/AlienStone";
import BlackSoul from "./BlackSoul";
import RobotAnimation from "./RobotAnimation";

import Fusion from "./Fusion";
import Cycle from "./Cycle";

const RotatingBox = () => {
  const [rotation, setRotation] = useState(0);

  const rotateLeft = () => {
    setRotation(rotation - 45);
  };

  const rotateRight = () => {
    setRotation(rotation + 45);
  };



  const isMobile = window.innerWidth <= 768; // Adjust the width breakpoint as needed
  const lftPosD = isMobile ? '-115%' : '0%'; 


  return (
    <>
      <div style={{ height:"100%", overflow: "hidden", }}>
        <div
          className="main-box"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.5s ease",
           left:lftPosD,
          }}
        >
          <div className="smal-box count1 content-center text-center">
            <div className="txt-gradient2  card-header"> Creative Website</div>
            <Canvas className="small-canvas" >
              <pointLight
              position={[-50, 0, 10]}
                color="#BB05FB"
                intensity={0.6}
              />
              <pointLight
               position={[15, 0, 10]}
                color="#BB05FB"
                intensity={0.4}
              />
          
     

      <AlienStone position={[0, 0, 3.5]} />
            </Canvas>
          </div>

          <div className="smal-box count2 content-center text-center">          
            <div className="txt-gradient2  card-header"> Branding </div>                                    
               <p>Photoshop </p>
               <p>Figma</p>
            <Canvas className="small-canvas" >
              <pointLight
                position={[-25, 0, 35]}
                color="#BB05FB"
                intensity={250}
              />
              <pointLight
              position={[25, 5, 55]}
                color="#54FB05"
                intensity={150}
              />
                <BlackSoul position={[18, 5.5, 30]}/>
            </Canvas>
          </div>

          <div className="smal-box count3 content-center text-center ">
            <p className="txt-gradient2  card-header">              
                <b>2d/3d Animation</b> 
               <p>React Fiber</p><p>Framer motion</p>
               <p>React Deri</p><p>GSAP</p><p>GLB / gltf</p>
               <p>Canvas</p><p>Blender</p>
               </p> 
            <Canvas className="small-canvas">
              <pointLight
                position={[1, 0, 1]}
                color="#AD00FF"
                intensity={0.5}
              />
              <pointLight
                position={[-1, -1.5, -1]}
                color="#0044FF"
                intensity={0.5}
              />
               <RobotAnimation  position={[-0.5, -0.5, 1.3]} />        
            </Canvas>
          </div>

          <div className="smal-box count4 content-center text-center "> 
            <p className="txt-gradient2 card-header">              
              <b>Web Development</b> 
               <br/>
               <p>ReactJs </p><p>VueJs</p>
               <p>NodeJs</p><p>Tailwind</p>
               <p>Typescript</p><p>Strapi</p>
               </p>
            <Canvas className="small-canvas" >
              <pointLight
                position={[1, 1, 3]}
                color="#AD00FF"
                intensity={1500}
              />
              <pointLight
                position={[1, 1, -3]}
                color="#0044FF"
                intensity={5000}
              />
              

              <Fusion position={[-1, 1.5, 3]} />
            </Canvas>
          </div>

          <div className="smal-box count5 content-center text-center "> 
            <p className="txt-gradient2  card-header">             
              <b> Mobile App</b> 
               <br/>
               <p> Hybrid</p><p> Androad</p>
               <p>IOS</p>
               </p>
            <Canvas className="small-canvas" >
              <pointLight
                position={[1, 0, -3]}
                color="#AD00FF"
                intensity={50}
              />
                <pointLight
                position={[1, 0, 3]}
                color="#AD00FF"
                intensity={50}
              />
              <pointLight
                position={[0.5, 0, 2]}
                color="#0044FF"
                intensity={100}
              />
               <Cycle  position={[0.5, 1.5, 2]}/>
            </Canvas>
          </div>

          <div className="smal-box count6 content-center text-center ">
  

            <p className="txt-gradient2  card-header">              
              <b> Ecommerce</b> 
               <br/>
               <p> Magento</p>
               <p>Wordpress</p>
                <p>Shopify</p>
                <p>Strapi</p>

               </p>


            <Canvas className="small-canvas" >
              <pointLight
                position={[1, 0, 1]}
                color="#AD00FF"
                intensity={0.5}
              />
              <pointLight
                position={[-1, 0, -1]}
                color="#0044FF"
                intensity={0.5}
              />
               <LineOrbit />
            </Canvas>
          </div>

          <div className="smal-box count7 content-center text-center "> 
            <p className="txt-gradient2  card-header">              
              <b>Server Managment</b> 
               <br/>
               <p> DNS </p><p> Netwoking</p>
               <p>Linux</p><p>Docker</p><p>Ubuntu</p><p>AWS</p>
               </p>


            <Canvas className="small-canvas" >
              <pointLight
                position={[1, 0, 1]}
                color="#AD00FF"
                intensity={0.5}
              />
              <pointLight
                position={[-1, 0, -1]}
                color="#0044FF"
                intensity={0.5}
              />
              <BackgroundNew position={[-2, -2, -2]} />
            </Canvas>
          </div>

          <div className="smal-box count8 content-center text-center ">
    
            <p className="txt-gradient2  card-header">              
              <b> Deploymnet</b> 
               <br/>
               <p>DNS Mnagment</p>
               <p> Linux</p><p> AWS</p>
               <p> Docker</p><p> K8S</p>
               </p>


            <Canvas className="small-canvas" >
              <pointLight
                position={[1, 0, 1]}
                color="#AD00FF"
                intensity={0.5}
              />
              <pointLight
                position={[-1, 0, -1]}
                color="#0044FF"
                intensity={0.5}
              />
              <BackgroundNew position={[-2, -2, -2]} />
            </Canvas>
          </div>

    

        </div>
      </div>

      <div
        style={{
          position: "relative",
          width: "300px",
          margin: "auto",
          top: "-800px",
        }}
      >
        <div className="flex">
          <button className="rounded-full ml-2 mr-2 " onClick={rotateLeft}>
            <img src="/left-icon.svg" />
          </button>
          <button className="rounded-full ml-2 mr-2 " onClick={rotateRight}>
            <img src="/right-icon.svg" />
          </button>
        </div>
      </div>
    </>
  );
};

export default RotatingBox;
