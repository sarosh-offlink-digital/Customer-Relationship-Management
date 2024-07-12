import React, { useState } from 'react';
import MyDataTable from './dataTables/MyDataTable';
import Header from './shared_components/Header';
import leadslogo from '../src/leads.png';

const Leads = ({ leadsData }) => {
  const [convertedCustomer, setConvertedCustomer] = useState(0);

  const handleConvertedLeads = (data) => {
    setConvertedCustomer(data);
  };

  const latestContactFormId = leadsData.length;

  return (
    <div className="flex flex-col w-full">
      <div className="p-4">
        <Header />
      </div>
      <div className="flex flex-wrap justify-start">
        <div className="flex flex-col cursor-pointer bg-gradient-to-r from-blue-700 to-blue-400 p-3 rounded-lg scale-[.65]">
          <img src={leadslogo} alt="db" className="size-7" />
          <h1 className="text-white text-2xl font-bold pr-24">Leads</h1>
        </div>
        <div className="flex gap-4 mt-4 lg:gap-10 justify-start text-center items-center px-4 mb-3">
          <div className="border-2 shadow-lg border-blue-800 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105 cursor-pointer lg:h-auto h-28 w-30 text-blue-800 px-2 rounded-md py-4">
            <i className="fa-solid fa-circle-user text-2xl"></i>
            <h2 className="text-sm lg:text-base">Total Leads</h2>
            <h1 className="text-sm lg:text-base my-1 font-bold">{latestContactFormId}</h1>
          </div>
          <div className="border-2 shadow-lg border-teal-500 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105  cursor-pointer lg:h-auto h-28 w-30 text-teal-500 px-2 rounded-md py-4">
            <i className="fa-solid fa-arrows-turn-to-dots text-2xl"></i>
            <h2 className="text-sm lg:text-base">Converted leads</h2>
            <h1 className="text-sm lg:text-base my-1 font-bold">{convertedCustomer}</h1>
          </div>
          <div className="border-2 shadow-lg border-orange-600 border-l-[12px] flex flex-wrap justify-center lg:justify-between gap-1 lg:gap-3 items-center text-center hover:scale-105  cursor-pointer lg:h-auto h-28 w-30 text-orange-600 px-2 rounded-md py-4">
            <i className="fa-solid fa-clock-rotate-left text-2xl"></i>
            <h2 className="text-sm lg:text-base">Pending Leads</h2>
            <h1 className="text-sm lg:text-base my-1 font-bold">{latestContactFormId}</h1>
          </div>
        </div>
      </div>
      <div className="p-1">
        <MyDataTable leadsData={leadsData} sendConvertedCustomer={handleConvertedLeads} />
      </div>
    </div>
  );
};

export default Leads;
