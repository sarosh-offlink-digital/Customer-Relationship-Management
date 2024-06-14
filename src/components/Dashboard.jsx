import React from 'react'
import SideNav from './shared_components/SideNav'
import Header from './shared_components/Header'
import DateTimeDisplay from './shared_components/DateTimeDisplay'
import totalproj from "../src/documents.png"
import completed from "../src/check.png"
import pending from "../src/pending.png"
import dashboardlogo from '../src/dashboard.png';
const Dashboard = () => {

    return (

        <div className="flex w-full">
            <div className="flex-1 p-4">
                <Header />
                <div className='flex flex-wrap justify-between items-center my-4'>
                    <div className=' bg-gradient-to-r from-blue-700 to-blue-400 p-3 rounded-lg mb-2'>
                        <img src={dashboardlogo} alt="db" />
                        <h1 className='text-white text-base font-bold cursor-pointer'>Dashboard</h1>
                    </div>
                    <DateTimeDisplay />
                </div>
                <div className='flex gap-4 mt-4 lg:gap-10 justify-start text-center items-center'>
                    <div className='bg-gradient-to-r from-blue-700 to-blue-400 flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-blue-800 cursor-pointer lg:h-auto h-28 w-30  text-white  px-2 rounded-md py-4'>
                        <img src={totalproj} alt='projects' className='w-5 xl:w-9' />
                        <h2 className='text-sm xl:text-xl'>Total Projects</h2>
                        <h1 className='text-sm xl:text-xl my-1 font-bold'>225</h1>
                    </div>
                    <div className='bg-gradient-to-r from-teal-700 to-teal-400 flex  flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-green-600 cursor-pointer lg:h-auto h-28 w-30  text-white  px-2 rounded-md py-4'>
                        <img src={completed} alt='projects' className='w-5 xl:w-9' />
                        <h2 className='text-sm xl:text-xl'>Completed Tasks</h2>
                        <h1 className='text-sm xl:text-xl my-1 font-bold'>28</h1>
                    </div>
                    <div className='bg-gradient-to-r from-orange-700 to-orange-400 flex  flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-red-700 cursor-pointer lg:h-auto h-28 w-30  text-white  px-2 rounded-md py-4'>
                        <img src={pending} alt='projects' className='w-5 xl:w-9' />
                        <h2 className='text-sm xl:text-xl'>Pending Tasks</h2>
                        <h1 className='text-sm xl:text-xl my-1 font-bold'>15</h1>
                    </div>
                </div>
                <div className='my-10'>
                    <div className='bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 rounded-t-md p-4'>
                        <h1 className='text-sm xl:text-xl text-white'>Overdue Tasks</h1>
                    </div>
                    <div className='bg-white p-4 rounded-b-md py-10 border-2 border-t-0'>
                        <div className='flex justify-between'>
                            <h3>Title</h3>
                            <h3>Due Date</h3>
                        </div>
                        <div className='flex justify-center'>
                            <h3 className='font-semibold cursor-pointer '>No Open Tasks</h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-start gap-6 w-full'>
                    <div className='flex-1 min-w-[300px]'>
                        <div className='bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 rounded-t-md p-4'>
                            <h1 className='text-sm xl:text-xl text-white'>Project Activity Timeline</h1>
                        </div>
                        <div className='bg-white p-4 rounded-b-md py-10 border-2 border-t-0 '>
                            <div className='flex justify-between'>
                                <h3>Title</h3>
                                <h3>Due Date</h3>
                            </div>
                            <div className='flex justify-center'>
                                <h3 className='font-semibold cursor-pointer'>No Open Tasks</h3>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 min-w-[300px]'>
                        <div className='bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 rounded-t-md p-4'>
                            <h1 className='text-sm xl:text-xl text-white'>User Activity Timeline</h1>
                        </div>
                        <div className='bg-white p-4 rounded-b-md py-10 border-2 border-t-0'>
                            <div className='flex justify-between'>
                                <h3>Title</h3>
                                <h3>Due Date</h3>
                            </div>
                            <div className='flex justify-center'>
                                <h3 className='font-semibold cursor-pointer'>No Open Tasks</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
