import React, { useEffect, useState } from 'react';
import Header from '../shared_components/Header';

const LeadForm = ({ selectedId }) => {
 
    return (
        <div className='p-4'>
            <Header />
            <div className='my-10'>
                <div className='bg-gradient-to-r from-blue-700 to-blue-400 rounded-t-md p-4'>
                    <h1 className='text-sm xl:text-xl text-white'>Lead #124</h1>
                </div>
                <div className='bg-white p-4 rounded-b-md py-10'>
                    <div>
                        <h1 className='text-xl mb-2'>Lead Details</h1>
                        <form action="">
                            <div className="flex flex-wrap gap-2">
                                <label className="flex items-center bg-gray-50 text-black  input input-bordered gap-2 w-full md:w-auto flex-grow">
                                <i class="fa-solid fa-user text-blue-800"></i>
                                    <input type="text" className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" placeholder="Company Name" />
                                </label>
                                <label className="flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                <i class="fa-solid fa-envelope text-orange-500"></i>
                                    <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Email" />
                                </label>
                            </div>

                            <label class="my-5 input input-bordered flex items-center bg-gray-50  text-black gap-2">
                            <i class="fa-solid fa-phone text-green-500"></i>

                                <input type="text" class="grow" placeholder="Mobile" />
                            </label>
                            <div className="flex flex-wrap gap-2">
                                <label className="flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                    </svg>
                                    <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Customer Name" />
                                </label>
                                <label className="flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                    <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Customer Email" />
                                </label>
                            </div>
                            <textarea type="text" class="grow w-full my-5 input input-bordered flex items-center bg-gray-50  text-black gap-2" placeholder="Comment:" />
                            <div className="flex flex-wrap gap-2">
                                <label className="flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                    </svg>
                                    <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Service" />
                                </label>
                                <label className="flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                    </svg>
                                    <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Brand" />
                                </label>
                            </div>

                            <button type='submit' className='bg-blue-800 p-3 my-5 text-white rounded-md'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadForm;
