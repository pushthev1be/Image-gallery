import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://image-backend-mii5.onrender.com/api/images')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.error('Error fetching images:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📸 Image Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {images.map((img) => (
          <div
            key={img._id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              width: '250px',
              padding: '1rem',
              background: '#fff',
            }}
          >
            <img src={img.url} alt={img.title} style={{ width: '100%', borderRadius: '6px' }} />
            <h3>{img.title}</h3>
            <p>{img.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
