import React, { useState } from 'react';
import logo2 from '../../src/logo2.png';
import { Link, useLocation } from 'react-router-dom';

const SideNav = () => {

  const location = useLocation();

  const getLinkClasses = (path) => {
    return location.pathname === path
      ? "flex justify-between p-4 m-4 rounded-md text-white bg-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white hover:scale-105"
      : "flex justify-between p-4 m-4 rounded-md text-white  cursor-pointer hover:bg-blue-400 hover:text-white hover:scale-105";
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
    <div className="lg:drawer-open w-4 lg:w-80 bg-gray-200">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <label htmlFor="my-drawer-2" className="lg:hidden mx-1"><i class="fa-solid fa-bars"></i></label>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 min-h-full bg-blue-900 text-base-content">
          {/* Sidebar content here */}
          <h1 className="p-4 m-5 text-xl text-white text-center font-bold">Customer Relationship Management</h1>
          <div className='flex justify-center'>
            <img src={logo2} className='m-6' alt="logo" />
          </div>
          <Link className={getLinkClasses("/dashboard")} to="/dashboard">Dashboard</Link>
          <Link className={getLinkClasses("/leads")} to="/leads">Leads</Link>
          <Link className={getLinkClasses("/customers")} to="/customers">Customers</Link>
          <Link className={getLinkClasses("/users")} to="/users">Users</Link>
          <Link className={getLinkClasses("/sale")} to="/sale">Sale</Link>
          <Link className={getLinkClasses("/tickets")} to="/tickets">Tickets</Link>
        </div>
      </div>
    </div>

  );
};

export default SideNav;
