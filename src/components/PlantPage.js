import React, { useState } from 'react';
import NewPlantForm from './NewPlantForm';
import Search from './Search';
import PlantList from './PlantList';

function PlantPage({ plants, setPlants }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NewPlantForm setPlants={setPlants} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={filteredPlants} />
    </div>
  );
}

export default PlantPage;
