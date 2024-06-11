import React from 'react';
import profileimg from "../../src/profilepic.jpg";
import bellicon from "../../src/bell.png";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-blue-800 rounded-lg'>
            <div className='flex justify-between items-center py-1 px-5'>
                <div className='text-white font-bold text-lg'>
                    My App
                </div>
                <div className='flex items-center gap-4'>
                    <img src={bellicon} alt='BellIcon' className='m-2 w-6 h-6 sm:w-8 sm:h-8' />
                    <div className='flex items-center gap-2'>
                        <div class="avatar online">
                            <div class="w-12 rounded-full">
                                <img src={profileimg} alt='profile'/>
                            </div>
                        </div>
                        <p className='hidden sm:block text-white font-bold'>Admin</p>
                        <Link className='text-white mx-2' to="/login"><i className="fa-solid fa-power-off"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
