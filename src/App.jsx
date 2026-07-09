import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import BikingGallery from './pages/BikingGallery';
import CertificationPage from './pages/CertificationPage';

function App() {
  const [currentView, setCurrentView] = useState(
    window.location.hash === '#biking' 
      ? 'biking' 
      : window.location.hash === '#certification' 
      ? 'certification' 
      : 'main'
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#biking') {
        setCurrentView('biking');
      } else if (hash === '#certification') {
        setCurrentView('certification');
      } else {
        setCurrentView('main');
      }
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentView === 'biking') {
    return <BikingGallery />;
  }

  if (currentView === 'certification') {
    return <CertificationPage />;
  }

  return <Home />;
}

export default App;
