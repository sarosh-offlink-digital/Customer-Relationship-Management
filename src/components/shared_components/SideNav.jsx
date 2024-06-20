import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo2 from '../../src/logo2.png';
import dashboardlogo from '../../src/dashboard.png';
import leadlogo from '../../src/leads.png';
import customerlogo from '../../src/customer.png';
import saleslogo from '../../src/sale.png';
import projectlogo from '../../src/project.png';
import tasklogo from '../../src/task.png';
import ticketlogo from '../../src/ticket.png';
const SideNav = () => {

  const location = useLocation();

  const getLinkClasses = (path) => {
    return location.pathname === path
      ? "flex justify-start items-center p-4 mx-4 my-2 w-40 rounded-md text-white bg-blue-400 cursor-pointer hover:bg-blue-600 hover:text-white hover:scale-105"
      : "flex justify-start items-center p-4 mx-4 my-2 w-40 rounded-md text-white  cursor-pointer hover:bg-blue-600 hover:text-white hover:scale-105";
  };

  return (
    // <div className=''>

    //   <div className="w-96 h-screen bg-blue-800 text-white">
    //     <div className="p-4 m-5 text-xl text-center font-bold">Customer Relationship Management</div>
    //     <div className='flex justify-center'>
    //       <img src={logo2} className='m-6' alt="logo" />
    //     </div>
    //     <Link className={getLinkClasses("/dashboard")} to="/dashboard">Dashboard</Link>
    //     <Link className={getLinkClasses("/leads")} to="/leads">Leads</Link>
    //     <Link className={getLinkClasses("/customers")} to="/customers">Customers</Link>
    //     <Link className={getLinkClasses("/users")} to="/users">Users</Link>
    //     <Link className={getLinkClasses("/sale")} to="/sale">Sale</Link>
    //     <Link className={getLinkClasses("/tickets")} to="/tickets">Tickets</Link>

    //   </div>
    // </div>
    <div className="lg:drawer-open min-h-screen  lg:w-52 bg-gradient-to-b from-blue-900 to-blue-700">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle relative z-50" />
        <label htmlFor="my-drawer-2" className="lg:hidden"><i class="fa-solid fa-bars text-2xl absolute left-6 top-8 mx-2 text-white"></i></label>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu w-52 lg:w-80 min-h-full bg-gradient-to-b from-blue-900 via-blue-500 to-blue-700 text-base-content">
          {/* Sidebar content here */}
          <div className='w-48 mt-5 text-center'>
          <h1 className="p-4 lg:px-0 lg:py-3  lg:m-0 text-center text-sm  text-white lg:text-sm lg:text-center font-bold">Customer Relationship Management</h1>

          </div>
          <div className='flex justify-start'>
            <img src={logo2} className='ml-16 lg:ml-12 size-20 lg:size-20 mb-6' alt="logo" />
          </div>
          <Link className={getLinkClasses("/dashboard")} to="/dashboard"><img src={dashboardlogo} alt="D" className='mr-6'/> Dashboard</Link>
          <Link className={getLinkClasses("/leads")} to="/leads"><img src={leadlogo} alt="D" className='mr-6'/>Leads</Link>
          <Link className={getLinkClasses("/customers")} to="/customers"><i class="fa-solid fa-user-group text-white mr-6"></i>Customers</Link>
          <Link className={getLinkClasses("/projects")} to="/projects" ><i class="fa-solid fa-bars-progress  text-white text-lg mr-6"></i>Projects</Link>
          <Link className={getLinkClasses("/sale")} to="/sale"><img src={saleslogo} alt="D" className='mr-6'/>Sales</Link>
          <Link className={getLinkClasses("/tickets")} to="/tickets"><img src={ticketlogo} alt="D" className='mr-6 size-4'/> Ticket</Link>
        </div>
      </div>
    </div>

  );
};

export default SideNav;
