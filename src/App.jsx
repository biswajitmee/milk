import React, { useState } from 'react';
import MainMenu from './Menu';
import MatterAnimation from './MatterAnimation';
import ScrollSection from './ScrollSection';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <div>
      <MainMenu />
      {!loadingComplete && <MatterAnimation onLoadComplete={handleLoadComplete} />}
      {loadingComplete && (
        <>
          <ScrollSection />    
        </>
      )}
    </div>
  );
}

export default App;
