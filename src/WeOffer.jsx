import { motion } from "framer-motion";
import DesignTextEffect from "./DesignTextEffect";
import DevelopmentTextEffect from "./DevelopmentTextEffect";
import AnimationTextEffect from "./AnimationTextEffect";

const WeOffer = () => {
  return (
    <>
<div className="lineOfferMidle"></div>
        <div className="oferRow">
                  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2 2xl:grid-cols-2 ">
                    <div class="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1  xl:grid-cols-1 2xl:grid-cols-1  font-semibold items-center ">
                      <div>
                        <motion.div
                          className="offer-text"
                          style={{ backgroundColor: "#000" }}
                          initial={{
                            opacity: 0, 
                            width: "0",
                            height:"200px",  
                          }}
                          animate={{ opacity: 0,  scale: 1, }}
                          whileInView={{
                            opacity: 1, 
                            width: "100%",
                            height:"200px",  
                          }}
                          transition={{
                            duration: 0.6,
                            delay: 0.2,
                            type: "tween",
                          }}
                        >
                          <motion.div
                            style={{
                              width: "80%",
                              margin: "auto",
                              textAlign: "center",
                              alignContent: "center",
                            }}
                          >
                            <DesignTextEffect />
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                
  <div className="lineOfferMidle"></div>        

                <div className="oferRow">
                  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2 2xl:grid-cols-2 ">
                    <div></div>
                    <div class="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1  xl:grid-cols-1 2xl:grid-cols-1  font-semibold items-center ">
                      <div></div>
                      <div>
                        <motion.div
                          className="offer-text"
                          style={{ backgroundColor: "#000" }}
                          initial={{
                            opacity: 0,
                            height:"200px",  
                            width: "0",
                            
                          }}
                          animate={{ opacity: 0,   scale: 1 }}
                          whileInView={{
                            opacity: 1,                          
                            height:"200px", 
                            width: "100%",
                          }}
                          transition={{
                            duration: 0.6,
                            delay: 0.2,
                            type: "tween",
                          }}
                        >
                          <motion.div
                            style={{
                              width: "80%",
                              margin: "auto",
                              textAlign: "center",
                              alignContent: "center",
                            }}
                          >
                            <DevelopmentTextEffect />
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>


 <div className="lineOfferMidle"></div>


                <div className="oferRow">
                  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2 2xl:grid-cols-2 ">
                    <div class="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1  xl:grid-cols-1 2xl:grid-cols-1  font-semibold items-center ">
                      <div>
                        <motion.div
                          className="offer-text"
                          style={{ backgroundColor: "#000" }}
                          initial={{
                            opacity: 0,                           
                            height:"200px",  
                            width: 0,
                          }}
                          animate={{ opacity: 0,  scale: 1, }}
                          whileInView={{
                            opacity: 1,                            
                            height:"200px",  
                            width: "100%",
                          }}
                          transition={{
                            duration: 0.6,
                            delay: 0.2,
                            type: "tween",
                          }}
                        >
                          <motion.div
                            style={{
                              width: "80%",
                              margin: "auto",
                              textAlign: "center",
                              alignContent: "center",
                            }}
                          >
                            <AnimationTextEffect />
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>



    </>
  );
};

export default WeOffer;
