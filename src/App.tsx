import React, { useState, useEffect } from 'react';

function DriverInfo() {
  const [driverInfo, setDriverInfo] = useState(null);

  useEffect(() => {
    fetchDriverInfo();
  }, []);

  const fetchDriverInfo = async () => {
    try {
      const response = await fetch('https://api.openf1.org/v1/drivers?driver_number=1&session_key=7763');
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
      <div>
        <h1>Driver Information</h1>
        {driverInfo ? (
            <div>
              <p>Driver Number: {driverInfo.driver_number}</p>
              <p>Broadcast Name: {driverInfo.broadcast_name}</p>
              <p>Full Name: {driverInfo.full_name}</p>
              <p>Team Name: {driverInfo.team_name}</p>
              <p>Country Code: {driverInfo.country_code}</p>
              <img src={driverInfo.headshot_url} alt="Driver Headshot" />
            </div>
        ) : (
            <p>Loading...</p>
        )}
      </div>
  );
}

export default DriverInfo;
