import React from 'react'
import { motion } from 'framer-motion';
export default function ProfilePage() {
  return (
    < >
     
     <div className="container px-5 mx-auto">

     <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  xl:grid-cols-1 2xl:grid-cols-1  font-semibold items-center ">
     <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3  xl:grid-cols-3 2xl:grid-cols-3     font-semibold items-center gap-4">
                        <div >
                    <motion.div
                    initial={{ opacity: 0, x:200,  scale:0.5, }} 
                    animate={{ opacity: 0, x:200,scale:0.5,   }}
                    whileInView={{opacity:1, x:0, scale:1,}}
                    transition={{ duration: 0.6,  delay:0.2, type:'tween' }}     
                  >  
                 <div   className="card relative ">
                      <div className="bg-[url('/biswajit.jpg')] min-h-[450px] rounded-[7px]">
                        <div className=" gradiantBG min-h-[130px] absolute bottom-0 left-0 w-full mb-20 pl-12">
                          <h1 className=" text-gray-100 pt-9 pl-5">
                            Designer & Frontend Developer
                          </h1>
                          <h1 className=" text-gray-100 pl-5 tracking-[.35em]">
                            Biswajit Halder
                          </h1>
                        </div>
                      </div>
                      <div className="flex flex-row text-4xl p-3 text-center">
                        <div className="p-2 w-16">
                          <img src="fb.svg" />
                        </div>
                        <div className="p-2 w-16">
                          <img src="dribble.svg" />
                        </div>
                        <div className="p-2 w-16">
                          <img src="skype.svg" />
                        </div>
                        <div className="p-2 w-16">
                          <img src="github.svg" />
                        </div>
                        <div className="p-2 w-16">
                          <img src="pinterest.svg" />
                        </div>
                      </div>
                      </div>
                    </motion.div>
                  </div>







                  <div >
                    <motion.div
                    initial={{ opacity: 0, x:200,  scale:0.5, }} 
                    animate={{ opacity: 0, x:200,scale:0.5,   }}
                    whileInView={{opacity:1, x:0, scale:1,}}
                    transition={{ duration: 0.6,  delay:0.2, type:'tween' }}     
                  >  
                 <div   className="card relative ">
                      <div className="bg-[url('/prosenjit.jpg')] min-h-[350px] rounded-[7px] ">
                        <div className=" gradiantBG min-h-[130px] absolute bottom-0 left-0 w-full mb-20 pl-12">
                          <h1 className=" text-gray-100 pt-9 pl-5">
                            Fullstuck  Developer
                          </h1>
                          <h1 className=" text-gray-100 pl-5 tracking-[.35em]">
                            Prosenjit Halder
                          </h1>
                        </div>
                      </div>
                      <div className="flex flex-row text-4xl p-3 text-center">
                        <div className="p-2 w-16">
                          <img src="fb.svg" />
                        </div>
                        <div className="p-2 w-16">
                          <img src="dribble.svg" />
                        </div>
                        <div className="p-2 w-16">
                          <img src="skype.svg" />
                        </div>
                        <div className="p-2 w-16">
                          <img src="github.svg" />
                        </div>
                        <div className="p-2 w-16">
                          <img src="pinterest.svg" />
                        </div>
                      </div>
                      </div>
                    </motion.div>
                  </div>


 

                 
                </div>

                </div>
              </div>
    </ >
  )
}
