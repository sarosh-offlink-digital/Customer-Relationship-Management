// src/FileUploader.js

import React, { useState } from 'react';

const FileUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        // Create a preview of the file
        const reader = new FileReader();
        reader.onloadend = () => {
            setFilePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleUpload = () => {
        if (!selectedFile) return;

        // Create a FormData object to send the file data
        const formData = new FormData();
        formData.append('file', selectedFile);

        // Example: Sending the file data to a server
        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className='flex justify-start my-5'>
            <div className=" p-3 bg-white rounded-lg shadow-md">
                <h1>Upload Project File <span className='italic text-sm text-gray-500'>(if any)</span></h1>
                <input
                    type="file"
                    className=" text-sm text-gray-900 border border-gray-300 rounded-r-lg cursor-pointer bg-gray-50"
                    onChange={handleFileChange}
                />
                {filePreview && (
                    <img src={filePreview} alt="Preview" className="my-4 w-full  object-cover" />
                )}
                <button
                    onClick={handleUpload}
                    className="mt-4 mx-5 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-500"
                >
                    Upload
                </button>
            </div>
        </div>
    );
};

export default FileUploader;
