import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { gsap } from 'gsap';
import MilkBottle from './components/MilkBottle';

function FloatingMilkBottle(props) {
    const meshRef = useRef();

    useEffect(() => {
        // Ensure the mesh is loaded
        if (meshRef.current) {
            const timeline = gsap.timeline({ repeat: -1, yoyo: true });

            // Add floating animation
            timeline.to(meshRef.current.position, {
                duration: 2,
                y: "+=0.6", // Move up
                ease: "sine.inOut",
            });

            // Add spinning animation
            timeline.to(meshRef.current.rotation, {
                duration: 3,
                y: "+=0.4", // Rotate slightly on Y axis
                ease: "sine.inOut",
            }, 0); // Start this animation at the beginning of the timeline
        }
    }, []);

    return (
        <mesh ref={meshRef} {...props}>
            <MilkBottle />
        </mesh>
    );
}

function FloatingEffectScene() {
    return (
        <Canvas style={{ width: "100%", height: "80vh" }}>
            <ambientLight intensity={0.2} />
            <directionalLight />
            <FloatingMilkBottle position={[0, -2.5, 1]} />
        </Canvas>
    );
}

export default FloatingEffectScene;
