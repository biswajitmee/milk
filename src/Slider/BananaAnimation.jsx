 
import React, { useCallback, useEffect } from 'react';
import { gsap } from 'gsap';


  
const BanaAnimation = ({ isActive }) => {

                   
    const bananaAnimationApearTL = useCallback(() => {

        const bananaAnimationApear = gsap.timeline(); 
        
        const banana_1 = gsap.timeline();
        const banana_2 = gsap.timeline();
        const banana_3 = gsap.timeline();
        const banana_4 = gsap.timeline();
        const banana_5 = gsap.timeline();
        const banana_6 = gsap.timeline();  
        const banana_7 = gsap.timeline();  
        const banana_8 = gsap.timeline();  
        
        banana_1.fromTo('.banana_1', { position:"absolute",  top: "20%", left: "-50%", opacity:0,},{  top: "10%", left: "35%", opacity:1,  });
         banana_1.fromTo('.banana_1', { duration:60, y:0 ,  repeat:-1,  },{  rotate:360, duration:60, y:-40 });
         banana_1.fromTo('.banana_1', { duration:60, y:-40,  repeat:-1, },{ rotate:360,  duration:60, y:0 });

        banana_2.fromTo('.banana_2', { position:"absolute",  top: "20%", left: "-50%", opacity:0, },{  top: "45%", left: "30%", opacity:1, });    
        banana_2.fromTo('.banana_2', { duration:60, y:0  },{  rotate:360, duration:70, repeat:-1,  y:-60 });

        banana_3.fromTo('.banana_3', { position:"absolute",  top: "30%", left: "-50%", opacity:0, },{  top: "80%", left: "30%", opacity:1, });
         banana_3.fromTo('.banana_3', {   duration:60, y:0 } , {  rotate:360, duration:50, repeat:-1, y:-80  });

        banana_4.fromTo('.banana_4', { position:"absolute",  top: "40%", left: "-50%", opacity:0, },{  top: "100%", left: "35%", opacity:1, });
         banana_4.fromTo('.banana_4', {  duration:60,  y:0} , {  rotate:360, duration:70, repeat:-1,  y:-50 });


        banana_5.fromTo('.banana_5', { position:"absolute",  top: "40%", left: "-50%", opacity:0, },{  top: "25%", left: "55%", opacity:1, });
         banana_5.fromTo('.banana_5', {   duration:60, y:0  },{  rotate:360, duration:70, repeat:-1,  y:140 });

        banana_6.fromTo('.banana_6', { position:"absolute",  top: "50%", left: "-50%", opacity:0, },{  top: "55%", left: "55%",  opacity:1,});
         banana_6.fromTo('.banana_6', {   duration:60, y:0  },{  rotate:360, duration:90, repeat:-1,  y:-80 });

        banana_7.fromTo('.banana_7', { position:"absolute",  top: "50%", left: "-50%",opacity:0,},{  top: "65%", left: "65%",  opacity:1,});
         banana_7.fromTo('.banana_7', {   duration:60, y:0  },{  rotate:360, duration:60, repeat:-1, y:-90  });

        banana_8.fromTo('.banana_8', { position:"absolute",  top: "60%", left: "-50%",  },{  top: "85%", left: "55%", opacity:1, });
        banana_8.fromTo('.banana_8', {   duration:60, y:0 } , {  rotate:360, duration:65, repeat:-1,  y:-90 });
        

        bananaAnimationApear.add(banana_1, 2.1);
        bananaAnimationApear.add(banana_2, 2.2);
        bananaAnimationApear.add(banana_3, 2.3);
        bananaAnimationApear.add(banana_4, 2.4);
        bananaAnimationApear.add(banana_5, 2.5);
        bananaAnimationApear.add(banana_6, 2.1);
        bananaAnimationApear.add(banana_7, 2.1);
        bananaAnimationApear.add(banana_8, 2.1);
        
        return bananaAnimationApear;   
        }, []);



        const bananaAnimationRemoveTL = useCallback(() => {

            const bananaAnimationRemove = gsap.timeline(); 
            const banana_11 = gsap.timeline();
            const banana_22 = gsap.timeline();
            const banana_33 = gsap.timeline();
            const banana_44 = gsap.timeline();
            const banana_55 = gsap.timeline();
            const banana_66 = gsap.timeline();  
            const banana_77 = gsap.timeline();  
            const banana_88 = gsap.timeline();  
            
            banana_11.fromTo('.banana_1', 
            {  top: "30%", left: "35%", opacity:1,  } , { left: "-50%", opacity:0,     });
               
           banana_22.fromTo('.banana_2',   
           {  top: "50%", left: "30%", opacity:1, },{   left: "-50%", opacity:0, });    
         
           banana_33.fromTo('.banana_3', {  top: "80%", left: "30%", opacity:1, } ,
            { position:"absolute",  top: "30%", left: "-50%", opacity:0, });
           
           banana_44.fromTo('.banana_4', {  top: "90%", left: "35%", opacity:1, } ,
            { left: "-50%", opacity:0, });
           
           banana_55.fromTo('.banana_5', {  top: "25%", left: "55%", } ,
            {left: "-50%",  opacity:0, } );
         
           banana_66.fromTo('.banana_6', {  top: "55%", left: "55%", } ,
             {left: "-50%",   opacity:0,  } );
     
           banana_77.fromTo('.banana_7', {  top: "65%", left: "65%", } ,
            {left: "-50%",  opacity:0,  });
      
              banana_88.fromTo('.banana_8', {  top: "85%", left: "55%", } , 
           {left: "-50%", opacity:0,  });
       
             
            bananaAnimationRemove.add(banana_11, 0.1);
            bananaAnimationRemove.add(banana_22, 0.2);
            bananaAnimationRemove.add(banana_33, 0.3);
            bananaAnimationRemove.add(banana_44, 0.4);
            bananaAnimationRemove.add(banana_55, 0.5);
            bananaAnimationRemove.add(banana_66, 0.5);
            bananaAnimationRemove.add(banana_77, 0.5);
            bananaAnimationRemove.add(banana_88, 0.5);
            
            return bananaAnimationRemove;   
            }, []);



        
            useEffect(() => {
                const appearTimeline = bananaAnimationApearTL();
                const removeTimeline = bananaAnimationRemoveTL();
          
                if (isActive) {
                    appearTimeline.invalidate().play();
                } else {
                    removeTimeline.invalidate().play();
                }
            }, [isActive, bananaAnimationApearTL, bananaAnimationRemoveTL]);




  return (
 <>
 <div class="  w-full flex justify-center items-center relative"  >

 
<div class=" w-60 h-60 z-10 flowColor_1"> </div>
<div class="  w-60 h-60 z-10 flowColor_2"> </div>
<div class="  w-60 h-60 z-10 flowColor_3"> </div>
<div class="  w-60 h-60 z-10 flowColor_4"> </div>
     <div class="centered w-80 h-80 z-10"><img src="banana.svg"/></div>
    <div class=" centered3 w-60 h-60 z-20"><img src="banana-bottle.png "/></div>
    <div class="centered w-80 h-80 z-30"><img src="banana_line.svg"/></div>
    <div class="centered1 w-80 h-80 z-10"><img src="milk-bounce.png"/></div>
</div>  


           <div className="banaLayer">
                <img src='banana_1.svg' className='banana_1' />
                <img src='banana_2.svg' className='banana_2' />
                <img src='banana_3.svg' className='banana_3' />
                <img src='banana_4.svg' className='banana_4' />
                <img src='banana_5.svg' className='banana_5' />
                <img src='banana_6.svg' className='banana_6' />
            </div>



            </>
 
  )
}

export default BanaAnimation;