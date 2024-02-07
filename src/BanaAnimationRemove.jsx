import React from 'react'

function BanaAnimationRemove() {

  const BanaAnimationRemoveTL = () => {
    const BanaAnimationRemove = gsap.timeline();
    const banana_1R = gsap.timeline();
    const banana_2R = gsap.timeline();
    const banana_3R = gsap.timeline();
    const banana_4R = gsap.timeline();
    const banana_5R = gsap.timeline();
    const banana_6R = gsap.timeline();  

    banana_1R.fromTo('.banana_1', {   }, {  });
    banana_1R.fromTo('.banana_2', {  },  {   });    
    banana_1R.fromTo('.banana_3', {   },  {   });
    banana_1R.fromTo('.banana_4', {   }, {  });
    banana_1R.fromTo('.banana_5', {  },  {   });    
    banana_1R.fromTo('.banana_6', {   },  {   });
         
    BanaAnimationRemove.add(banana_1, 0.1);
    BanaAnimationRemove.add(banana_2, 0.2);
    BanaAnimationRemove.add(banana_3, 0.3);
    BanaAnimationRemove.add(banana_4, 0.4);
    BanaAnimationRemove.add(banana_5, 0.5);
    BanaAnimationRemove.add(banana_6, 0.5);

    return BanaAnimationRemove;           
  }




  
  return (
    <div>
      
    </div>
  )
}

export default BanaAnimationRemove