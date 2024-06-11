import React from 'react'
import MyDataTable from './dataTables/MyDataTable'
import SideNav from './shared_components/SideNav'
import Header from './shared_components/Header'

const Leads = () => {
    return (
        <div className="flex flex-col bg-slate-200 w-full min-h-screen p-4">

            <Header />

            <div className='flex flex-wrap gap-10 justify-center text-center items-center my-6'>
                <div className='bg-blue-400 flex justify-between items-center text-center hover:scale-105 hover:bg-blue-800 cursor-pointer w-44 text-white xl:w-96 px-2 rounded-md py-4'>
                    <h2 className='text-sm xl:text-xl'>Total Leads</h2>
                    <h1 className='text-sm xl:text-3xl my-1 font-bold'>1045</h1>
                </div>
                <div className='bg-blue-400 flex  justify-between items-center text-center hover:scale-105 hover:bg-blue-800 cursor-pointer w-44 text-white xl:w-96 px-2 rounded-md py-4'>
                    <h2 className='text-sm xl:text-xl'>Converted Leads</h2>
                    <h1 className='text-sm xl:text-3xl my-1 font-bold'>218</h1>
                </div>
                <div className='bg-blue-400 flex  justify-between items-center text-center hover:scale-105 hover:bg-blue-800 cursor-pointer w-44 text-white xl:w-96 px-2 rounded-md py-4'>
                    <h2 className='text-sm xl:text-xl'>Pending Leads</h2>
                    <h1 className='text-sm xl:text-3xl my-1 font-bold'>155</h1>
                </div>
            </div>

            <div className="flex-1 p-4">
                <MyDataTable />
            </div>
        </div>
    )
}

export default Leads
