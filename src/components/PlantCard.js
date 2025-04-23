import React from 'react';

function PlantCard({ plant }) {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price.toFixed(2)}</p>
      <button className="primary">In Stock</button>
    </div>
  );
}

export default PlantCard;
