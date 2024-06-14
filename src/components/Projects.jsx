import React from 'react'
import Header from './shared_components/Header'
import customerlogo from '../src/ticket.png';
import tasklogo from '../src/task.png';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='p-4'>
                <Header />
            </div>
            <div className='flex flex-wrap gap-1 justify-start'>
                <div className=' flex flex-col  cursor-pointer bg-gradient-to-r from-blue-700 to-blue-400 p-3 rounded-lg scale-[.65] '>
                    <img src={customerlogo} alt="db" className='size-5 h-auto mt-1' />
                    <h1 className='text-white text-2xl font-bold pr-14'>Projects</h1>
                </div>
                <div className='flex gap-4 mt-4 lg:gap-10 justify-start text-center items-center px-4  mb-3'>
                    <div className='bg-gradient-to-r from-blue-700 to-blue-400 flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-blue-800 cursor-pointer lg:h-auto h-28 w-30  text-white  px-2 rounded-md py-4'>
                        {/* <img src={totalproj} alt='projects' className='w-5 xl:w-9' /> */}
                        <h2 className='text-sm xl:text-xl'>Total Projects</h2>
                        <h1 className='text-sm xl:text-xl my-1 font-bold'>150</h1>
                    </div>
                    <div className='bg-gradient-to-r from-teal-700 to-teal-400 flex  flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-green-600 cursor-pointer lg:h-auto h-28 w-30  text-white  px-2 rounded-md py-4'>
                        {/* <img src={completed} alt='projects' className='w-5 xl:w-9' /> */}
                        <h2 className='text-sm xl:text-xl'>Completed Projects</h2>
                        <h1 className='text-sm xl:text-xl my-1 font-bold'>20</h1>
                    </div>
                    <div className='bg-gradient-to-r from-orange-700 to-orange-400 flex  flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-red-700 cursor-pointer lg:h-auto h-28 w-30  text-white  px-2 rounded-md py-4'>
                        {/* <img src={pending} alt='projects' className='w-5 xl:w-9' /> */}
                        <h2 className='text-sm xl:text-xl'>Pending Projects</h2>
                        <h1 className='text-sm xl:text-xl my-1 font-bold'>42</h1>
                    </div>
                </div>
                <Link to='/tasks' className=' flex justify-start items-center  cursor-pointer bg-gradient-to-r from-purple-700 to-purple-400 p-3 rounded-lg scale-[.65] hover:bg-gradient-to-r hover:from-violet-800 hover:to-violet-400'>
                    <img src={tasklogo} alt="db" className='size-10 h-auto' />
                    <h1 className='text-white text-2xl font-bold '>View Tasks</h1>
                </Link>
            </div>

        </div>
    )
}

export default Projects
