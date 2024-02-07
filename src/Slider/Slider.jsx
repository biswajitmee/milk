import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import BanaAnimation from './BananaAnimation';
import StrawberryAnimation from './StrawberryAnimation';
import ChocolateAnimation from './ChocolateAnimation';
import CoffeeBeansAnimation from './CoffeAnimationApear';
 



const Slider = () => {

    const [activeSlide, setActiveSlide] = useState(0);
    const slidesRef = useRef([]);
    
    slidesRef.current = [];

    const addToRefs = (el) => {
        if (el && !slidesRef.current.includes(el)) {
            slidesRef.current.push(el);
        }
    };




    useEffect(() => {
        slidesRef.current.forEach((slide, index) => {
            gsap.to(slide, {
                x: index === activeSlide ? '0%' : index < activeSlide ? '100%' : '100%',
                autoAlpha: index === activeSlide ? 1 : 0,
                duration: 1.5,
            });
        });
    }, [activeSlide]);


    const handleSlideClick = (index) => {
        if (index === activeSlide) {
          // If the clicked slide is already active, do nothing
          return;
        }
      
        // Apply the zoom effect to the clicked slide
        gsap.to(slidesRef.current[activeSlide], {
          scale: 0.8, // Scale down the current active slide
          opacity: 0, // Hide it
          duration: 0.5,
          onComplete: () => {
            // After the animation, set the new active slide and apply the zoom effect
            setActiveSlide(index);
            gsap.to(slidesRef.current[index], {
              scale: 1, // Scale up the clicked slide
              opacity: 1, // Show it
              duration: 0.5,
            });
          },
        });
      };
      
    const animationDuration = 100; // Example duration in milliseconds

    const startExitAnimation = (slideIndex) => {
       
        switch (slideIndex) {
            case 0:           
                break;
            case 1:               
                break;
            case 2:               
                break;
            case 3:               
                break;
            
            
        }
    };
    

    const [prevActiveSlide, setPrevActiveSlide] = useState(null);

    const handlePrev = () => {
       
        startExitAnimation(activeSlide);
    
         
        setTimeout(() => {
            setPrevActiveSlide(activeSlide);
            setActiveSlide(prev => prev - 1 < 0 ? slidesRef.current.length - 1 : prev - 1);
        }, animationDuration);  
    };


const handleNext = () => {
    
    startExitAnimation(activeSlide);

    
    setTimeout(() => {
        setPrevActiveSlide(activeSlide);
        setActiveSlide(prev => prev + 1 >= slidesRef.current.length ? 0 : prev + 1);
    }, animationDuration);
};

    
    const goToSlide = (index) => {
      setPrevActiveSlide(activeSlide);
      setActiveSlide(index);
    };


 



    return (
        <>
        <div className="slider-container w-full h-[60vh] relative  ">

                         <div className="slide chocolate-layer absolute w-full" ref={addToRefs} onClick={() => goToSlide(0)}>  

                                    <ChocolateAnimation isActive={activeSlide === 0} />    
                            </div>
                            


                            <div className="slide strawberry-layer absolute w-full" ref={addToRefs} onClick={() => goToSlide(1)}>
                                        {/* <div class="slide w-full flex justify-center items-center relative">
                                        <div class="centered w-80 h-80 z-10 name"><img src="strawberry.svg"/></div>
                                        <div class="w-60 h-60 z-20"><img src="strawberry-bottle.png"/></div>
                                        <div class="centered w-80 h-80 z-30 name"><img src='strawberry_line.svg' /></div>
                                        <div class="centered1 w-80 h-80 z-10"><img src="milk-bounce.png"/></div>
                                        </div> */}
                                         <StrawberryAnimation isActive={activeSlide === 1} />
                            </div>



                        <div className="slide coffee-layer absolute w-full" ref={addToRefs}>                
                                    {/* <div class="slide w-full  flex justify-center items-center relative">
                                    <div class="centered w-80 h-80 z-10 name"><img src="coffee.svg"/></div>
                                        <div class="w-60 h-60 z-20"><img src="coffee-bottle.png"/></div>
                                        <div class="centered w-80 h-80 z-30 name"><img src="coffee_line.svg"/></div>
                                        <div class="centered1 w-80 h-80 z-10"><img src="milk-bounce.png"/></div>
                                    </div> */}
                                     <CoffeeBeansAnimation isActive={activeSlide === 2} />
                        </div>



                    <div className="slide banan-layer absolute w-full" ref={addToRefs}>   
                                {/* <div class="slide w-full   flex justify-center items-center relative">
                                <div class="centered w-80 h-80 z-10 name"><img src="banana.svg"/></div>
                                        <div class="w-60 h-60 z-20"><img src="banana-bottle.png"/></div>
                                        <div class="centered w-80 h-80 z-30 name"><img src="banana_line.svg"/></div>  
                                        <div class="centered1 w-80 h-80 z-10"><img src="milk-bounce.png"/></div>              
                                </div> */}
                                <BanaAnimation isActive={activeSlide === 3}/>                       
                    </div>
      
        </div>
        
        <div className="arrowButton flex justify-between">
        <div className="leftArrow" onClick={handlePrev}>
            <img src='ArrowLeft.svg' />
        </div>

        <div className="rightArrow" onClick={handleNext}>
            <img src='ArrowRight.svg' />
        </div>
    </div>



 
    <div className="SelectLayerAnimation">
                <div class="container mx-auto gap-4">
                    <div class="grid grid-cols-1 gap-8 md:grid-cols-4">




                        <div className="selectCholateLayer " onClick={() => goToSlide(0)}>
                            <div className="upersection flex">
                                <div className="bottle">
                                    <img src='chocolate-bottle.png' />
                                </div>
                                <div className="round">
                                    <img src='chocolate_4.svg' />
                                </div>
                            </div>
                            <div className="undersectionCholate fontFmly">

                                <p>Chocolate Milk</p>

                            </div>

                        </div>

                        <div className="selectStrawberryLayer " onClick={() => goToSlide(1)}>

                            <div className="upersection flex">
                                <div className="bottle">
                                    <img src='strawberry-bottle.png' />
                                </div>
                                <div className="round">
                                    <img src='strawberry_1.svg' />
                                </div>
                            </div>
                            <div className="undersectionStrawberry fontFmly">

                                <p>Strawberry Milk</p>

                            </div>

                        </div>

                        <div className="selectCoffeLayer " onClick={() => goToSlide(2)}>

                            <div className="upersection flex">
                                <div className="bottle">
                                    <img src='coffee-bottle.png' />
                                </div>
                                <div className="round">
                                    <img src='coffeeBeans_2.svg' />
                                </div>
                            </div>
                            <div className="undersectionCoffe fontFmly">

                                <p>Coffee Milk</p>

                            </div>

                        </div>

                        
                        <div className="selectBananaLayer " onClick={() => goToSlide(3)}>

                            <div className="upersection flex">
                                <div className="bottle">
                                    <img src='banana-bottle.png' />
                                </div>
                                <div className="round">
                                    <img src='banana_2.svg' />
                                </div>
                            </div>
                            <div className="undersectionBanana fontFmly">

                                <p>Banana Milk</p>

                            </div>

                        </div>


                    </div>

                </div>
            </div>


    </>
    );
};

export default Slider;
