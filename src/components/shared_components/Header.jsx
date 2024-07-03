import React, { useState } from 'react';
import profileimg from "../../src/profilepic.jpg";
import bellicon from "../../src/bell.png";
import { Link } from 'react-router-dom';

const Header = ({us}) => {

    const [available, setAvailable] = useState('rgb(60, 180, 60)')
    const [availableText, setAvailableText] = useState('Online')

    const handleAvailability = (color) => {
        switch (color) {
            case 0:
                setAvailable('rgb(60, 180, 60)')
                setAvailableText('Online')
                break;
            case 1:
                setAvailable('rgb(202 138 4)')
                setAvailableText('Away')
                break;
            case 2:
                setAvailable('rgb(185, 184, 184)')
                setAvailableText('Offline')
                break;
                case 3:
                setAvailable('rgb(180, 40, 40)')
                setAvailableText('Do not disturb')
                break;
            default:
                break;
        }
    }
    return (
        <div className='bg-gradient-to-r from-blue-700 to-blue-500 lg:bg-gradient-to-r lg:from-transparent lg:to-transparent rounded-lg '>
            <div className='flex justify-between items-center py-1 px-5'>
                <div className='text-white font-bold text-lg'>
                </div>
                <div className='flex items-center gap-8'>
                    <div className='dropdown dropdown-end'>
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            {/* OLD BELL */}
                            {/* <div className="indicator">
                                <span className="indicator-item badge badge-success p-1">3</span>
                                <i class="fa-solid fa-bell text-2xl text-white lg:text-blue-800"></i>
                               
                            </div> */}
                            {/* NEW BELL */}
                            <div className="indicator "  >
                                <div className='tooltip tooltip-bottom tooltip-info'data-tip='Notifications'> 
                                <i class="fa-solid fa-bell text-2xl text-white lg:text-blue-800 "></i>
                                </div>
                                <span class="relative flex h-3 w-3">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                {/* <img src={bellicon} alt='Bell Icon' className='' /> */}
                            </div>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-50 menu p-2 shadow bg-gray-100 rounded-md w-48 lg:w-56 glassy-bg">
                            <li className='border-b-2 border-gray-300 p-2'>Project 1 Task 1 Completed</li>
                            <li className='border-b-2 border-gray-300 p-2'>Sarosh sent you a message</li>
                            <li className='p-2 '>Project 2 Reached Deadline</li>
                        </ul>
                    </div>
                    <div className='dropdown dropdown-end ' >
                        <label tabIndex={1} className="btn btn-ghost btn-circle avatar tooltip tooltip-info tooltip-bottom"data-tip='View Profile'>
                            <div className="w-12 rounded-full mt-1 lg:mt-0">
                                <img src={profileimg} alt='Profile' className='relative' />
                                <div className='absolute right-0 top-0 z-48 rounded-full w-3 h-3' style={{ backgroundColor: available }}></div>
                            </div>
                        </label>
                        <ul tabIndex={1} className="dropdown-content z-50 menu p-2 shadow bg-gray-100 rounded-md w-56 glassy-bg">
                            <li className='border-b-2 text-blue-800 border-gray-300 p-2 text-xl font-bold '>Admin</li>
                            <div className='border-b-2 text-blue-800 font-semibold border-gray-300 p-2'>
                               {availableText}
                                <div className='flex gap-3'>
                                    <button onClick={() => handleAvailability(0)} className='bg-green-600 rounded-full w-6 h-6'></button>
                                    <button onClick={() => handleAvailability(1)} className='bg-yellow-600 rounded-full w-6 h-6'></button>
                                    <button onClick={() => handleAvailability(2)} className='bg-gray-500 rounded-full w-6 h-6'></button>
                                    <button onClick={() => handleAvailability(3)} className='bg-red-500 rounded-full w-6 h-6'></button>

                                </div>
                            </div>
                            <Link to='/profile' className='border-b-2 border-gray-300 p-2 hover:text-blue-800 hover:font-bold hover:scale-105'> <i class="fa-solid fa-user mr-1"></i>Profile</Link>

                            <Link to="/login" className='p-2 hover:text-blue-800 hover:font-bold hover:scale-105' > <i class="fa-solid fa-power-off mr-1"></i> Logout</Link >
                        </ul>
                    </div>
                    {/* <p className='hidden sm:block text-white font-bold'>Admin</p> */}
                    {/* <Link className='text-white mx-2' to="/login">
                        <i className="fa-solid fa-power-off"></i>
                    </Link> */}
                </div>
            </div>
        </div>
    );
}

export default Header;
