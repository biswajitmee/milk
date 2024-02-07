 
import React, { useCallback, useEffect } from 'react';
import { gsap } from 'gsap';


  
const ChocolateAnimation = ({ isActive }) => {

                   
    const chocolateAnimationApearTL = useCallback(() => {

        const chocolateAnimationApear = gsap.timeline(); 
        
        const chocolate_flowColorBG = gsap.timeline({ duration:6,  });

        const chocolate_flowBg_1 = gsap.timeline();
        const chocolate_flowBg_2 = gsap.timeline();
        const chocolate_flowBg_3 = gsap.timeline();
        const chocolate_flowBg_4 = gsap.timeline();

        const chocolate_1 = gsap.timeline();
        const chocolate_2 = gsap.timeline();
        const chocolate_3 = gsap.timeline();
        const chocolate_4 = gsap.timeline();
        const chocolate_5 = gsap.timeline();
        const chocolate_6 = gsap.timeline();  
        const chocolate_7 = gsap.timeline();  
        const chocolate_8 = gsap.timeline();  
        

        // chocolate_flowBg_1.fromTo('.flowColor_1', {  scale:0.5, opacity:0, backgroundColor:"#D2A74E", }, { scale:10,   duration:8, opacity:1,    repeat:1  },);
        // chocolate_flowBg_1.fromTo('.slide', {  delay:5 }, { backgroundColor:"rgba(217,62,65, 0.2)",  },);


        chocolate_flowBg_1.fromTo('.flowColor_1', {  scale:0.5, opacity:1, backgroundColor:"#D2A74E", }, { scale:4,   duration:8,   opacity:0, repeat:-1  },);
        chocolate_flowBg_2.fromTo('.flowColor_2', {  scale:0.5, opacity:1 , backgroundColor:"#4A221B", }, { scale:4,   duration:8,   opacity:0,  repeat:-1  },"+2");
        chocolate_flowBg_3.fromTo('.flowColor_3', {  scale:0.5, opacity:1 ,  backgroundColor:"#8F5C40", }, { scale:4,   duration:8,    opacity:0,  repeat:-1 },"+4");
        chocolate_flowBg_3.fromTo('.flowColor_4', {  scale:0.5, opacity:1 ,  backgroundColor:"#D93E41", }, { scale:4,   duration:8,    opacity:0,  repeat:-1 },"+6");







        chocolate_1.fromTo('.chocolate_1', { position:"absolute",  top: "110%", left: "50%", opacity:0, },
        {  top: "30%", left: "35%", opacity:1, ease: "power1.inOut", zIndex:9   });
        chocolate_1.fromTo('.chocolate_1', {  rotate:0,  repeat:-1, },
        {    rotate:360, duration:50,  });
         
        chocolate_2.fromTo('.chocolate_2', { position:"absolute",  top: "130%", left: "50%", opacity:0, },
        {  top: "55%", left: "30%", opacity:1, ease: "power1.inOut", zIndex:9  });   

        chocolate_2.fromTo('.chocolate_2', {  rotate:0,repeat:-1, },
        {  rotate:360, duration:45,  });  
       
        chocolate_3.fromTo('.chocolate_3', { position:"absolute",  top: "130%", left: "50%", opacity:0, },
        {  top: "80%", left: "30%", opacity:1,ease: "power1.inOut",  zIndex:9  });
        chocolate_3.fromTo('.chocolate_3', {  rotate:0, },
        {  rotate:360, duration:55, repeat:-1, });

         
        chocolate_4.fromTo('.chocolate_4', { position:"absolute",  top: "140%", left: "50%", opacity:0, },
        {  top: "100%", left: "35%", opacity:1,ease: "power1.inOut", zIndex:9  });

        chocolate_4.fromTo('.chocolate_4', {  rotate:0, },
        {   rotate:360, duration:50, repeat:-1, });

         

        chocolate_5.fromTo('.chocolate_5', { position:"absolute",  top: "140%", left: "50%", opacity:0, },
        {  top: "35%", left: "60%", opacity:1,ease: "power1.inOut",  zIndex:9 });
        chocolate_5.fromTo('.chocolate_5', {  rotate:0, },
        {  rotate:360, duration:55, repeat:-1, });
         
        chocolate_6.fromTo('.chocolate_6', { position:"absolute",  top: "150%", left: "50%", opacity:0, },
        {  top: "55%", left: "65%",  opacity:1,ease: "power1.inOut",  zIndex:9 });
        chocolate_6.fromTo('.chocolate_6', {  rotate:0, },
        {  rotate:360, duration:55, repeat:-1, });
          
        chocolate_7.fromTo('.chocolate_7', { position:"absolute",  top: "150%", left: "50%",opacity:0,},
        {  top: "75%", left: "65%",  opacity:1,ease: "power1.inOut",  zIndex:9  });
        chocolate_7.fromTo('.chocolate_7', {  rotate:0, },
        {  rotate:360, duration:55, repeat:-1, });
         
        chocolate_8.fromTo('.chocolate_8', { position:"absolute",  top: "160%", left: "50%",  },
        {  top: "105%", left: "60%", opacity:1,ease: "power1.inOut", zIndex:9  });
        chocolate_8.fromTo('.chocolate_8', {   rotate:0,},
        {  rotate:360, duration:55, repeat:-1, });
        

        chocolateAnimationApear.add(chocolate_1, 2.1);
        chocolateAnimationApear.add(chocolate_2, 2.2);
        chocolateAnimationApear.add(chocolate_3, 2.3);
        chocolateAnimationApear.add(chocolate_4, 2.4);
        chocolateAnimationApear.add(chocolate_5, 2.5);
        chocolateAnimationApear.add(chocolate_6, 2.1);
        chocolateAnimationApear.add(chocolate_7, 2.1);
        
 


        chocolate_flowColorBG.add(chocolate_flowBg_1, 0);
        chocolate_flowColorBG.add(chocolate_flowBg_2, 0);
        chocolate_flowColorBG.add(chocolate_flowBg_3, 0);
        chocolate_flowColorBG.add(chocolate_flowBg_4, 0);

        
        chocolateAnimationApear.add(chocolate_flowColorBG, 3);
        
        return chocolateAnimationApear;   
        }, []);


        const generateRandomPosition = () => {
            // Here you can define the range of your random values 
            // For example, random values between -100% and 100%
            const randomX = Math.random() * 200 - 100; // Value between -100 and 100
            return `${randomX}%`;
          };

          
        const chocolateAnimationRemoveTL = useCallback(() => {

            const chocolateAnimationRemove = gsap.timeline(); 
            const chocolate_11 = gsap.timeline();
            const chocolate_22 = gsap.timeline();
            const chocolate_33 = gsap.timeline();
            const chocolate_44 = gsap.timeline();
            const chocolate_55 = gsap.timeline();
            const chocolate_66 = gsap.timeline();  
            const chocolate_77 = gsap.timeline();  
            const chocolate_88 = gsap.timeline();  
            
            chocolate_11.fromTo('.chocolate_1', {  top: "30%", left: "35%", opacity:1, ease: "power1.inOut", } , { position:"absolute",  top: "110%", left: "50%", opacity:0, });
       
            chocolate_22.fromTo('.chocolate_2', 
            {  top: "55%", left: "30%", opacity:1, ease: "power1.inOut", } , { position:"absolute",  top: "130%", left: "50%", opacity:0, });   
                      
            chocolate_33.fromTo('.chocolate_3', 
            {  top: "80%", left: "30%", opacity:1,ease: "power1.inOut",  } , { position:"absolute",  top: "130%", left: "50%", opacity:0, });
                       
            chocolate_44.fromTo('.chocolate_4', 
            {  top: "100%", left: "35%", opacity:1,ease: "power1.inOut", }, { position:"absolute",  top: "140%", left: "50%", opacity:0, });
              
            chocolate_55.fromTo('.chocolate_5', 
            {  top: "35%", left: "60%", opacity:1,ease: "power1.inOut", }, { position:"absolute",  top: "140%", left: "50%", opacity:0, });
                 
            chocolate_66.fromTo('.chocolate_6', 
            {  top: "55%", left: "65%",  opacity:1,ease: "power1.inOut",}, { position:"absolute",  top: "150%", left: "50%", opacity:0, });
                  
            chocolate_77.fromTo('.chocolate_7',
            {  top: "75%", left: "65%",  opacity:1,ease: "power1.inOut",} ,  { position:"absolute",  top: "150%", left: "50%",opacity:0,});
                 
            chocolate_88.fromTo('.chocolate_8', 
            {  top: "105%", left: "60%", opacity:1,ease: "power1.inOut", } , { position:"absolute",  top: "160%", left: "50%",  });
            
       
             
            chocolateAnimationRemove.add(chocolate_11, 0.1);
            chocolateAnimationRemove.add(chocolate_22, 0.2);
            chocolateAnimationRemove.add(chocolate_33, 0.3);
            chocolateAnimationRemove.add(chocolate_44, 0.4);
            chocolateAnimationRemove.add(chocolate_55, 0.5);
            chocolateAnimationRemove.add(chocolate_66, 0.6);
            chocolateAnimationRemove.add(chocolate_77, 0.7);
            chocolateAnimationRemove.add(chocolate_88, 0.8);
            
            return chocolateAnimationRemove;   
            }, []);



        
            useEffect(() => {
                const appearTimeline = chocolateAnimationApearTL();
                const removeTimeline = chocolateAnimationRemoveTL();
          
                if (isActive) {
                    appearTimeline.invalidate().play();
                } else {
                    removeTimeline.invalidate().play();
                }
            }, [isActive, chocolateAnimationApearTL, chocolateAnimationRemoveTL]);




  return (
     <>

    <div class="  w-full flex justify-center items-center relative"  >

    <div class=" w-60 h-60 z-10 flowColor_1"> </div>
    <div class="  w-60 h-60 z-10 flowColor_2"> </div>
    <div class="  w-60 h-60 z-10 flowColor_3"> </div>
    <div class="  w-60 h-60 z-10 flowColor_4"> </div>
         <div class="centered w-80 h-80 z-10"><img src="chocolate.svg"/></div>
        <div class=" centered3 w-60 h-60 z-20"><img src="chocolate-bottle.png "/></div>
        <div class="centered w-80 h-80 z-30"><img src="chocolate_line.svg"/></div>
        <div class="centered1 w-80 h-80 z-10"><img src="milk-bounce.png"/></div>
    </div>  



          <div className="chocolateLayer" >
                <img src='chocolate_1.svg' className='chocolate_1'  />
                <img src='chocolate_2.svg' className='chocolate_2'/>
                <img src='chocolate_3.svg' className='chocolate_3'/>
                <img src='chocolate_4.svg' className='chocolate_4'/>
                <img src='chocolate_5.svg' className='chocolate_5'/>
                <img src='chocolate_6.svg' className='chocolate_6'/>
                <img src='chocolate_7.svg' className='chocolate_7'/>
                <img src='chocolate_8.svg' className='chocolate_8'/>
            </div>
            </>
  
  )
}

export default ChocolateAnimation