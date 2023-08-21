import React from "react";
import { motion } from "framer-motion";
import FooterTypeAnimation from "./FooterTypeAnimation";
import LogoAnimationFooter from "./LogoAnimationFooter";


export default function Footer() {
  return (
    <>


      <motion.div
        className="footer p-[10px] text-[15px] "
        style={{
          width: "100%",     
          backgroundColor:"#000",   
          borderRadius: "3px",
          padding:"55px",
        }}
        initial={{ opacity: 1, y: 200, scale: 0.7 }}
        animate={{ opacity: 1, y: 200, scale: 0.7 }}
        whileInView={{ opacity: 1, y: 50, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2, type: "tween" }}
      >
 

 <div class="grid  sm:grid sm:grid-cols-1   md:grid md:grid-cols-1  lg:grid lg:grid-cols-2  xl:grid xl:grid-cols-2 text-center"     >
  <div className="foo-left" style={{ backgroundImage:"foo-left-bg.svg", }} >   
  <div>
  <p>We are Two brother small team for creative website and development from kolkata, India.</p>
  <p> Only Available in Upwork .</p>
  </div>
  <div class="flex flex-row tech-logo pt-10">
          <div class="basis-1/4"><img src="React-icon.svg" alt="React Js" /></div>
          <div class="basis-1/4"><img src="Tailwind_CSS_Logo.svg" alt="Tailwind CSS" /></div>
          <div class="basis-1/4"><img src="strapiIcon.svg" alt="Strapi" /></div>
          <div class="basis-1/4"><img src="Three.js_Icon.svg" alt="Three Js" /></div>
          <div class="basis-1/4"><img src="Figma-logo.svg" alt="Figma" /></div>
        </div>
  </div>
   <div className="foo-right" >    
   <div style={{width:"80%" , margin:"auto", textAlign:"center", }}>
 <LogoAnimationFooter />
  </div>
    <div style={{width:"80%" ,  margin:"auto", textAlign:"center",  marginTop:"30px", }}>
  <FooterTypeAnimation /> 
  </div>
  </div>
</div>
      </motion.div>
    </>
  );
}
