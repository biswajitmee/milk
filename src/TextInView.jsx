import React, { useState } from 'react';
import { color, motion } from 'framer-motion';

const TextInView = () => {

  
  const gradientColors = [
    'rgb(225, 0, 255)',
    'rgb(58, 235, 4)',
    'rgb(0, 89, 255)',
  ];
 
  const textStyle = {
    backgroundImage: `linear-gradient(to right, ${gradientColors.join(', ')})`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    animation: 'textGradientAnimation 0.1s linear alternate', // Set the animation duration and timing function
  };

  
  return (
    <motion.div    
      initial={{ opacity: 0, y:200, color: 'transparent', }} 
      animate={{ opacity: 0, y:200,  color: 'transparent', }}
      whileInView={{opacity:1, y:0, ...textStyle}}
      transition={{ duration: 0.6,  delay:0.2, type:'tween' }}      


      

     >
       
        Meet the Dynamic Duo behind mind-blowing designs and
        cutting-edge animations. Elevate your web presence with our
        out-of-the-box brilliance for captivating landing pages, From
        captivating e-commerce platforms to seamless web applications,
        experience a revolution in digital excellence.
 
    </motion.div>
  );
};

export default TextInView;
