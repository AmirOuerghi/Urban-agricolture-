import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import './ImageUpload.css'; // Import CSS file for styling

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    // Fetch image URLs from the backend when component mounts
    const fetchImageUrls = async () => {
      try {
        const response = await axios.get("http://localhost:8000/get-images");
        setUrls(response.data.imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImageUrls();
  }, []);

  const handleUpload = async () => {  
    const formData = new FormData();
    formData.append('file', file);
    formData.append("upload_preset", "hibajal");

    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/domjtcyb4/upload", formData);
      const imageUrl = response.data.secure_url;

      await axios.post("http://localhost:8000/upload-image", { imageUrl });

      setUrls(prevUrls => [...prevUrls, imageUrl]); // Append new URL to the existing array
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="image-upload-container">
      <h2>Articals Owners</h2>
      <input type="file" onChange={handleFileChange} />
      <label htmlFor="upload-input" className="upload-icon">
      <FontAwesomeIcon icon={faCamera} />
      </label>
      <input id="upload-input" type="submit" value="Upload Image" onClick={handleUpload} style={{ display: "none" }} />
      <div className="image-card-container">
        {urls.map((url, index) => (
          <div key={index} className="image-card">
            <img src={url} alt={`Uploaded ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
