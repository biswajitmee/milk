import React, { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoBreak from "./LogoBreak";
import { Canvas } from "@react-three/fiber";
import AlienStone from "./components/AlienStone";


const menuVariants = {
  collapsed: { width: 0, height: "100vh" },
  expanded: { width: "100%", height: "100vh" },
};

const iconBgVariants = {
  collapsed: { width: 0, height: "100vh" },
  expanded: { width: "40vw", height: "100vh" },
};

const iconBgVariantsSM = {
  collapsed: { width: 0, height: "100vh" },
  expanded: { width: "100vw", height: "100vh" },
};

const menuInsideVariants = {
  collapsed: { opacity: 0, x: 150 },
  expanded: { opacity: 1, x: 0 },
};





const MainMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial screen width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  const handleMenuClick = () => {
    setIsExpanded(!isExpanded);
  };

  const selectedIconBgVariants = isMobile ? iconBgVariantsSM : iconBgVariants;

  return (
  
    <motion.div
      className={`menu ${isExpanded ? "expanded" : ""}`}
      initial={false}
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={menuVariants}
      transition={{ duration: isExpanded ? 0.2 : 0.2 }}
      style={{ position: "absolute", right: "16px", top:"0px", paddingLeft:"25px", zIndex: 999 }}
    >
      <motion.div
        className="icon-bg"
        initial={false}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={selectedIconBgVariants}
        transition={{ duration: isExpanded ? 0.1 : 0.2 }}
        style={{
          position:"absolute",
          right:"12px",
          backgroundColor: "#000",
          transformOrigin: "right",
        }}
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="flex flex-col menuInside"
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              variants={menuInsideVariants}
              style={{
                padding: "100px 50px",
                backgroundColor: "#000",
                right:"12px",
             
              }}
            >
              <motion.div className="nav-line"
                
                variants={menuInsideVariants}
                transition={{
                  delay: isExpanded ? 0.3 : 0.3,
                  duration: isExpanded ? 0 : 0,
                }}
              >
                Our Services
              </motion.div>

              <motion.div  className="nav-line"
      
                variants={menuInsideVariants}
                transition={{
                  delay: isExpanded ? 0.7 : 0.7,
                  duration: isExpanded ? 0.2 : 0.3,
                }}
               
              >
                Our Technologies
              </motion.div>

              <motion.div  className="nav-line"
              
                variants={menuInsideVariants}
                transition={{
                  delay: isExpanded ? 0.9 : 0.9,
                  duration: isExpanded ? 0.2 : 0.3,
                }}
               
              >
                Our Work
              </motion.div>

              <motion.div  className="nav-line"
               
                variants={menuInsideVariants}
                transition={{
                  delay: isExpanded ? 1.0 : 1.0,
                  duration: isExpanded ? 0.2 : 0.3,
                }}
          
              >
                Contact Us
              </motion.div>

              <motion.div  className="menu-line"                
               variants={menuInsideVariants}
               transition={{
                 delay: isExpanded ? 1.1 : 1.1,
                 duration: isExpanded ? 0.2 : 0.3,
           
               }}         
             >           
             </motion.div>

         
             <p style={{marginTop:"80px", position:"relative", top:"230px", left:"90px", color:"#ffffff", fontSize:"55px", }}>Error Burner</p>


             <motion.div  className="Logo"                
               variants={menuInsideVariants}
               transition={{
                 delay: isExpanded ? 1.1 : 1.1,
                 duration: isExpanded ? 0.2 : 0.3,
           
               }}         
             >    

           <Canvas  style={{ height:"40vh",}}>
              <pointLight
              position={[-50, 0, 10]}
                color="#BE06EC"
                intensity={0.6}
              />
              <pointLight
               position={[15, 0, 10]}
                color="#1B32FD"
                intensity={0.4}
              />
 

      <AlienStone position={[2.4, 0.5, 2]} />
      <LogoBreak  position={[-41, -8, -50]}/>  
            </Canvas>  
          
             </motion.div>


            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="icon-menu"
        onClick={handleMenuClick}
        style={{
          width: "50px",
          height: "50px",
          position: "fixed",
          right: "20px",
          top: "25px",
          backgroundColor: "#57009e",
          borderRadius: "50px",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          lineHeight: 3,
          zIndex: 9,
          fontSize:"12px",
        }}
        whileHover={{ backgroundColor: "#7A24CE" }}
      >
        {isExpanded ? "close" : "menu"}
      </motion.div>
    </motion.div>



  );
};

export default MainMenu;
