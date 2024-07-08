import React from 'react'
import SideNav from './shared_components/SideNav'

import Header from './shared_components/Header'
import DateTimeDisplay from './shared_components/DateTimeDisplay'
import totalproj from "../src/documents.png"
import completed from "../src/check.png"
import pending from "../src/pending.png"
import dashboardlogo from '../src/dashboard.png';
import { Link } from 'react-router-dom'
import LineChartDB from './Charts/LineChartDB'
import BarChartDB from './Charts/BarChartDB'
import DoughnutChart from './Charts/DoughnutChart'
import PieChartDB from './Charts/PieChartDB'



const Dashboard = () => {

    return (
        <div>
            <div className="flex w-full">
                <div className="flex-1 p-4">
                    <Header />
                    <div className='flex flex-wrap justify-between items-center my-3'>
                        <div className=' bg-gradient-to-r from-blue-700 to-blue-400 p-3 rounded-lg mb-1 '>
                            <img src={dashboardlogo} alt="db" />
                            <h1 className='text-white text-base font-bold cursor-pointer'>Dashboard</h1>
                        </div>
                        <DateTimeDisplay />
                    </div>

                    <div className='flex gap-2 mt-2 flex-wrap lg:gap-5 justify-start text-center items-center'>
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
                        <div className='bg-gradient-to-r from-purple-700 to-purple-400 flex  flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-red-700 cursor-pointer lg:h-auto h-28 w-30  text-white  px-2 rounded-md py-4'>
                            <i class="fa-solid fa-people-group"></i>
                            <h2 className='text-sm xl:text-xl'>Active Users</h2>
                            <h1 className='text-sm xl:text-xl my-1 font-bold'>1</h1>
                        </div>
                        <div className='bg-gradient-to-r from-cyan-700 to-cyan-400 flex  flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-red-700 cursor-pointer lg:h-auto h-28 w-30  text-white  px-2 rounded-md py-4'>
                            <i class="fa-solid fa-users"></i>
                            <h2 className='text-sm xl:text-xl'>Total Customers</h2>
                            <h1 className='text-sm xl:text-xl my-1 font-bold'>6</h1>
                        </div>
                        <div className='bg-gradient-to-r from-yellow-700 to-yellow-500   flex  flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-red-700 cursor-pointer lg:h-auto h-28 w-30  text-white  px-2 rounded-md py-4'>
                            <i class="fa-solid fa-coins"></i>
                            <h2 className='text-sm xl:text-xl'>Pending Payments</h2>
                            <h1 className='text-sm xl:text-xl my-1 font-bold'>6</h1>
                        </div>

                    </div>
                    <div className='flex gap-4 justify-center flex-wrap'>
                        <div className='w-[48%] my-6 '>
                            <div className='border-2 bg-gray-100 rounded-lg shadow-lg'>
                                <LineChartDB />
                            </div>
                        </div>
                        <div className='w-[48%] my-6 '>
                            <div className='border-2 bg-gray-100 rounded-lg shadow-lg'>
                                <BarChartDB />
                            </div>
                        </div>
                        <div className='w-[48%] my-2 '>
                            <div className='flex justify-center border-2 bg-gray-100 rounded-lg shadow-md'>
                                <DoughnutChart />
                            </div>
                        </div>
                        <div className='w-[48%] my-2 '>
                            <div className='flex justify-center border-2 bg-gray-100 rounded-lg shadow-md'>
                                <PieChartDB />
                            </div>
                        </div>
                    </div>

                    <div className='my-9'>
                        <div className='bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 rounded-t-md p-4'>
                            <h1 className='text-sm xl:text-xl text-white'>Overdue Tasks</h1>
                        </div>
                        <div className='bg-white p-4 rounded-b-md py-10 border-2 border-t-0'>
                            <div className='flex flex-wrap gap-2 justify-between'>
                                <h3>Project Name: Test Project 2</h3>
                                <h3>Due Date: 20-6-2024</h3>
                                <h3>Brand: Captain Design Agency</h3>
                                <Link to='/projects' data-tip='View' className='tooltip tooltip-info'><i class=" mx-1 fa-solid fa-eye cursor-pointer text-blue-500 hover:text-blue-800 hover:scale-105"></i></Link>
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
        </div>

    )
}

export default Dashboard
