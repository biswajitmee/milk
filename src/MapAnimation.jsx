import React from 'react'

export default function MapAnimation() {
  return (
    < >
     <div style={{position:"relative",  width: "100vw", height: "100vh",}}>
     <Canvas
                  style={{ width: "100vw", height: "100vh", marginTop: " 0px" }}
                >
                  <Globe position={[0, 0.5, 4.5]} />
                  <pointLight
                    position={[1, 0, 1]}
                    color="#AD00FF"
                    intensity={0.5}
                  />
                  <pointLight
                    position={[-1, 0, -1]}
                    color="#0044FF"
                    intensity={0.5}
                  />
                </Canvas>
                </div>

    </ >
  )
}
