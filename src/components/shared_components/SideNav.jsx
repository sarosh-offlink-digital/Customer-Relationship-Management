import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo2 from '../../src/logo2.png';
import dashboardlogo from '../../src/dashboard.png';
import leadlogo from '../../src/leads.png';

import ticketlogo from '../../src/ticket.png';
const SideNav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
 const [isOpenSales, setIsOpenSales] = useState(false);

 const handleToggleForSales = () =>{
  setIsOpenSales(!isOpenSales)
 }
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    navigate(selectedValue);
  };
  
  const location = useLocation();

  const getLinkClasses = (path) => {
    return location.pathname === path
      ? "flex justify-start items-center border-r-8 py-2 border-white px-4 mx-4  w-40 rounded-md text-white bg-blue-400 cursor-pointer hover:bg-blue-600 hover:text-white hover:scale-105"
      : "flex justify-start items-center py-2 px-4 mx-4  w-40 rounded-md text-white  cursor-pointer hover:bg-blue-600 hover:text-white hover:scale-105";
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
        <div className="menu w-52 lg:w-80 min-h-full bg-gradient-to-b from-purple-900 via-blue-600 to-blue-900 text-base-content">
          {/* Sidebar content here */}
          <div className='w-48 mt-5 text-center'>
            <h1 className="p-4 lg:px-0 lg:py-3  lg:m-0 text-center text-sm  text-white lg:text-sm lg:text-center font-bold">Customer Relationship Management</h1>
          </div>
          <div className='flex justify-start'>
            <img src={logo2} className='ml-16 lg:ml-12 size-20 lg:size-20 mb-6' alt="logo" />
          </div>
          
          {/* <Link className={getLinkClasses("/dashboard")} to="/dashboard"><img src={dashboardlogo} alt="D" className='mr-6' /> Dashboard</Link> */}
          <div className='flex items-center realtive hover:bg-blue-600 rounded-md'>
            {/* <img src={dashboardlogo} alt="D" className='absolute left-10' /> */}
            <i class="fa-solid fa-layer-group absolute left-10 text-white text-xl"></i>
            {/* new dropdown with animated dropdown */}
            <div className="dropdown">
              <div tabIndex={0} role="button"
                className="flex justify-start items-center px-4 py-2 ml-14  w-32 rounded-md text-white bg-transparent cursor-pointer hover:bg-blue-600 hover:scale-105"
                onClick={handleToggle}>
                Dashboards
                <i className={`ml-7 text-lg fa-solid fa-caret-right transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}></i>
              </div>
              {isOpen && (
                <ul tabIndex={0} className="dropdown-content menu bg-transparent rounded-lg z-[1] w-52 px-2">
                  <li className="z-50 bg-blue-500 text-xs py-2">
                    <Link className="text-white " to="/dashboard">
                      <img src={dashboardlogo} alt="D" className="mr-3" />
                      Main Dashboard
                    </Link>
                  </li>
                  <li className="z-50 bg-blue-500 text-xs py-2">
                    <Link className="text-white" to="/leadsDashboard">
                      <i className="fa-solid fa-chalkboard-user text-white text-lg mr-2"></i>
                      Leads Dashboard
                    </Link>
                  </li>
                  <li className="z-50 bg-blue-500 text-xs py-2">
                    <Link className="text-white " to="/customerDashboard">
                      <i className="fa-solid fa-handshake text-white text-lg mr-2"></i>
                      Customer Dashboard
                    </Link>
                  </li>
                  <li className="z-50 bg-blue-500 text-xs py-2">
                    <Link className="text-white " to="/ProjectDashboard">
                      <i className="fa-solid fa-timeline text-white text-lg mr-2"></i>
                      Project Dashboard
                    </Link>
                  </li>
                  <li className="z-50 bg-blue-500 text-xs py-2">
                    <Link className="text-white " to="/hrDashboard">
                      <i className="fa-solid fa-user-gear text-white text-lg mr-2"></i>
                      HR Dashboard
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            {/* <i class="fa-solid fa-caret-down text-white absolute left-40"></i> */}
          </div>
          <Link className={getLinkClasses("/leads")} to="/leads"><img src={leadlogo} alt="D" className='mr-6' />Leads</Link>
          <Link className={getLinkClasses("/customers")} to="/customers"><i class="fa-solid fa-user-group text-white mr-6"></i>Customers</Link>

          <div className='flex items-center realtive hover:bg-blue-600 rounded-md'>
            <i class="fa-solid fa-dollar-sign absolute left-10 text-white text-xl"></i>

            <div className="dropdown">
              <div tabIndex={0} role="button"
                className="flex justify-start items-center py-2 px-4 ml-14 w-32 rounded-md text-white bg-transparent cursor-pointer hover:bg-blue-600 hover:scale-105"
                onClick={handleToggleForSales}>
                Sales
                <i className={`ml-[70px] text-lg fa-solid fa-caret-right transition-transform duration-300 ${isOpenSales ? 'rotate-90' : ''}`}></i>
              </div>
              {isOpenSales && (
                <ul tabIndex={0} className="dropdown-content menu bg-transparent rounded-lg z-[1] w-52 p-2">
                  <li className="z-50 bg-blue-500 text-xs py-2">
                    <Link className="text-white " to="/invoices">
                    <i className="fa-solid fa-file-invoice-dollar text-white text-lg mr-2"></i>
                      Invoices
                    </Link>
                  </li>
                  <li className="z-50 bg-blue-500 text-xs py-2">
                    <Link className="text-white " to="/payments">
                      <i className="fa-solid fa-credit-card text-white text-lg mr-2"></i>
                      Payments
                    </Link>
                  </li> 
                </ul>
              )}
            </div>
            {/* <i class="fa-solid fa-caret-right text-white absolute left-32"></i> */}
          </div>
          <Link className={getLinkClasses("/projects")} to="/projects" ><i class="fa-solid fa-bars-progress  text-white text-lg mr-6"></i>Projects</Link>
          <Link className={getLinkClasses("/tickets")} to="/tickets"><img src={ticketlogo} alt="D" className='mr-6 size-4' /> Ticket</Link>
          <Link className={getLinkClasses("/users")} to="/users"><i class="fa-solid fa-user-gear text-white mr-6"></i>Users</Link>
          {/* <Link className={getLinkClasses("/settings")} to="/settings"><i class="fa-solid fa-gears text-white mr-6"></i>Settings</Link> */}
          <Link className={getLinkClasses("/faqs")} to="/faqs"><i class="fa-solid fa-clipboard-question text-white mr-6"></i>User Faqs</Link>
        </div>
      </div>
    </div >
  );
};

export default SideNav;
