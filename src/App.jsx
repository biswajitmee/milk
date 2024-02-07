 
import React, { useLayoutEffect, useRef } from 'react';

 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
 
 gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import ScrollSection from './ScrollSection';
 
 


function App() {
 
  const main = useRef();
  const smoother = useRef();




  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // create the smooth scroller FIRST!
      smoother.current = ScrollSmoother.create({
        smooth: 5, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });
    
    }, main);
    return () => ctx.revert();
  }, []);

  return (    
        <>

<div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
<div className="mainScroll noisebg">
 
 <div className="navigation" style={{ marginTop:"-25px", position:"fixed", width:"100%", height:"95px", zIndex:9, backgroundColor:"rgba(0,0,0,0.5)", }}>
              <div class="flex flex-row">
                <div class="basis-1/2  ">
                  <div class="flex flex-row pt-10 ">
                    <div className='pl-6 pb-6'><img src="fb.svg" /></div>
                    <div className='pl-6 pb-6'><img src="insta.svg" /></div>
                    <div className='pl-6 pb-6'><img src="linkdin.svg" /></div>
                  </div>
                  <div className="borderDashed"></div>
                </div>

                <div >
                  <div className="logo-border">
                    <div className="logo-bg flex items-center justify-center">
                      <img src="logo.png" /> </div>
                  </div>
                </div>

                <div class="basis-1/2 text-right">
                  <div class="flex justify-end pt-12">
                    <div className="menuicon pr-6 pb-6">
                      <img src="menu-icon.svg" className='text-right' />
                    </div>
                  </div>
                  <div className="borderDashed"></div>
                </div>
              </div>
            </div>

           
   <ScrollSection />
 
 

 
</div>
</div>
</div>
 
        </>
   
  );
}

export default App;
