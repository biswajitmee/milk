import React, { useEffect, useRef, useState } from 'react';
import MatterConfigure from './MatterConfigure';

const MatterAnimation = ({ onLoadComplete }) => {
  const containerRef = useRef(null);
  const [animationRunning, setAnimationRunning] = useState(true);

  useEffect(() => {
    const runMatterAnimation = () => {
      const { engine, render, runner } = MatterConfigure();

      // Attach the Matter.js rendering to the container element using the ref
      render.canvas.style.position = 'static';
      render.canvas.style.width = '100%';
      render.canvas.style.height = '100%';
      containerRef.current.appendChild(render.canvas);

      const stopAnimation = () => {
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
        setAnimationRunning(false);
      };

      // Clean up the Matter.js renderer and runner when the component unmounts
      return () => {
        stopAnimation();
      };
    };

    runMatterAnimation();
  }, []);

  const handleStopClick = () => {
    if (animationRunning) {
      onLoadComplete(); // Notify parent component that loading is complete
      setAnimationRunning(false);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }} ref={containerRef}>
      {animationRunning && (
        <div
          className="close-btn"
          style={{
            position: 'absolute',
            left: '25px',
            top: '25px',
            background: 'black',
            color: 'white',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            borderRadius: '50%',
            zIndex: '999',
          }}
          onClick={handleStopClick}
        >
          X
        </div>
      )}
    </div>
  );
};

export default MatterAnimation;
