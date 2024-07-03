import React from 'react'
import Header from './shared_components/Header'
import ProjectDataTable from './dataTables/ProjectDataTable'
import customerlogo from '../src/ticket.png';
import tasklogo from '../src/task.png';
import { Link } from 'react-router-dom';
import totalproj from "../src/documents.png"
import completed from "../src/check.png"
import pending from "../src/pending.png"


const Projects = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='p-4'>
                <Header />
            </div>
                <div className='flex flex-wrap gap-4 mt-4 lg:gap-4 justify-center lg:justify-start text-center items-center px-4  mb-3'>
                    <div className='flex flex-col mx-5 lg:mx-0  cursor-pointer bg-gradient-to-r from-blue-700 to-blue-400 py-1 pr-10 pl-2 rounded-lg'>
                        <i class="fa-solid fa-bars-progress  text-white text-xl"></i>
                        <h1 className='text-white font-2xl font-bold '>Projects</h1>
                    </div>
                    <Link to='/tasks' className='flex flex-col items-center mx-5 lg:mx-0  cursor-pointer bg-gradient-to-r from-purple-700 to-purple-400 py-1 pr-10 pl-2 rounded-lg hover:scale-105'>
                        <i class="fa-solid fa-circle-plus text-white text-xl"></i>
                        <h1 className='text-white  font-bold '>View Tasks</h1>
                    </Link>
                    <div className='bg-gradient-to-r from-orange-700 to-orange-400  flex flex-col lg:flex-row  justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-red-700 cursor-pointer lg:h-auto h-28 w-36 lg:w-auto text-white  px-2 rounded-md py-4'>
                        <i class="fa-solid fa-circle-minus"></i>
                        <h2 className='text-sm xl:text-xl'>Not Started</h2>
                        <h1 className='text-sm xl:text-xl lg:my-1 font-bold'>42</h1>
                    </div>
                    <div className='bg-gradient-to-r from-cyan-700 to-cyan-400  flex flex-col lg:flex-row  justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-green-600 cursor-pointer lg:h-auto h-28 w-36 lg:w-auto text-white  px-2 rounded-md py-4'>
                        <i class="fa-solid fa-spinner"></i>
                        <h2 className='text-sm xl:text-xl'>In Progress</h2>
                        <h1 className='text-sm xl:text-xl lg:my-1 font-bold'>200</h1>
                    </div>
                    <div className='bg-gradient-to-r from-teal-700 to-teal-400  flex flex-col lg:flex-row  justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-blue-800 cursor-pointer lg:h-auto h-28 w-36 lg:w-auto text-white  px-2 rounded-md py-4'>
                        <i class="fa-solid fa-circle-check"></i>
                        <h2 className='text-sm xl:text-xl'>Finished</h2>
                        <h1 className='text-sm xl:text-xl lg:my-1 font-bold'>150</h1>
                    </div>
                    <div className='bg-gradient-to-r from-red-700 to-red-400  flex flex-col lg:flex-row  justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-green-600 cursor-pointer lg:h-auto h-28 w-36 lg:w-auto text-white  px-2 rounded-md py-4'>
                        <i class="fa-solid fa-hourglass-half"></i>
                        <h2 className='text-sm xl:text-xl'>Overdue </h2>
                        <h1 className='text-sm xl:text-xl lg:my-1 font-bold'>20</h1>
                    </div>
                    <div className='bg-gradient-to-r from-gray-700 to-gray-400 flex flex-col lg:flex-row  justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-blue-800 cursor-pointer lg:h-auto h-28 w-36 lg:w-auto text-white  px-2 rounded-md py-4'>
                        <i class="fa-solid fa-circle-pause text-xl"></i>
                        <h2 className='text-sm xl:text-xl'>On Hold</h2>
                        <h1 className='text-sm xl:text-xl lg:my-1 font-bold'>150</h1>
                    </div>

                    <div className='bg-gradient-to-r from-rose-700 to-rose-400  flex flex-col lg:flex-row  justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-red-700 cursor-pointer lg:h-auto h-28 w-36 lg:w-auto text-white  px-2 rounded-md py-4'>
                        <i class="fa-solid fa-circle-xmark"></i>
                        <h2 className='text-sm xl:text-xl'>Cancelled</h2>
                        <h1 className='text-sm xl:text-xl lg:my-1 font-bold'>424</h1>
                    </div>
                </div>
            
            <div className=" p-1 ">
                <ProjectDataTable />
            </div>
        </div>
    )
}

export default Projects
