import React, { useState, useEffect } from 'react';
import AnimatedTextCharacter from './SplitTextCharacter';
import { useInView } from 'react-intersection-observer';

function AnimatedTextSequence() {
  const sequence = [
    'Unlocking Digital  Potential',
    'Empowering Your Digital Vision',
    'A Symphony of Animation and Interaction',
    'Transforming Ideas into Realities',
  ];

  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState(sequence[0]);
  const [animationKey, setAnimationKey] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setCurrentLine(sequence[sequenceIndex]);
      setAnimationKey(animationKey + 1); // This will trigger the animation to restart
    }
  }, [inView, sequenceIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSequenceIndex((prevIndex) => (prevIndex + 1) % sequence.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [animationKey]); // Restart the sequence when animationKey changes

  return (
    <div style={{ display: 'inline-block' }}>
      <div ref={ref}>
        <AnimatedTextCharacter key={animationKey} text={currentLine} animate={inView} />
      </div>
    </div>
  );
}

export default AnimatedTextSequence;
