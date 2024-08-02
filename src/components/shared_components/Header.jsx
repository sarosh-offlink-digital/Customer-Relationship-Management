import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileimg from "../../src/profilepic.jpg";
import bellicon from "../../src/bell.png";
import dashboardadd from '../../src/dashboardadd.png'
import faqs from '../../src/faq (1).png'
import DateTimeDisplay from './DateTimeDisplay';
const Header = ({ us }) => {

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
        <div className='bg-gradient-to-r from-blue-700 to-purple-500 lg:bg-gradient-to-r lg:from-transparent lg:to-transparent rounded-lg '>
            <div className='flex justify-between items-center py-1 pr-5'>
                <div className='hidden lg:block'>
                    <DateTimeDisplay/>
                </div>
                <div className='text-white font-bold text-lg'>
                </div>
                <div className='flex items-center gap-8'>
                {/* <div>
                    <img src={faqs} alt="" className='w-8 h-8'/>
                </div> */}
                    <div className="dropdown dropdown-end ">
                        <div tabIndex={3} role="button" data-tip='Add+' className="tooltip tooltip-bottom tooltip-info"><img src={dashboardadd} className='w-7 h-7' alt="" /></div>
                        <ul tabIndex={3} className="dropdown-content menu bg-slate-700 rounded-md z-[1] w-[400px] p-3 shadow-lg mt-2">
                            <div className='flex flex-wrap gap-10'>
                                <Link to='/users' className='flex gap-2 items-center'>
                                    <i class="py-1 px-2 bg-blue-500 text-white fa-solid fa-user-plus text-lg rounded-lg hover:scale-110"></i>
                                    <div className='mr-1'>
                                        <h1 className='text-blue-500 font-semibold '>User</h1>
                                        <p className='text-gray-500 text-sm'>Add new User </p>
                                    </div>
                                </Link>
                                <Link to='/newcustomer' className='flex gap-2 items-center'>
                                    <i class="py-1 px-2 bg-green-500 text-white fa-solid fa-user-group text-lg rounded-lg hover:scale-110"></i>
                                    <div>
                                        <h1 className='text-green-500 font-semibold'>Customers</h1>
                                        <p className='text-gray-500 text-sm'>Add new customer</p>
                                    </div>
                                </Link>
                                <Link to='/newproject' className='flex gap-2 items-center'>
                                    <i class="py-1 px-2 bg-orange-500 text-white fa-solid fa-bars-progress text-lg rounded-lg  hover:scale-110"></i>
                                    <div>
                                        <h1 className='text-orange-500 font-semibold '>Projects</h1>
                                        <p className='text-gray-500 text-sm'> Create a project</p>
                                    </div>
                                </Link>
                                <Link to='/tasks' className='flex gap-2 items-center'>
                                    <i class="py-1 px-[10px] bg-cyan-500 text-white fa-solid fa-list-check text-lg rounded-lg  hover:scale-110"></i>
                                    <div>
                                        <h1 className='text-cyan-500 font-semibold '>Tasks</h1>
                                        <p className='text-gray-500 text-sm'>Add a new task</p>
                                    </div>
                                </Link>
                                <div className='flex gap-2 items-center'>
                                    <i class="py-1 px-2 bg-purple-500 text-white fa-solid fa-comments text-lg rounded-lg  hover:scale-110"></i>
                                    <div>
                                        <h1 className='text-purple-500 font-semibold '>Conversation</h1>
                                        <p className='text-gray-500 text-sm'> Add a new Chat</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <i class="py-1 px-3 bg-rose-500 text-white fa-solid fa-clipboard-list text-lg rounded-lg  hover:scale-110"></i>
                                    <div>
                                        <h1 className='text-rose-500 font-semibold '>Ticket</h1>
                                        <p className='text-gray-500 text-sm'>Add new Ticket</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <i class="py-1 px-3 bg-stone-500 text-white fa-solid fa-clipboard-list text-lg rounded-lg  hover:scale-110"></i>
                                    <div>
                                        <h1 className='text-stone-500 font-semibold '>Invoice</h1>
                                        <p className='text-gray-500 text-sm'>Add new Invoice</p>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className='dropdown dropdown-end'>
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            {/* OLD BELL */}
                            {/* <div className="indicator">
                                <span className="indicator-item badge badge-success p-1">3</span>
                                <i class="fa-solid fa-bell text-2xl text-white lg:text-blue-800"></i>
                               
                            </div> */}
                            {/* NEW BELL */}
                            <div className="indicator "  >
                                <div className='tooltip tooltip-bottom tooltip-info' data-tip='Notifications'>
                                    <i class="fa-solid fa-bell text-2xl text-white lg:text-white "></i>
                                </div>    
                                <span class="relative flex h-3 w-3">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                {/* <img src={bellicon} alt='Bell Icon' className='' /> */}
                            </div>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-50 menu p-2 shadow  rounded-md w-48 lg:w-56 bg-slate-700">
                            <li className='border-b-1 border-gray-300 p-2 text-gray-300'>Project 1 Task 1 Completed</li>
                            <li className='border-b-1 border-gray-300 p-2 text-gray-300'>Sarosh sent you a message</li>
                            <li className='p-2 text-gray-300 '>Project 2 Reached Deadline</li>
                        </ul>
                    </div>

                    <div className='dropdown dropdown-end ' >
                        <label tabIndex={1} className="btn btn-ghost btn-circle avatar tooltip tooltip-info tooltip-bottom" data-tip='View Profile'>
                            <div className="w-12 rounded-full mt-1 lg:mt-0">
                                <img src={profileimg} alt='Profile' className='relative' />
                                <div className='absolute right-0 top-0 z-48 rounded-full w-3 h-3' style={{ backgroundColor: available }}></div>
                            </div>
                        </label>
                        <ul tabIndex={1} className="dropdown-content z-50 menu p-2 shadow  rounded-md w-56 bg-slate-700">
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
