import React from 'react'
import SideNav from './shared_components/SideNav'
import Header from './shared_components/Header'
import DateTimeDisplay from './shared_components/DateTimeDisplay'
import totalproj from "../src/documents.png"
import completed from "../src/check.png"
import pending from "../src/pending.png"
const Dashboard = () => {
    
    return (

        <div className="flex bg-slate-200 w-full h-[100vh]">
            
            <div className="flex-1 p-4">
                <Header />
                <div className='flex justify-end'>
                    <DateTimeDisplay />
                </div>
                <div className='flex flex-wrap gap-10 justify-center text-center items-center'>
                    <div className='bg-blue-400 flex justify-between items-center text-center hover:scale-105 hover:bg-blue-800 cursor-pointer w-44 text-white xl:w-96 px-2 rounded-md py-4'>
                        <img src={totalproj} alt='projects' className='w-5 xl:w-9' />
                        <h2 className='text-sm xl:text-xl'>Total Projects</h2>
                        <h1 className='text-sm xl:text-3xl my-1 font-bold'>225</h1>
                    </div>
                    <div className='bg-blue-400 flex  justify-between items-center text-center hover:scale-105 hover:bg-blue-800 cursor-pointer w-44 text-white xl:w-96 px-2 rounded-md py-4'>
                        <img src={completed} alt='projects' className='w-5 xl:w-9' />
                        <h2 className='text-sm xl:text-xl'>Completed Tasks</h2>
                        <h1 className='text-sm xl:text-3xl my-1 font-bold'>28</h1>
                    </div>
                    <div className='bg-blue-400 flex  justify-between items-center text-center hover:scale-105 hover:bg-blue-800 cursor-pointer w-44 text-white xl:w-96 px-2 rounded-md py-4'>
                        <img src={pending} alt='projects' className='w-5 xl:w-9' />
                        <h2 className='text-sm xl:text-xl'>Pending Tasks</h2>
                        <h1 className='text-sm xl:text-3xl my-1 font-bold'>15</h1>
                    </div>
                </div>
                <div className='my-10'>
                    <div className='bg-blue-800 rounded-t-md p-4'>
                        <h1 className='text-sm xl:text-xl text-white'>Overdue Tasks</h1>
                    </div>
                    <div className='bg-white p-4 rounded-b-md py-10'>
                        <div className='flex justify-between'>
                            <h3>Title</h3>
                            <h3>Due Date</h3>
                        </div>
                        <div className='flex justify-center'>
                            <h3 className='font-semibold cursor-pointer'>No Open Tasks</h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-start gap-6 w-full'>
                    <div className='flex-1 min-w-[300px]'>
                        <div className='bg-blue-800 rounded-t-md p-4'>
                            <h1 className='text-xl text-white'>Project Activity Timeline</h1>
                        </div>
                        <div className='bg-white p-4 rounded-b-md py-10'>
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
                        <div className='bg-blue-800 rounded-t-md p-4'>
                            <h1 className='text-xl text-white'>User Activity Timeline</h1>
                        </div>
                        <div className='bg-white p-4 rounded-b-md py-10'>
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
