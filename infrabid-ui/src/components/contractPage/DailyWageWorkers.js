import React from 'react';
import '../../styles/DailyWageWorkers.css'
import workers from '../../assets/daily_workers.png'
const DailyWageWorkers = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="daily-wage-container">
      <div className="content-section">
        <h2 className="heading">Looking for Daily Wage Workers?</h2>
        <button className="enquire-button" onClick={scrollToAbout}>ENQUIRE NOW</button>
      </div>
      <div className="image-section">
        <img 
          src={workers}
          alt="Construction workers" 
          className="workers-image"
        />
      </div>
    </div>
  );
};

export default DailyWageWorkers;
