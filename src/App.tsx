import React, { useState, useEffect } from 'react';
import './App.css';

function DriverInfo() {
  const [driverInfo, setDriverInfo] = useState(null);

  useEffect(() => {
    fetchDriverInfo();
  }, []);

  const fetchDriverInfo = async () => {
    try {
      const response = await fetch('https://api.openf1.org/v1/drivers?driver=max');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setDriverInfo(data[0]); // Assuming there's only one driver object in the response
    } catch (error) {
      console.error('Error fetching driver info:', error);
    }
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Formula 1 Driver Info</h1>
        </header>
        {driverInfo ? (
            <div className="driver-container">
              <div className="driver-card">
                <img src={driverInfo.headshot_url} alt="Driver Headshot" className="driver-img" />
                <p>Driver Number: {driverInfo.driver_number}</p>
                <p>Broadcast Name: {driverInfo.broadcast_name}</p>
                <p>Full Name: {driverInfo.full_name}</p>
                <p>Team Name: {driverInfo.team_name}</p>
                <p>Country Code: {driverInfo.country_code}</p>
              </div>
            </div>
        ) : (
            <div className="driver-container">
              <div className="driver-card">
                <img src='https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg' alt="Driver Headshot" className="driver-img" />
                <p>Driver Number: waiting..</p>
                <p>Broadcast Name: waiting..</p>
                <p>Full Name: waiting..</p>
                <p>Team Name: waiting..</p>
                <p>Country Code: waiting..</p>
              </div>
            </div>
        )}
        <footer className="footer">
          <p>Website developed by <a href="https://www.smartqa.nl" target="_blank" rel="noopener noreferrer">SmartQA</a></p>
        </footer>
      </div>
  );
}

export default DriverInfo;
