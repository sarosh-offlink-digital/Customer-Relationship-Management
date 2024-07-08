import React, { useState } from 'react'
import MyDataTable from './dataTables/MyDataTable'
import SideNav from './shared_components/SideNav'
import Header from './shared_components/Header'
import leadslogo from '../src/leads.png';
import totalproj from "../src/documents.png"
import completed from "../src/check.png"
import pending from "../src/pending.png"

const Leads = () => {


    const[leadsData, setLeadsData] = useState([])
    const[convertedCustomer, setConvertedCustomer] = useState(0)
    const handleLeadsData = (data) => {
        setLeadsData(data);
      };

    const handleConvertedLeads =(data)=>{
        setConvertedCustomer(data)
    }
    const latestContactFormId = leadsData.length;
    return (
        <div className="flex flex-col  w-full">
            <div className='p-4'>
                <Header />
            </div>
            <div className='flex flex-wrap justify-start'>
                <div className='flex flex-col  cursor-pointer bg-gradient-to-r from-blue-700 to-blue-400 p-3 rounded-lg scale-[.65] '>
                    <img src={leadslogo} alt="db" className='size-7'/>
                    <h1 className='text-white text-2xl font-bold  pr-24'>Leads</h1>
                </div>
                <div className='flex gap-4 mt-4 lg:gap-10 justify-start text-center items-center px-4  mb-3'>
                    <div className='bg-gradient-to-r from-blue-700 to-blue-400 flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-blue-800 cursor-pointer lg:h-auto h-28 w-30  text-white  px-2 rounded-md py-4'>
                        <img src={totalproj} alt='projects' className='w-5 xl:w-9' />
                        <h2 className='text-sm xl:text-xl'>Total Leads</h2>
                        <h1 className='text-sm xl:text-xl my-1 font-bold'>{latestContactFormId}</h1>
                    </div>
                    <div className='bg-gradient-to-r from-teal-700 to-teal-400 flex  flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-green-600 cursor-pointer lg:h-auto h-28 w-30  text-white  px-2 rounded-md py-4'>
                        <img src={completed} alt='projects' className='w-5 xl:w-9' />
                        <h2 className='text-sm xl:text-xl'>Converted leads</h2>
                        <h1 className='text-sm xl:text-xl my-1 font-bold'>{convertedCustomer}</h1>
                    </div>
                    <div className='bg-gradient-to-r from-orange-700 to-orange-400 flex  flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 hover:bg-red-700 cursor-pointer lg:h-auto h-28 w-30  text-white  px-2 rounded-md py-4'>
                        <img src={pending} alt='projects' className='w-5 xl:w-9' />
                        <h2 className='text-sm xl:text-xl'>Pending Leads</h2>
                        <h1 className='text-sm xl:text-xl my-1 font-bold'>{latestContactFormId}</h1>
                    </div>
                </div>
            </div>
            <div className=" p-1 ">
                <MyDataTable sendLeadsData={handleLeadsData} sendConvertedCustomer={handleConvertedLeads} />
            </div>
            {/* <div>
                
                {leadsData.map((lead, index) => (
                    <div key={index}>
                        {lead.contact_form_id}
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default Leads
