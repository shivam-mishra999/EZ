import React, { useEffect } from 'react';
import Details from './components/Details';
import Cards from './components/Cards';
import Email from './components/Email';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1400);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isMobile ? (
        <div className="app">
          <div className="column-1">
            <div className="detail-container">
              <Details />
            </div>
            <div className="email-container">
              <Email />
            </div>
          </div>
          <div className="cards-container">
            <Cards />
          </div>
        </div>
      ) : (
        <div className="mobile-app">
          <div className="detail-container">
            <Details />
          </div>
          <div className="mobile-cards-container">
            <Cards />
          </div>
          <div className="email-container">
            <Email />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
