import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    fetch('https://image-backend-mii5.onrender.com/api/images')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.error('Fetch error:', err));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!files || files.length === 0) {
      alert('Please select at least one image.');
      return;
    }

    setLoading(true);

    try {
      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();
        formData.append('image', files[i]);
        if (title) formData.append('title', title);
        if (description) formData.append('description', description);

        await fetch('https://image-backend-mii5.onrender.com/api/images/upload', {
          method: 'POST',
          body: formData,
        });
      }

      setTitle('');
      setDescription('');
      setFiles(null);
      fetchImages();
    } catch (err) {
      console.error('Upload failed:', err);
    }

    setLoading(false);
  };

  return (
    <div style={{ background: '#1e1e2f', minHeight: '100vh', padding: '2rem', color: '#fff' }}>
      <h1 style={{ marginBottom: '1.5rem', color: '#61dafb' }}>📸 Image Gallery</h1>

      {/* Upload Form */}
      <form onSubmit={handleUpload} style={{ marginBottom: '2rem' }}>
        <input
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
        /><br /><br />
        <input
          type="text"
          placeholder="Title (optional)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: '8px',
            width: '250px',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <input
          type="text"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            padding: '8px',
            width: '250px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <br /><br />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            border: 'none',
            background: '#61dafb',
            color: '#000',
            borderRadius: '6px',
            fontWeight: 'bold',
          }}
          disabled={loading}
        >
          {loading ? 'Uploading...' : 'Upload Images'}
        </button>
      </form>

      {/* Image Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        {images.map((img) => (
          <div
            key={img._id}
            style={{
              background: '#fff',
              color: '#000',
              borderRadius: '8px',
              width: '250px',
              padding: '1rem',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}
          >
            <img
              src={img.url}
              alt={img.title || 'Uploaded Image'}
              style={{
                width: '100%',
                borderRadius: '6px',
                marginBottom: '10px',
              }}
            />
            {img.title && <h3 style={{ margin: 0 }}>{img.title}</h3>}
            {img.description && <p style={{ margin: '5px 0 0' }}>{img.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
