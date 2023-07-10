import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/photos/random', {
        params: {
          count: 10,  
          client_id: 'jbQfTzTg0twRY4fgXHwVEXlmc3P73iVhzwroUueXv3k', 
        },
      });
      setPhotos(response.data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <div className="photos">
      <h1>Photos</h1>
      {photos.map((photo) => (
        <div key={photo.id} className="photo">
          <img src={photo.urls.regular} alt={photo.alt_description} />
          <h3>{photo.alt_description}</h3>
          <p>{photo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Photos;
