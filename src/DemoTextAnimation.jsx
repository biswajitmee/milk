import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function DemoTextAnimation() {
  // CSS styles
  const textStyle = {
    // textAlign: 'center',
    background: 'linear-gradient(to right, #305AE7 20%, #9D00E7 30%, #000 70%, #9D00E7 80%)',
    backgroundSize: '200% auto',
    color: '#000',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  // CSS Keyframes for animation
  const shineAnimation = `
    @keyframes shine {
      from {
        background-position: -200% center;
      }
      to {
        background-position: 0% center;
      }
    }
  `;

  // Merge styles with keyframes
  const perfectTextStyle = {
    ...textStyle,
    animation: 'shine 3s linear'
  };

  // useInView hook to detect when the element is in the middle of the viewport
  const [ref, inView] = useInView({
    triggerOnce: false, // Set triggerOnce to false to repeat the animation
    threshold: 0.5 // Set the threshold to 0.5 (50%) to trigger the animation when the element is in the middle of the viewport
  });

  
  return (
    <div  >
        
        
         <div className="  ">
               
               <div  style={{width:"90%", margin:"auto", }}>
                <motion.h1             
                  ref={ref} // Add the ref to the element you want to track
                  initial={{ y:100,  }}
                  animate={inView ? { y:0, ...perfectTextStyle } : { opacity: 0 }} // Only animate when inView is true
                  transition={{ duration: 0.4, delay: 0.2, type: 'tween' }}
                >
                  Meet the Dynamic Duo behind mind-blowing designs and cutting-edge
                  animations. Elevate your web presence with our out-of-the-box
                  brilliance for captivating landing pages. From captivating
                  e-commerce platforms to seamless web applications, experience a
                  revolution in digital excellence.
                </motion.h1>
                </div>
              </div>


      <style>{shineAnimation}</style> {/* Add the keyframes to the DOM */}
    </div>
  );
}
