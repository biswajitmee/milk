 
import React, { useCallback, useEffect } from 'react';
import { gsap } from 'gsap';


  
const StrawberryAnimation = ({ isActive }) => {

                   
    const strawberryAnimationApearTL = useCallback(() => {

        const strawberryAnimationApear = gsap.timeline(); 
        
        const strawberry_1 = gsap.timeline();
        const strawberry_2 = gsap.timeline();
        const strawberry_3 = gsap.timeline();
        const strawberry_4 = gsap.timeline();
        const strawberry_5 = gsap.timeline();
        const strawberry_6 = gsap.timeline();  
        const strawberry_7 = gsap.timeline();  
        const strawberry_8 = gsap.timeline();  
        

        const strawberry_1r = gsap.timeline();
        const strawberry_2r = gsap.timeline();
        const strawberry_3r = gsap.timeline();
        const strawberry_4r = gsap.timeline();
        const strawberry_5r = gsap.timeline();
        const strawberry_6r = gsap.timeline();  
        const strawberry_7r = gsap.timeline();  
        const strawberry_8r = gsap.timeline();  


        strawberry_1.fromTo('.strawberry_1', { position:"absolute",  top: "20%", left: "-50%", opacity:0,},{  top: "30%", left: "35%", opacity:1,  });
         strawberry_1r.fromTo('.strawberry_1', { duration:60, y:0 ,  repeat:-1, delay:2,  },{  rotate:360, duration:60, y:-40,  repeat:-1,  });
         
        strawberry_2.fromTo('.strawberry_2', { position:"absolute",  top: "20%", left: "-50%", opacity:0, },{  top: "45%", left: "30%", opacity:1, });    
        strawberry_2r.fromTo('.strawberry_2', { duration:60, y:0 , delay:2,  },{  rotate:360, duration:70, repeat:-1,  y:-60,  repeat:-1,  });

        strawberry_3.fromTo('.strawberry_3', { position:"absolute",  top: "30%", left: "-50%", opacity:0, },{  top: "60%", left: "30%", opacity:1, });
         strawberry_3.fromTo('.strawberry_3', {   duration:60, y:0 , delay:2, } , {  rotate:360, duration:50, repeat:-1, y:-80 ,  repeat:-1,  });

        strawberry_4.fromTo('.strawberry_4', { position:"absolute",  top: "40%", left: "-50%", opacity:0, },{  top: "100%", left: "35%", opacity:1, });
         strawberry_4r.fromTo('.strawberry_4', {  duration:60,  y:0,  delay:2, } , {  rotate:360, duration:70, repeat:-1,  y:-50,  repeat:-1,  });


        strawberry_5.fromTo('.strawberry_5', { position:"absolute",  top: "40%", left: "-50%", opacity:0, },{  top: "55%", left: "55%", opacity:1, });
         strawberry_5r.fromTo('.strawberry_5', {   duration:60, y:0, delay:2,   },{  rotate:360, duration:70, repeat:-1,  y:140,  repeat:-1,  });

        strawberry_6.fromTo('.strawberry_6', { position:"absolute",  top: "50%", left: "-50%", opacity:0, },{  top: "75%", left: "55%",  opacity:1,});
         strawberry_6r.fromTo('.strawberry_6', {   duration:60, y:0 , delay:2,  },{  rotate:360, duration:90, repeat:-1,  y:-80,  repeat:-1,  });

        strawberry_7.fromTo('.strawberry_7', { position:"absolute",  top: "50%", left: "-50%",opacity:0,},{  top: "45%", left: "65%",  opacity:1,});
         strawberry_7r.fromTo('.strawberry_7', {   duration:60, y:0,  delay:2,   },{  rotate:360, duration:60, repeat:-1, y:-90 ,  repeat:-1,  });

        strawberry_8.fromTo('.strawberry_8', { position:"absolute",  top: "60%", left: "-50%",  },{  top: "85%", left: "55%", opacity:1, });
        strawberry_8r.fromTo('.strawberry_8', {   duration:60, y:0 ,  delay:2, } , {  rotate:360, duration:65, repeat:-1,  y:-90 ,  repeat:-1, });
        

        strawberryAnimationApear.add(strawberry_1, 2.1);
        strawberryAnimationApear.add(strawberry_2, 2.2);
        strawberryAnimationApear.add(strawberry_3, 2.3);
        strawberryAnimationApear.add(strawberry_4, 2.4);
        strawberryAnimationApear.add(strawberry_5, 2.5);
        strawberryAnimationApear.add(strawberry_6, 2.1);
        strawberryAnimationApear.add(strawberry_7, 2.1);
        strawberryAnimationApear.add(strawberry_8, 2.1);
        

        strawberryAnimationApear.add(strawberry_1r, 2.1);
        strawberryAnimationApear.add(strawberry_2r, 2.2);
        strawberryAnimationApear.add(strawberry_3r, 2.3);
        strawberryAnimationApear.add(strawberry_4r, 2.4);
        strawberryAnimationApear.add(strawberry_5r, 2.5);
        strawberryAnimationApear.add(strawberry_6r, 2.1);
        strawberryAnimationApear.add(strawberry_7r, 2.1);
        strawberryAnimationApear.add(strawberry_8r, 2.1);
        


        return strawberryAnimationApear;   
        }, []);



        const strawberryAnimationRemoveTL = useCallback(() => {

            const strawberryAnimationRemove = gsap.timeline(); 
            const strawberry_11 = gsap.timeline();
            const strawberry_22 = gsap.timeline();
            const strawberry_33 = gsap.timeline();
            const strawberry_44 = gsap.timeline();
            const strawberry_55 = gsap.timeline();
            const strawberry_66 = gsap.timeline();  
            const strawberry_77 = gsap.timeline();  
            const strawberry_88 = gsap.timeline();  
            
            
               
            strawberry_11.fromTo('.strawberry_1', {  top: "30%", left: "35%", opacity:1, ease: "power1.inOut", } , { position:"absolute",  top: "110%", left: "50%", opacity:0, });
       
            strawberry_22.fromTo('.strawberry_2', 
            {  top: "55%", left: "30%", opacity:1, ease: "power1.inOut", } , { position:"absolute",  top: "130%", left: "50%", opacity:0, });   
                      
            strawberry_33.fromTo('.strawberry_3', 
            {  top: "80%", left: "30%", opacity:1,ease: "power1.inOut",  } , { position:"absolute",  top: "130%", left: "50%", opacity:0, });
                       
            strawberry_44.fromTo('.strawberry_4', 
            {  top: "100%", left: "35%", opacity:1,ease: "power1.inOut", }, { position:"absolute",  top: "140%", left: "50%", opacity:0, });
              
            strawberry_55.fromTo('.strawberry_5', 
            {  top: "35%", left: "60%", opacity:1,ease: "power1.inOut", }, { position:"absolute",  top: "140%", left: "50%", opacity:0, });
                 
            strawberry_66.fromTo('.strawberry_6', 
            {  top: "55%", left: "65%",  opacity:1,ease: "power1.inOut",}, { position:"absolute",  top: "150%", left: "50%", opacity:0, });
                  
            strawberry_77.fromTo('.strawberry_7',
            {  top: "75%", left: "65%",  opacity:1,ease: "power1.inOut",} ,  { position:"absolute",  top: "150%", left: "50%",opacity:0,});
                 
            strawberry_88.fromTo('.strawberry_8', 
            {  top: "105%", left: "60%", opacity:1,ease: "power1.inOut", } , { position:"absolute",  top: "160%", left: "50%",  });
            
       
             
            strawberryAnimationRemove.add(strawberry_11, 0.1);
            strawberryAnimationRemove.add(strawberry_22, 0.2);
            strawberryAnimationRemove.add(strawberry_33, 0.3);
            strawberryAnimationRemove.add(strawberry_44, 0.4);
            strawberryAnimationRemove.add(strawberry_55, 0.5);
            strawberryAnimationRemove.add(strawberry_66, 0.5);
            strawberryAnimationRemove.add(strawberry_77, 0.5);
            strawberryAnimationRemove.add(strawberry_88, 0.5);
            
            return strawberryAnimationRemove;   
            }, []);



        
            useEffect(() => {
                const appearTimeline = strawberryAnimationApearTL();
                const removeTimeline = strawberryAnimationRemoveTL();
          
                if (isActive) {
                    appearTimeline.invalidate().play();
                } else {
                    removeTimeline.invalidate().play();
                }
            }, [isActive, strawberryAnimationApearTL, strawberryAnimationRemoveTL]);


 
  return (
    <>

<div class="  w-full flex justify-center items-center relative"  >

 
<div class=" w-60 h-60 z-10 flowColor_1"> </div>
<div class="  w-60 h-60 z-10 flowColor_2"> </div>
<div class="  w-60 h-60 z-10 flowColor_3"> </div>
<div class="  w-60 h-60 z-10 flowColor_4"> </div>
     <div class="centered w-80 h-80 z-10"><img src="strawberry.svg"/></div>
    <div class=" centered3 w-60 h-60 z-20"><img src="strawberry-bottle.png "/></div>
    <div class="centered w-80 h-80 z-30"><img src="strawberry_line.svg"/></div>
    <div class="centered1 w-80 h-80 z-10"><img src="milk-bounce.png"/></div>
</div>  


    <div className="strawberyLayer">
      <img src='strawberry_1.svg' className='strawberry_1' alt="Banana 1" />
      <img src='strawberry_2.svg' className='strawberry_2' alt="Banana 2" />
      <img src='strawberry_3.svg' className='strawberry_3' alt="Banana 3" />
      <img src='strawberry_4.svg' className='strawberry_4' alt="Banana 4" />
      <img src='strawberry_5.svg' className='strawberry_5' alt="Banana 5" />
      <img src='strawberry_6.svg' className='strawberry_6' alt="Banana 6" />
    </div>

    </>
  );
};

export default StrawberryAnimation;
