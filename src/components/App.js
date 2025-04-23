import React, { useEffect, useState } from 'react';
import PlantPage from './PlantPage';

function App() {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  // Fetch plants on mount
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((r) => {
        if (!r.ok) {
          throw new Error('Failed to fetch plants');
        }
        return r.json();
      })
      .then((data) => {
        setPlants(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading plants...</div>; // Display loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <div>
      <h1>Plantsy 🌱</h1>
      <PlantPage plants={plants} setPlants={setPlants} />
    </div>
  );
}

export default App;
