import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import hoorayAnimation from '../../src/hooray.gif';

const MyDataTable = ({ leadsData, sendConvertedCustomer }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [convertedCustomer, setConvertedCustomer] = useState(0);
  const [display, setDisplay] = useState('dataTable')
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = leadsData.filter(item =>
    Object.values(item).some(value => {
      if (value !== null && value !== undefined) {
        return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false;
    })
  );

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleSelectChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const convertToCustomer = async () => {
    try {
      const response = await fetch('http://localhost:5000/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedCustomer),
      });
      setConvertedCustomer(convertedCustomer + 1);
      sendConvertedCustomer(convertedCustomer + 1);
      if (!response.ok) {
        throw new Error('Failed to convert lead to customer');
      }
    } catch (error) {
      console.error('Error converting lead to customer:', error.message);
    }
  };

  const columns = [
    { name: 'ID', selector: row => row.contact_form_id, sortable: true, width: '80px' },
    { name: 'Name', selector: row => row.contact_form_name, sortable: true, wrap: true },
    { name: 'Email', selector: row => row.contact_form_email, sortable: true, wrap: true },
    { name: 'Phone', selector: row => row.contact_form_phone, sortable: true, wrap: true },
    { name: 'Service', selector: row => row.contact_form_service, sortable: true, wrap: true },
    { name: 'Brand', selector: row => row.brand, sortable: true, wrap: true },
    { name: 'Created At', selector: row => row.contact_form_created_at, sortable: true, wrap: true },
    {
      name: 'Actions',
      cell: row => (
        <div>
          <button data-tip="View"
            className='tooltip tooltip-info bg-blue-500 hover:bg-blue-800 hover:scale-105 text-white p-2 rounded-md'
            onClick={() => {
              handleCustomerClick(row);
              handleDisplay('form');
            }}
          >
            <i class="fa-solid fa-eye"></i>
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  const handleDisplay = (display) => {
    setDisplay(display)
  }
  return (
    <div>

      {display === 'dataTable' && (
        <>
          {/* test filter new */}
          {/* <div className="dropdown dropdown-right">
            <div tabIndex={0} role="button" className="btn m-1"><i class="fa-solid fa-filter text-sm mx-2"></i></div>
            <ul tabIndex={0} className="flex gap-2 dropdown-content bg-transparent z-[1]">
              <li><select className='border-2  m-2 rounded-lg cursor-pointer  w-36 ' name="filter" id="filter" onChange={handleSelectChange}>
                <option value="">All Names</option>
                {leadsData.map((row) => (
                  <option className='w-52' key={row.id} value={row.contact_form_name}>
                    {row.contact_form_name}
                  </option>
                ))}
              </select></li>
              <li> <select className='border-2 m-2 rounded-lg cursor-pointer w-36' name="filter" id="filter" onChange={handleSelectChange}>
                <option value="">All Emails</option>
                {leadsData.map((row) => (
                  <option key={row.id} value={row.contact_form_email}>
                    {row.contact_form_email}
                  </option>
                ))}
              </select></li>
              <li> <select className='border-2  m-2 rounded-lg cursor-pointer w-36' name="filter" id="filter" onChange={handleSelectChange}>
                <option value="">All Services</option>
                {leadsData.map((row) => (
                  <option key={row.id} value={row.contact_form_service}>
                    {row.contact_form_service}
                  </option>
                ))}
              </select></li>
            </ul>
          </div> */}
          {/* test filter new end */}
          <div className='flex justify-center items-center'>
            {/* drawer filter start */}
            <div className="drawer drawer-end  z-[999]">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle"/>
              <div className="drawer-content ">
                {/* Page content here */}
                {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}
              </div>
              <div className="drawer-side ">
                <label htmlFor="my-drawer-4" aria-label="close sidebar " className="drawer-overlay"></label>
                <ul className="menu bg-base-100 text-base-content  min-h-full w-96 p-4">
                  {/* Sidebar content here */}
                  <div className='rounded-t-lg relative'>
                    <h1 className='bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white rounded-t-lg px-4 py-2 text-xl'>
                      <i class="fa-solid fa-filter text-sm mx-2 "></i>Filter
                    </h1>
                    <div className="modal-action">
                      {/* <form method="dialog">
                        <button className=" text-white absolute right-3 top-2 tooltip tooltip-left tooltip-info" data-tip="Close">
                          <i class="fa-solid fa-circle-xmark text-xl"></i>
                        </button>
                      </form> */}
                    </div>
                    <select className='border-2 py-2 m-2 rounded-lg cursor-pointer px-2 w-[340px] ' name="filter" id="filter" onChange={handleSelectChange}>
                      <option value="">All Names</option>
                      {leadsData.map((row) => (
                        <option className='w-52' key={row.id} value={row.contact_form_name}>
                          {row.contact_form_name}
                        </option>
                      ))}
                    </select>
                    <select className='border-2 py-2 m-2 rounded-lg cursor-pointer px-2  w-[340px] ' name="filter" id="filter" onChange={handleSelectChange}>
                      <option value="">All Emails</option>
                      {leadsData.map((row) => (
                        <option key={row.id} value={row.contact_form_email}>
                          {row.contact_form_email}
                        </option>
                      ))}
                    </select>
                    <select className='border-2 py-2 m-2 rounded-lg cursor-pointer px-2  w-[340px] ' name="filter" id="filter" onChange={handleSelectChange}>
                      <option value="">All Services</option>
                      {leadsData.map((row) => (
                        <option key={row.id} value={row.contact_form_service}>
                          {row.contact_form_service}
                        </option>
                      ))}
                    </select>
                  </div>
                </ul>
              </div>
            </div>
            {/* drawer filter end  */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box  bg-white p-0 pb-32">
                <div className="">
                  <div className='rounded-t-lg relative'>
                    <h1 className='bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white rounded-t-lg px-4 py-2 text-xl'>
                      <i class="fa-solid fa-filter text-sm mx-2"></i>Filter
                    </h1>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className=" text-white absolute right-3 top-2 tooltip tooltip-left tooltip-info" data-tip="Close">
                          <i class="fa-solid fa-circle-xmark text-xl"></i>
                        </button>
                      </form>
                    </div>
                    <select className='border-2 py-2 m-2 rounded-lg cursor-pointer px-2 w-36 ' name="filter" id="filter" onChange={handleSelectChange}>
                      <option value="">All Names</option>
                      {leadsData.map((row) => (
                        <option className='w-52' key={row.id} value={row.contact_form_name}>
                          {row.contact_form_name}
                        </option>
                      ))}
                    </select>
                    <select className='border-2 py-2 m-2 rounded-lg cursor-pointer px-2 w-36' name="filter" id="filter" onChange={handleSelectChange}>
                      <option value="">All Emails</option>
                      {leadsData.map((row) => (
                        <option key={row.id} value={row.contact_form_email}>
                          {row.contact_form_email}
                        </option>
                      ))}
                    </select>
                    <select className='border-2 py-2 m-2 rounded-lg cursor-pointer px-2 w-36' name="filter" id="filter" onChange={handleSelectChange}>
                      <option value="">All Services</option>
                      {leadsData.map((row) => (
                        <option key={row.id} value={row.contact_form_service}>
                          {row.contact_form_service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
          <div>
            <div className="container w-[370px] lg:w-auto mx-auto lg:p-4 relative">
              <input
                type="text"
                placeholder="Search Leads"
                value={searchTerm}
                onChange={handleSearchChange}
                className="border focus:border-blue-400 text-sm outline-transparent border-gray-300 w-36 lg:w-auto rounded-md px-1 py-1 mb-4 absolute z-30 right-2 top-3 lg:right-8 lg:top-7"
              />
              <div>
              <label htmlFor="my-drawer-4" className="drawer-button absolute z-30 text-white lg:left-6 lg:top-8 top-4 left-3 hover:scale-110 cursor-pointer tooltip tooltip-info"> <i class="fa-solid fa-filter"></i></label>
                {/* <button className="absolute z-30 text-white lg:left-6 lg:top-8 top-4 left-3 hover:scale-110 cursor-pointer tooltip tooltip-info" data-tip='Filter' onClick={() => document.getElementById('my_modal_5').showModal()}>
                  <i class="fa-solid fa-filter"></i>
                </button> */}
              </div>
              <DataTable
                title="Leads"
                columns={columns}
                data={filteredData}
                pagination={true}
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10, 20, 50]}
                paginationComponentOptions={{
                  rowsPerPageText: 'Rows per page:',
                }}
                highlightOnHover={true}
                customStyles={{
                  header: {
                    style: {
                      fontSize: '16px',
                      fontWeight: 'bold',
                      background: 'linear-gradient(to right, #1e3a8a, #2563eb, #571F8B);',
                      opacity: 'var(--tw-bg-opacity)',
                      color: 'white',
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      paddingLeft: "35px",
                    },
                  },
                  headRow: {
                    style: {
                      backgroundColor: '#ffffff',
                    },
                  },
                  headCells: {
                    style: {
                      paddingLeft: '8px', // Adjust padding as needed
                      paddingRight: '8px', // Adjust padding as needed
                    },
                  },
                  rows: {
                    style: {
                      minHeight: '48px', // Reduce row height
                      borderBottomWidth: '1px',
                      borderColor: '#e2e8f0',
                      '&:nth-of-type(odd)': {
                        backgroundColor: '#ffffff',
                      },
                      '&:hover': {
                        backgroundColor: '#ffffff',
                      },
                    },
                  },
                  cells: {
                    style: {
                      paddingLeft: '8px', // Adjust padding as needed
                      paddingRight: '8px', // Adjust padding as needed
                    },
                  },
                }}
                className="table-auto w-full rounded-md"
              />
            </div>
          </div>
        </>
      )}

      {display === 'form' && selectedCustomer && (
        <div className="mt-5">
          {/* <p>ID: {selectedCustomer.contact_form_id}</p>
    <p>Name: {selectedCustomer.contact_form_name}</p>
    <p>Email: {selectedCustomer.contact_form_email}</p>
    <p>Phone: {selectedCustomer.contact_form_phone}</p>
    <p>Service: {selectedCustomer.contact_form_service}</p>
    <p>Brand: {selectedCustomer.brand}</p>
    <p>Created At: {selectedCustomer.contact_form_created_at}</p> */}
          <div className='my-10'>
            <div className='bg-gradient-to-r from-blue-700 to-blue-400 rounded-t-md p-4'>
              <h1 className='text-sm xl:text-xl text-white'>Lead Information #{selectedCustomer.contact_form_id}</h1>
            </div>
            <div className='bg-white p-4 rounded-b-md py-10'>
              <div>
                <div>
                  <div className='flex justify-start lg:justify-end'>
                    <button
                      onClick={() => {
                        convertToCustomer();
                        document.getElementById('my_modal_2').showModal();
                      }}
                      data-tip='Convert to Customers'
                      className='tooltip tooltip-left tooltip-info bg-blue-800 rounded-lg px-2 py-3 text-white hover:bg-blue-500 shadow-md'>
                      <i className="fa-solid fa-user-plus"></i>
                      Customer
                    </button>

                  </div>
                  <dialog id="my_modal_2" className="modal">
                    <div className="modal-box bg-white">
                      <div className='flex justify-center items-center'>
                        <img src={hoorayAnimation} className='h-14 w-14' alt="" />
                        <h3 className="font-bold text-xl text-blue-800">Customer <span className='text-blue-500'>Added!</span> </h3>
                      </div>
                      <p className="py-4 text-center text-sm text-gray-400">Close this and go to Customers Tab</p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                  {/* <label className="my-3 flex items-center bg-gray-50 text-black  input input-bordered gap-2 w-full md:w-auto flex-grow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >ID: {selectedCustomer.contact_form_id}</h1>
            </label> */}
                  <div>
                    <div className=' flex flex-col lg:flex-row gap-2'>
                      <label className="my-3 flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto lg:w-[50%] shadow-md">
                        <i className="fa-solid fa-user text-blue-800"></i>
                        <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Name: {selectedCustomer.contact_form_name}</h1>
                      </label>
                      <label class="my-3 input input-bordered flex items-center bg-gray-50  text-black gap-2 w-full lg:w-[50%] shadow-md">
                        <i className="fa-solid fa-envelope text-orange-500"></i>
                        <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Email: {selectedCustomer.contact_form_email} </h1>
                      </label>
                    </div>
                    <div className=' flex flex-col lg:flex-row gap-2'>
                      <label class="my-3 flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto lg:w-[50%] shadow-md">
                        <i className="fa-solid fa-phone text-green-500"></i>
                        <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Phone: {selectedCustomer.contact_form_phone} </h1>
                      </label>
                      <label className="my-3 flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto lg:w-[50%] shadow-md">
                        <i className="fa-solid fa-globe text-blue-500"></i>
                        <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Service: {selectedCustomer.contact_form_service}</h1>
                      </label>
                    </div>
                    <div className=' flex flex-col lg:flex-row gap-2'>
                      <label className="my-3 flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto lg:w-[50%] shadow-md">
                        <i class="fa-solid fa-layer-group text-cyan-400"></i>
                        <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Brand: {selectedCustomer.brand}</h1>
                      </label>
                      <label className="my-3 flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto lg:w-[50%] shadow-md">
                        <i class="fa-regular fa-calendar-days text-teal-400"></i>
                        <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Created At: {selectedCustomer.contact_form_created_at}</h1>
                      </label>
                    </div>
                    <div className="my-3 bg-gray-50  text-black border-2 rounded-lg w-full p-3 shadow-md">
                      <p className='mb-4'><i class="fa-solid fa-message text-blue-500"></i> Message: </p>
                      <p className="grow bg-transparent  border-none focus:ring-0 focus:outline-none"> {selectedCustomer.contact_form_message} </p>
                    </div>
                  </div>
                  <button className='bg-blue-800 p-3 my-5 text-white rounded-md' onClick={() => handleDisplay('dataTable')}><i class="fa-solid fa-caret-left mx-2"></i>Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyDataTable;