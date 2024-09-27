import React, { useState } from 'react';
import './App.css';

// Importing JSX components
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import HistoryPage from './components/HistoryPage';
import CulturePage from './components/CulturePage';
import FoodPage from './components/FoodPage';
import MusicsPage from './components/MusicsPage';
import AttractionsPage from './components/AttractionsPage';
import DynamicHistoryPage from './dynamic_components/DynamicHistoryPage';
import DynamicCulturePage from './dynamic_components/DynamicCulturePage';
import DynamicFoodPage from './dynamic_components/DynamicFoodPage';

function App() {

  const [showDynamicPage, setShowDynamicPage] = useState(false); // Controls visibility of dynamic pages
  const [activeElement, setActiveElement] = useState('musics');  // Controls active media element
  const [currentMedia, setCurrentMedia] = useState(null);        // Stores selected media

  const handleShowDynamicPage = () => {
    setShowDynamicPage(true); // Show dynamic page on button click
  };

  const handleCloseDynamicPage = () => {
    setShowDynamicPage(false); // Close dynamic page
  };

  const handleSelectMedia = (mediaSrc) => {
    setCurrentMedia(mediaSrc); // Sets the current media source
  }

  return (
    <div className='main'>
      <HomePage />
      <hr />
      <NavBar />
      <hr />
      <HistoryPage onButtonClick={handleShowDynamicPage} />
      {showDynamicPage && (
        <div>
          <div className='overlay'></div>
          <div className='modal'>
            <DynamicHistoryPage onClose={handleCloseDynamicPage} />
          </div>
        </div>
      )}
      <hr className='hr' />
      <CulturePage onButtonClick={handleShowDynamicPage} />
      {showDynamicPage && (
        <div>
          <div className='overlay'></div>
          <div className='modal'>
            <DynamicCulturePage onClose={handleCloseDynamicPage} />
          </div>
        </div>
      )}
      <hr className='hr' />
      <FoodPage onButtonClick={handleShowDynamicPage} />
      {showDynamicPage && (
        <div>
          <div className='overlay'></div>
          <div className='modal'>
            <DynamicFoodPage onClose={handleCloseDynamicPage} />
          </div>
        </div>
      )}
      <hr className='hr' />
      <MusicsPage activeElement={activeElement} setActiveElement={setActiveElement} />
      <hr className='hr' />
      <AttractionsPage />
    </div>
  );
}

export default App;
