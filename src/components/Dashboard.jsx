import React, { useEffect, useState } from 'react'
import Header from './shared_components/Header'
import DateTimeDisplay from './shared_components/DateTimeDisplay'
import dashboardlogo from '../src/dashboard.png';
import { Link } from 'react-router-dom'
import LineChartDB from './Charts/LineChartDB'
import BarChartDB from './Charts/BarChartDB'
import DoughnutChart from './Charts/DoughnutChart'
import PieChartDB from './Charts/PieChartDB'

const Dashboard = ({ leadsData, customerData }) => {
    const [leadsDataDB, setLeadsDataDB] = useState(leadsData);
    const [customerDataDB, setcustomerDataDB] = useState(customerData);
    useEffect(() => {
      setLeadsDataDB(leadsData);
      setcustomerDataDB(customerData)
    }, [leadsData, customerData]);
  
    const latestContactFormId = leadsDataDB.length;
    const latestContactFormIdCustomers = customerDataDB.length;
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

                    <div className='flex gap-2 mt-2  flex-wrap lg:gap-3 justify-start text-center items-center'>
                        <div className='border-2 shadow-lg border-blue-800 border-l-[12px]  flex flex-wrap justify-between lg:justify-between gap-1 lg:gap-2 items-center text-center hover:scale-105  cursor-pointer lg:h-16 h-16 w-full lg:w-auto  text-blue-800  px-2 rounded-md py-4'>
                            <i class="fa-solid fa-bars-progress text-2xl"></i>
                            <h2 className='text-sm lg:text-base'>Total Projects</h2>
                            <h1 className='text-sm lg:text-base my-1 font-bold'>225</h1>
                        </div>
                        <div className='border-2 shadow-lg border-teal-500 border-l-[12px]  flex  flex-wrap justify-between lg:justify-between gap-1 lg:gap-2 items-center text-center hover:scale-105  cursor-pointer lg:h-16 h-16 w-full lg:w-auto  text-teal-500  px-2 rounded-md py-4'>
                            <i class="fa-regular fa-square-check text-2xl"></i>
                            <h2 className='text-sm lg:text-base'>Completed Tasks</h2>
                            <h1 className='text-sm lg:text-base my-1 font-bold'>28</h1>
                        </div>
                        <div className='border-2 shadow-lg border-orange-600 border-l-[12px]  flex  flex-wrap justify-between lg:justify-between gap-1 lg:gap-2 items-center text-center hover:scale-105  cursor-pointer lg:h-16 h-16 w-full lg:w-auto  text-orange-600  px-2 rounded-md py-4'>
                        <i class="fa-solid fa-clock-rotate-left text-2xl"></i>
                            <h2 className='text-sm lg:text-base'>Pending Tasks</h2>
                            <h1 className='text-sm lg:text-base my-1 font-bold'>15</h1>
                        </div>

                        <div className=' border-2 shadow-lg border-stone-500 border-l-[12px]  flex  flex-wrap justify-between lg:justify-between gap-1 lg:gap-2 items-center text-center hover:scale-105  cursor-pointer lg:h-16 h-16 w-full lg:w-auto  text-stone-500  px-2 rounded-md py-4'>
                            <i class="fa-solid fa-circle-user text-2xl"></i>
                            <h2 className='text-sm lg:text-base'>Total Leads</h2>
                            <h1 className='text-sm lg:text-base my-1 font-bold'>{latestContactFormId}</h1>
                        </div>
                        <div className='border-2 shadow-lg border-sky-600 border-l-[12px]  flex  flex-wrap justify-between lg:justify-between gap-1 lg:gap-2 items-center text-center hover:scale-105  cursor-pointer lg:h-16 h-16 w-full lg:w-auto  text-sky-600  px-2 rounded-md py-4'>
                            <i class="fa-solid fa-users text-2xl"></i>
                            <h2 className='text-sm lg:text-base'>Total Customers</h2>
                            <h1 className='text-sm lg:text-base my-1 font-bold'>{latestContactFormIdCustomers}</h1>
                        </div>
                        <div className=' border-2 shadow-lg border-indigo-500 border-l-[12px] flex  flex-wrap justify-between lg:justify-between gap-1 lg:gap-2 items-center text-center hover:scale-105  cursor-pointer lg:h-16 h-16 w-full lg:w-auto  text-indigo-500  px-2 rounded-md py-4'>
                            <i class="fa-solid fa-people-group text-2xl"></i>
                            <h2 className='text-sm lg:text-base'>Active Users</h2>
                            <h1 className='text-sm lg:text-base my-1 font-bold'>1</h1>
                        </div>
                    </div>
                    <div className='flex gap-4 justify-center flex-wrap'>
                        <div className='lg:w-[48%] my-6 '>
                            <div className='border-2 bg-gray-100 rounded-lg shadow-lg'>
                                <LineChartDB  leadsDataDB={leadsDataDB} customerDataDB={customerDataDB}/>
                            </div>
                        </div>
                        <div className='lg:w-[48%] my-6 '>
                            <div className='border-2 bg-gray-100 rounded-lg shadow-lg'>
                                <BarChartDB leadsDataDB={leadsDataDB} customerDataDB={customerDataDB}/>
                            </div>
                        </div>
                      
                        <div className='lg:w-[48%]  '>
                            <div className='flex justify-center border-2 bg-gray-100 rounded-lg shadow-lg'>
                                <DoughnutChart />
                            </div>
                        </div>
                        <div className='lg:w-[48%]  '>
                            <div className='flex justify-center border-2 bg-gray-100 rounded-lg shadow-lg'>
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
                


                {/* leads div */}
                
                </div>
            </div>
        </div>
    )
}

export default Dashboard
