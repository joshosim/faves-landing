import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { storage } from './firebase.ts';
import { useNavigate } from 'react-router-dom';

interface ImageUploadProps { }

const UploadPhoto: React.FC<ImageUploadProps> = () => {
    const [images, setImages] = useState<File[] | null>(null);
    const [progress, setProgress] = useState(0);
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [folderPath, setFolderPath] = useState<string>('tees');
    const navigate = useNavigate()

    const folderOptions = [
        { value: 'tees', label: 'tees' },
        { value: 'tshirts', label: 'tshirts' },
        { value: 'jeans', label: 'jeans' },
        { value: 'unisex', label: 'unisex' },
        { value: 'pam', label: 'pam' },
        { value: 'cap', label: 'cap' },
        { value: 'hoddy', label: 'hoddy' },
        { value: 'sneakers', label: 'sneakers' },
        { value: 'luxuryshoes', label: 'luxuryshoes' },
        { value: 'maleshorts', label: 'maleshorts' },
        { value: 'necklace', label: 'necklace' },
        { value: 'earrings', label: 'earrings' },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImages(Array.from(e.target.files)); // Convert FileList to an array
        } else {
            setImages(null);
        }
    };

    const handleFolderPathChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFolderPath(event.target.value);
    };


    const handleUpload = async () => {
        if (!images || images.length === 0) {
            alert('Please select images to upload');
            return;
        }

        setProgress(0); // Reset progress for multiple uploads
        setImageUrls([]); // Clear previous image URLs

        const uploadPromises = images.map(async (image) => {
            const storageRef = ref(storage, `${folderPath}/${image.name}`);

            try {
                const uploadTask = uploadBytesResumable(storageRef, image);

                uploadTask.on('state_changed',
                    (snapshot) => {
                        const progressPercent = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                        setProgress(progressPercent); // Update overall progress
                    },
                    (error) => {
                        console.error('Error during upload:', error);
                    },
                    async () => {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        setImageUrls((prevImageUrls) => [...prevImageUrls, downloadURL]);
                    }
                );
            } catch (error) {
                console.error('Error during upload', error);
            }
        });

        await Promise.all(uploadPromises); // Wait for all uploads to finish
    };

    return (
        <div style={{ padding: 15 }} className='w-full realtive'>
            <button
                className='absolute top-0 right-0 m-4 text-white bg-black rounded-lg p-2 text-sm'
                onClick={() => navigate('/')}
            >Go Home</button>
            <p
                className='font-bold text-2xl text-center mb-2'
            >Upload Photos</p>
            <input
                type='file'
                multiple
                onChange={handleChange}
                width='100%'
                className='w-full' />
            <div style={{ margin: '14px 0 14px 0', width: '100%' }}>
                <label id="folder-path-label" className='mb-4'>Select Category</label>
                <select
                    value={folderPath}
                    className='w-full rounded-lg h-10'
                    onChange={handleFolderPathChange}
                >
                    {folderOptions.map((option) => (
                        <option key={option.value} className='capitalize' value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <button
                onClick={handleUpload}
                className='bg-green-500 rounded-lg h-10 font-bold'
                style={{
                    width: '100%',
                    fontWeight: 400,
                    padding: '12px 14px',
                }} >
                Upload
            </button>
            <progress
                className='rounded-lg'
                value={progress} max='100' style={{ width: '100%', marginTop: '12px', marginBottom: '12px' }} />

            {imageUrls.length > 0 && (
                <div>
                    <h2>Uploaded Images</h2>
                    <ul>
                        {imageUrls.map((imageUrl, index) => (
                            <li key={index}>
                                <img
                                    src={imageUrl}
                                    alt={`Image ${index + 1}`}
                                    style={{ maxWidth: '200px' }}
                                    height={200}
                                    width={200}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UploadPhoto;