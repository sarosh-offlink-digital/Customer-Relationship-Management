import React, { useState } from 'react';
import Header from '../shared_components/Header';
import profilepic from '../../src/profilepic.jpg';
import ImageUploader from '../shared_components/ImageUploader';

const UserProfile = () => {
    const [userProfile, setUserProfile] = useState(profilepic);
    const [userPassword, setUserPassword] = useState('');
    const [userMobile, setUserMobile] = useState('+92 315 8290290');
    const [userAddress, setUserAddress] = useState('ABC Street, Karachi');

    const handleImageUpload = (imageURL) => {
        setUserProfile(imageURL);
    };

    const handleInfoChange = (field, value) => {
        switch (field) {
            case 'password':
                setUserPassword(value);
                break;
            case 'mobile':
                setUserMobile(value);
                break;
            case 'address':
                setUserAddress(value);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <div className='p-4'>
                <Header />
                <div className='my-10'>
                    <div className='bg-gradient-to-r from-blue-700 to-blue-400 rounded-t-md p-4'>
                        <h1 className='text-sm xl:text-xl text-white'>User Information</h1>
                    </div>
                    <div className='bg-white p-4 rounded-b-md '>
                        <div className='flex items-center justify-center lg:justify-center'>
                            <div className='relative'>
                                <img src={userProfile} alt="user" className='rounded-full w-20 h-20 lg:w-36 lg:h-36 border-4 lg:border-8 border-y-blue-500 border-x-blue-800' />
                                <ImageUploader onImageUpload={handleImageUpload} />
                            </div>
                            <h1 className='text-center mx-3 font-bold text-2xl text-blue-800'>Sarosh Ahmed</h1>
                        </div>
                        <div className='flex flex-col items-center lg:flex-row justify-start gap-4 my-4'>
                            <div className='bg-gray-100 border-2 w-full rounded-lg px-4'>
                                <h1 className='text-lg font-bold text-blue-800'>User Name:</h1>
                                <div className='flex justify-between'>
                                    <p className='text-gray-500'>Sarosh Ahmed</p>
                                </div>
                            </div>
                            <div className='bg-gray-100 border-2 w-full rounded-lg py-1 px-4'>
                                <h1 className='text-lg font-bold text-blue-800'>Email:</h1>
                                <p className='text-gray-500'>admin@demo.com</p>
                            </div>
                            <div className='bg-gray-100 border-2 w-full rounded-lg py-1 px-4'>
                            <div className='flex items-center gap-3'>
                                    <h1 className='text-lg font-bold text-blue-800'>Password:</h1>
                                    <i class="text-xs fa-solid fa-pen text-blue-800"></i>

                                </div>
                                <div className='flex justify-between'>
                                    <input
                                        type='password'
                                        value={userPassword}
                                        onChange={(e) => handleInfoChange('password', e.target.value)}
                                        className='text-gray-500 bg-gray-50 border-2 rounded-lg w-full'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-start gap-4 my-4'>
                            <div className='bg-gray-100 border-2 w-full rounded-lg py-1 px-4'>
                                <div className='flex items-center gap-3'>
                                    <h1 className='text-lg font-bold text-blue-800'>Contact Number:</h1>
                                    <i class="text-xs fa-solid fa-pen text-blue-800"></i>

                                </div>
                                <div className='flex justify-between'>
                                    <input
                                        type='text'
                                        value={userMobile}
                                        onChange={(e) => handleInfoChange('mobile', e.target.value)}
                                        className='text-gray-500 bg-gray-50 border-2 rounded-lg  w-full'
                                    />
                                </div>
                            </div>
                            <div className='bg-gray-100 border-2 w-full rounded-lg py-1 px-4'>
                            <div className='flex items-center gap-3'>
                                    <h1 className='text-lg font-bold text-blue-800'>Address:</h1>
                                    <i class="text-xs fa-solid fa-pen text-blue-800"></i>

                                </div>
                                <input
                                    type='text'
                                    value={userAddress}
                                    onChange={(e) => handleInfoChange('address', e.target.value)}
                                    className='text-gray-500 bg-gray-50 rounded-lg border-2 w-full'
                                />
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <button className='text-white bg-blue-800 p-3 rounded-lg'>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
