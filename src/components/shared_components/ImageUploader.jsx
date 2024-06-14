import React, { useState } from 'react';

const ImageUploader = ({ onImageUpload }) => {
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const fileURL = URL.createObjectURL(file);
          onImageUpload(fileURL);
        }
      };

    return (
        <div className="image-uploader">
            <div className="image-uploader ">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="fileInput"
                />
                <label htmlFor="fileInput">
                    <i className="fa-solid fa-pen absolute top-0 right-1 bg-white text-blue-700 border-2 rounded-full p-1 z-48 cursor-pointer"></i>
                </label>

            </div>
            {image && <img src={image} alt="Uploaded" />}
        </div>
    );
};

export default ImageUploader;
