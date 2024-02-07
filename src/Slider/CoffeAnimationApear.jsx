 
import React, { useCallback, useEffect } from 'react';
import { gsap } from 'gsap';


  
const CoffeeBeansAnimation = ({ isActive }) => {

                   
    const coffeeBeansAnimationApearTL = useCallback(() => {

        const coffeeBeansAnimationApear = gsap.timeline(); 
        
        const coffeeBeans_1 = gsap.timeline();
        const coffeeBeans_2 = gsap.timeline();
        const coffeeBeans_3 = gsap.timeline();
        const coffeeBeans_4 = gsap.timeline();
        const coffeeBeans_5 = gsap.timeline();
        const coffeeBeans_6 = gsap.timeline();  
        const coffeeBeans_7 = gsap.timeline();  
        const coffeeBeans_8 = gsap.timeline();  
        const coffeeBeans_9 = gsap.timeline();  
        const coffeeBeans_10 = gsap.timeline();  
        
        coffeeBeans_1.fromTo('.coffeeBeans_1', { position:"absolute",  top: "-20%", left: "-50%", opacity:0,},
        {  top: "40%", left: "35%", opacity:1, scale:1.3  });

         coffeeBeans_1.fromTo('.coffeeBeans_1', { duration:60, y:0 ,  repeat:-1,  },{  rotate:360, duration:60, y:-40 });
         coffeeBeans_1.fromTo('.coffeeBeans_1', { duration:60, y:-40,  repeat:-1, },{ rotate:360,  duration:60, y:0 });




        coffeeBeans_2.fromTo('.coffeeBeans_2', { position:"absolute",  top: "20%", left: "-50%", opacity:0, },
        {  top: "80%", left: "30%", opacity:1,scale:1.3 });    

        coffeeBeans_2.fromTo('.coffeeBeans_2', { duration:60, y:0  },{  rotate:360, duration:70, repeat:-1,  y:-60 });




        coffeeBeans_3.fromTo('.coffeeBeans_3', { position:"absolute",  top: "30%", left: "-50%", opacity:0, },
        {  top: "100%", left: "30%", opacity:1, scale:1.3});

         coffeeBeans_3.fromTo('.coffeeBeans_3', {   duration:60, y:0 } , {  rotate:360, duration:50, repeat:-1, y:-80  });




        coffeeBeans_4.fromTo('.coffeeBeans_4', { position:"absolute",  top: "40%", left: "-50%", opacity:0, },
        {  top: "120%", left: "35%", opacity:1, scale:1.3});

         coffeeBeans_4.fromTo('.coffeeBeans_4', {  duration:60,  y:0} , {  rotate:360, duration:70, repeat:-1,  y:-50 });







        coffeeBeans_5.fromTo('.coffeeBeans_5', { position:"absolute",  top: "30%", left: "-50%", opacity:0, },
        {  top: "55%", left: "75%", opacity:1,scale:1.3 });

         coffeeBeans_5.fromTo('.coffeeBeans_5', {   duration:60, y:0  },{  rotate:360, duration:70, repeat:-1,  y:140 });




        coffeeBeans_6.fromTo('.coffeeBeans_6', { position:"absolute",  top: "40%", left: "-50%", opacity:0, },
        {  top: "75%", left: "65%",  opacity:1, scale:1.3});

         coffeeBeans_6.fromTo('.coffeeBeans_6', {   duration:60, y:0  },{  rotate:360, duration:90, repeat:-1,  y:-80 });




        coffeeBeans_7.fromTo('.coffeeBeans_7', { position:"absolute",  top: "50%", left: "-50%",opacity:0,},
        {  top: "95%", left: "60%",  opacity:1, scale:1.3});

         coffeeBeans_7.fromTo('.coffeeBeans_7', {   duration:60, y:0  },{  rotate:360, duration:60, repeat:-1, y:-90  });





        coffeeBeans_8.fromTo('.coffeeBeans_8', { position:"absolute",  top: "60%", left: "-50%",  },
        {  top: "135%", left: "60%", opacity:1, scale:1.3});

        coffeeBeans_8.fromTo('.coffeeBeans_8', {   duration:60, y:0 } , {  rotate:360, duration:65, repeat:-1,  y:-90 });
        





        coffeeBeans_9.fromTo('.coffeeBeans_9', { position:"absolute",  top: "50%", left: "-50%",opacity:0,},
        {  top: "130%", left: "65%",  opacity:1, scale:1.3});

         coffeeBeans_7.fromTo('.coffeeBeans_9', {   duration:60, y:0  },{  rotate:360, duration:60, repeat:-1, y:-90  });





        coffeeBeans_10.fromTo('.coffeeBeans_10', { position:"absolute",  top: "60%", left: "-50%",  },
        {  top: "120%", left: "75%", opacity:1, scale:1.3});

        coffeeBeans_8.fromTo('.coffeeBeans_10', {   duration:60, y:0 } , {  rotate:360, duration:65, repeat:-1,  y:-90 });
        







        coffeeBeansAnimationApear.add(coffeeBeans_1, 2.1);
        coffeeBeansAnimationApear.add(coffeeBeans_2, 2.2);
        coffeeBeansAnimationApear.add(coffeeBeans_3, 2.3);
        coffeeBeansAnimationApear.add(coffeeBeans_4, 2.4);
        coffeeBeansAnimationApear.add(coffeeBeans_5, 2.5);
        coffeeBeansAnimationApear.add(coffeeBeans_6, 2.1);
        coffeeBeansAnimationApear.add(coffeeBeans_7, 2.1);
        coffeeBeansAnimationApear.add(coffeeBeans_8, 2.1);
        coffeeBeansAnimationApear.add(coffeeBeans_9, 2.1);
        coffeeBeansAnimationApear.add(coffeeBeans_10, 2.1);
        
        return coffeeBeansAnimationApear;   
        }, []);



        const coffeeBeansAnimationRemoveTL = useCallback(() => {

            const coffeeBeansAnimationRemove = gsap.timeline(); 
            const coffeeBeans_11 = gsap.timeline();
            const coffeeBeans_22 = gsap.timeline();
            const coffeeBeans_33 = gsap.timeline();
            const coffeeBeans_44 = gsap.timeline();
            const coffeeBeans_55 = gsap.timeline();
            const coffeeBeans_66 = gsap.timeline();  
            const coffeeBeans_77 = gsap.timeline();  
            const coffeeBeans_88 = gsap.timeline();  
            



            
            coffeeBeans_11.fromTo('.coffeeBeans_1', 
            {  top: "30%", left: "35%", opacity:1,  } , { left: "-50%", opacity:0,     });
               
           coffeeBeans_22.fromTo('.coffeeBeans_2',   
           {  top: "50%", left: "30%", opacity:1, },{   left: "-50%", opacity:0, });    
         
           coffeeBeans_33.fromTo('.coffeeBeans_3', {  top: "80%", left: "30%", opacity:1, } ,
            { position:"absolute",  top: "30%", left: "-50%", opacity:0, });
           
           coffeeBeans_44.fromTo('.coffeeBeans_4', {  top: "90%", left: "35%", opacity:1, } ,
            { left: "-50%", opacity:0, });
           
           coffeeBeans_55.fromTo('.coffeeBeans_5', {  top: "25%", left: "55%", } ,
            {left: "-50%",  opacity:0, } );
         
           coffeeBeans_66.fromTo('.coffeeBeans_6', {  top: "55%", left: "55%", } ,
             {left: "-50%",   opacity:0,  } );
     
           coffeeBeans_77.fromTo('.coffeeBeans_7', {  top: "65%", left: "65%", } ,
            {left: "-50%",  opacity:0,  });
      
              coffeeBeans_88.fromTo('.coffeeBeans_8', {  top: "85%", left: "55%", } , 
           {left: "-50%", opacity:0,  });
       






           
             
            coffeeBeansAnimationRemove.add(coffeeBeans_11, 0.1);
            coffeeBeansAnimationRemove.add(coffeeBeans_22, 0.2);
            coffeeBeansAnimationRemove.add(coffeeBeans_33, 0.3);
            coffeeBeansAnimationRemove.add(coffeeBeans_44, 0.4);
            coffeeBeansAnimationRemove.add(coffeeBeans_55, 0.5);
            coffeeBeansAnimationRemove.add(coffeeBeans_66, 0.5);
            coffeeBeansAnimationRemove.add(coffeeBeans_77, 0.5);
            coffeeBeansAnimationRemove.add(coffeeBeans_88, 0.5);
            
            return coffeeBeansAnimationRemove;   
            }, []);



        
            useEffect(() => {
                const appearTimeline = coffeeBeansAnimationApearTL();
                const removeTimeline = coffeeBeansAnimationRemoveTL();
          
                if (isActive) {
                    appearTimeline.invalidate().play();
                } else {
                    removeTimeline.invalidate().play();
                }
            }, [isActive, coffeeBeansAnimationApearTL, coffeeBeansAnimationRemoveTL]);




  return (
   
      <>
<div class="  w-full flex justify-center items-center relative"  >

 
<div class=" w-60 h-60 z-10 flowColor_1"> </div>
<div class="  w-60 h-60 z-10 flowColor_2"> </div>
<div class="  w-60 h-60 z-10 flowColor_3"> </div>
<div class="  w-60 h-60 z-10 flowColor_4"> </div>
     <div class="centered w-80 h-80 z-10"><img src="coffee.svg"/></div>
    <div class=" centered3 w-60 h-60 z-20"><img src="coffee-bottle.png "/></div>
    <div class="centered w-80 h-80 z-30"><img src="coffee.svg"/></div>
    <div class="centered1 w-80 h-80 z-10"><img src="milk-bounce.png"/></div>
</div>  



      <div className="cofferLayer">
                <img src='coffeeBeans_1.svg' className='coffeeBeans_1' />
                <img src='coffeeBeans_2.svg' className='coffeeBeans_2' />
                <img src='coffeeBeans_3.svg' className='coffeeBeans_3' />
                <img src='coffeeBeans_4.svg' className='coffeeBeans_4' />
                <img src='coffeeBeans_5.svg' className='coffeeBeans_5' />
                <img src='coffeeBeans_6.svg' className='coffeeBeans_6' />
                <img src='coffeeBeans_1.svg' className='coffeeBeans_7' />
                <img src='coffeeBeans_3.svg' className='coffeeBeans_8' />
                <img src='coffeeBeans_5.svg' className='coffeeBeans_9' />
                <img src='coffeeBeans_6.svg' className='coffeeBeans_10' />
            </div>



            </>
    
  )
}

export default CoffeeBeansAnimation;