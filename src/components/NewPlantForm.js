import React, { useState } from 'react';

function NewPlantForm({ setPlants }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name,
      image,
      price: parseFloat(price),
      soldOut: false, // optional, for future toggle feature
    };

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPlants((prevPlants) => [...prevPlants, data]);
        // Clear form
        setName('');
        setImage('');
        setPrice('');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form. Please try again.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="new-plant-form">
      <input
        type="text"
        name="name"
        placeholder="Plant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        step="0.01"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;
