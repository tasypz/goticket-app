'use client';
import React, { useState } from 'react';
import axios from 'axios';

function ImageUploader({ setImageUrl }) {
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData();
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0]; // Get the file selected by the user

    if (!file) {
      alert('Please select an image to upload.');
      return;
    }

    formData.append('image', file);

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.message) {
        setMessage(response.data.message);
        setImageUrl(response.data.imageUrl); // Assuming the server returns the imageUrl
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error uploading image.');
    }
  };

  return (
    <div>
      <h1>Image Uploader</h1>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <input type="file" name="image" id="imageInput" />
        <button type="submit">Upload Image</button>
      </form>
      <div id="message">{message}</div>
    </div>
  );
}

export default ImageUploader;
