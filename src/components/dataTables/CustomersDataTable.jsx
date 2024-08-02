import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import cdalogo from '../../src/cda.png';
import cbplogo from '../../src/cbp.png';
import discounticon from '../../src/discount.png';
import hoorayAnimation from '../../src/hooray.gif';
import tickAnimation from '../../src/verified-file.gif';

const CustomersDataTable = ({ onFetchData }) => {
  const [apidata, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [display, setDisplay] = useState('dataTable');

  const [services, setServices] = useState([]);
  const [itemsAdd, setItemsAdd] = useState('');
  const [brandLogo, setBrandLogo] = useState(cdalogo);
  const [currency, setCurrency] = useState('');

  const [customerDetail, setCustomerDetail] = useState({
    customerName: '',
    customerEmail: '',
    customerMobile: null,
    customerService: '',
    customerPayment: '',
  });

  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [brandMsg, setBrandMsg] = useState('Please Select a Brand First (from Customer Details)');
  const [items, setItems] = useState([{ id: 1, customItem: '', itemQty: 1, unitCost: 0, totalCost: 0, itemDescription: '' }]);

  // const handleServices = (serviceNumber) => {
  //     switch (serviceNumber) {
  //         case 1:
  //             setBrandLogo(cdalogo)
  //             setServices([
  //                 'Web Development',
  //                 'Logo Design',
  //                 'Social Media Marketing',
  //                 'Branding',
  //                 'SEO Services',
  //                 'Custom',
  //             ]);
  //             break;
  //         case 2:
  //             setBrandLogo(cbplogo)
  //             setServices([
  //                 'GhostWriting',
  //                 'Book Editing',
  //                 'Book Publishing',
  //                 'Book Marketing',
  //                 'Book Cover Design',
  //                 'Biography Writing',
  //                 'Book Trailer',
  //                 'Children Book Writing',
  //                 'Comic Book Writing',
  //                 'Fiction Writing',
  //                 'Audio Book',
  //                 'Custom',
  //             ]);
  //             break;
  //         default:
  //             break;
  //     }
  // };

  // const handleBrandChange = (event) => {
  //     const brand = event.target.value;
  //     if (brand === 'Captain Design Agency') {
  //         setBrandMsg('Captain Design Agency');
  //         handleServices(1);
  //     } else if (brand === 'Captain Book Publishing') {
  //         handleServices(2);
  //         setBrandMsg('Captain Book Publishing');
  //     }
  // };

  const addItem = () => {
    if (items.length < 5) {
      setItems([...items, { id: items.length + 1, customItem: '', itemQty: 1, unitCost: 0, totalCost: 0, itemTax: 0, itemDescription: '' }]);
    } else {
      setItemsAdd('Max 5 items can be added');
    }
  };

  const removeItem = (id) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
      setItemsAdd('');
    }
  };

  const handleInputChange = (id, field, value) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        let updatedItem = { ...item, [field]: value };

        if (field === 'unitCost' || field === 'itemQty' || field === 'itemTax') {
          let taxPercentage = parseFloat(updatedItem.itemTax) / 100 || 0;
          let subtotal = parseFloat(updatedItem.unitCost) * parseFloat(updatedItem.itemQty) || 0;
          let taxAmount = subtotal * taxPercentage;
          updatedItem.totalCost = subtotal + taxAmount;
        }

        return updatedItem;
      }
      return item;
    });

    setItems(newItems);
  };


  const handleCurrency = (e) => {
    setCurrency(e.target.value);
  };

  const handleDiscount = (e) => {
    setDiscount(e.target.value);
  };
  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value)
  }

  const totalAmount = items.reduce((total, item) => total + item.totalCost, 0);






  // import end

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/customers'); // Using the relative path due to proxy setting

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        const updatedData = result.map(item => ({
          ...item,
          brand: response.url === 'http://localhost:5000/customers' ? 'Captain Design Agency' : 'Captain Book Publishing'
        }));
        setApiData(updatedData);
        onFetchData(updatedData)
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  },);
  const discountedTotalAmount = totalAmount - discount;

  // API DATA CHANDES AND EDITS
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create the data object to send
    const data = {
      ...selectedCustomer,
      contact_form_payment: discountedTotalAmount,
    };
    console.log('Data to be sent:', data);
    try {
      const response = await fetch(`http://localhost:5000/customer/${selectedCustomer._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const updatedCustomer = await response.json();
      console.log('Updated Customer:', updatedCustomer);


      setApiData(apidata.map((customer) =>
        customer._id === updatedCustomer._id ? updatedCustomer : customer
      ));
      setDisplay('dataTable');
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error);
    }
  };


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = apidata.filter(item =>
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
  const columns = [
    { name: 'ID', selector: row => row._id, sortable: true, width: '80px' },
    { name: 'Name', selector: row => row.contact_form_name, sortable: true, wrap: true },
    { name: 'Email', selector: row => row.contact_form_email, sortable: true, wrap: true },
    { name: 'Phone', selector: row => row.contact_form_phone, sortable: true, wrap: true },
    { name: 'Service', selector: row => row.contact_form_service, sortable: true, wrap: true },
    { name: 'Brand', selector: row => row.brand, sortable: true, wrap: true },
    { name: 'Created At', selector: row => row.createdAt, sortable: true, wrap: true },
    {
      name: 'Actions',
      cell: row => (
        <div>
          {/* Link to leadform */}
          {/* <Link
            to={`/leadform/${row.contact_form_id}`}
            className='bg-blue-500 hover:bg-blue-800 hover:scale-105 text-white p-2 rounded-md mx-2'
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </Link> */}

          {/* Button to show customer details */}

          <div className="dropdown dropdown-left">
            <div tabIndex={0} role="button" data-tip="View & Edit" className="tooltip tooltip-info bg-blue-500 hover:bg-blue-800 hover:scale-105  text-white p-2 rounded-md"><i class="fa-solid fa-circle-chevron-down"></i></div>

            <ul tabIndex={0} className="flex dropdown-content gap-2 bg-base-100 rounded-box z-[1] mr-2 p-2 shadow">
              <li>
                <button data-tip="View"
                  className='tooltip tooltip-info bg-blue-500 hover:bg-blue-800 hover:scale-105 text-white p-2 rounded-md'
                  onClick={() => {
                    handleCustomerClick(row);
                    handleDisplay('form');
                  }}>

                  <i class="fa-solid fa-eye"></i>
                </button>
              </li>
              <li>
                <button data-tip="Edit"
                  className='tooltip tooltip-info bg-blue-500 hover:bg-blue-800 hover:scale-105 text-white p-2 rounded-md'
                  onClick={() => {
                    handleCustomerClick(row);
                    handleDisplay('editform');
                  }}>

                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  const handleInputChangeCustomers = (e) => {
    const { name, value } = e.target;
    setSelectedCustomer({
      ...selectedCustomer,
      [name]: value
    });
  };

  const handleDisplay = (display) => {
    setDisplay(display)
  }
  const handleCombinedChange = (event) => {
    handlePaymentMethod(event);
    handleInputChangeCustomers(event);
  };
  return (
    <div>
      {/* customer changed verification */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white">
          <div className='flex justify-center items-center my-4'>
            <img src={tickAnimation} className='h-14 w-14' alt="" />
          </div>
          <div className='flex justify-center items-center'>
            <h3 className="font-bold text-xl text-blue-800">Customer <span className='text-blue-500'>Information Changed!</span> </h3>
          </div>

        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {/* datable component conditional render */}
      {display === 'dataTable' && (
        <>

          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box  bg-white p-0 pb-32">
              <div className="">
                <div className='rounded-t-lg relative'>
                  <h1 className='bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white rounded-t-lg px-4 py-2 text-xl'><i className="fa-solid fa-filter text-sm mx-2"></i>Filter</h1>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className=" text-white absolute right-3 top-2 tooltip tooltip-left tooltip-info" data-tip="Close"><i className="fa-solid fa-circle-xmark text-xl"></i></button>
                    </form>
                  </div>
                  <select className='border-2 py-2 m-2 rounded-lg cursor-pointer px-2 w-36' name="filter" id="filter" onChange={handleSelectChange}>
                    <option value="">All Names</option>
                    {apidata.map((row) => (
                      <option className='w-52' key={row.id} value={row.contact_form_name}>
                        {row.contact_form_name}
                      </option>
                    ))}
                  </select>
                  <select className='border-2 py-2 m-2 rounded-lg cursor-pointer px-2 w-36' name="filter" id="filter" onChange={handleSelectChange}>
                    <option value="">All Emails</option>
                    {apidata.map((row) => (
                      <option key={row.id} value={row.contact_form_email}>
                        {row.contact_form_email}
                      </option>
                    ))}
                  </select>
                  <select className='border-2 py-2 m-2 rounded-lg cursor-pointer px-2 w-36' name="filter" id="filter" onChange={handleSelectChange}>
                    <option value="">All Services</option>
                    {apidata.map((row) => (
                      <option key={row.id} value={row.contact_form_service}>
                        {row.contact_form_service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </dialog>
          <div className="container w-[370px] lg:w-auto mx-auto lg:p-4 relative">
            <input
              type="text"
              placeholder="Search Customers"
              value={searchTerm}
              onChange={handleSearchChange}
              className="border focus:border-blue-400 text-sm outline-transparent border-gray-300 w-36 lg:w-auto rounded-md px-1 py-1 mb-4 absolute z-30 right-2 top-3 lg:right-8 lg:top-7"
            />
            <div>
              <button className="absolute z-30 text-white lg:left-7 lg:top-8 top-4 left-3 hover:scale-110 cursor-pointer tooltip tooltip-info" data-tip='Filter' onClick={() => document.getElementById('my_modal_5').showModal()}><i className="fa-solid fa-filter"></i></button>
              <Link to='/newcustomer' data-tip="Add new Customers " className='tooltip tooltip-right tooltip-info absolute z-30 text-white lg:left-36 lg:top-8 top-4 left-32 hover:scale-110'><i className="fa-solid fa-circle-plus "></i></Link>
            </div>
            <DataTable
              title="Customers"
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
                    background: 'linear-gradient(to right, #1e3a8a, #2563eb, #60a5fa);',
                    opacity: 'var(--tw-bg-opacity)',
                    color: 'white',
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    paddingLeft: '35px'
                  },
                },
                headRow: {
                  style: {
                    backgroundColor: '#ffffff',
                  },
                },
                headCells: {
                  style: {
                    paddingLeft: '8px',
                    paddingRight: '8px',
                  },
                },
                rows: {
                  style: {
                    minHeight: '48px',
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
                    paddingLeft: '8px',
                    paddingRight: '8px',
                  },
                },
              }}
              className="table-auto w-full rounded-md"
            />
          </div>
        </>
      )}
      {/* form view componenet conditional render */}
      {
        display === 'form' &&
        (
          <div className='my-10'>
            <div className='bg-gradient-to-r from-blue-700 to-blue-400 rounded-t-md p-4'>
              <h1 className='text-sm xl:text-xl text-white'>Customer Information #{selectedCustomer._id}</h1>
            </div>
            <div className='bg-white p-4 rounded-b-md py-10'>
              <div>
                <div>
                  {/* <div className='flex justify-start lg:justify-end'>
              <button className='bg-blue-800 rounded-lg px-2 py-3 text-white hover:bg-blue-500'> <i class="fa-solid fa-user-plus"></i> Customer</button>
            </div> */}
                  {/* <label className="my-3 flex items-center bg-gray-50 text-black  input input-bordered gap-2 w-full md:w-auto flex-grow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >ID: {selectedCustomer.contact_form_id}</h1>
            </label> */}
                  <div className=' flex flex-col lg:flex-row gap-2'>
                    <label className="my-3 flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto lg:w-[50%]">
                      <i className="fa-solid fa-user text-blue-800"></i>
                      <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Name: {selectedCustomer.contact_form_name}</h1>
                    </label>
                    <label class="my-3 input input-bordered flex items-center bg-gray-50  text-black gap-2 w-full lg:w-[50%]">
                      <i className="fa-solid fa-envelope text-orange-500"></i>
                      <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Email: {selectedCustomer.contact_form_email} </h1>
                    </label>
                  </div>
                  <div className=' flex flex-col lg:flex-row gap-2'>
                    <label class="my-3 flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto lg:w-[50%] ">
                      <i className="fa-solid fa-phone text-green-500"></i>
                      <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Phone: {selectedCustomer.contact_form_phone} </h1>
                    </label>
                    <label className="my-3 flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto lg:w-[50%]">
                      <i className="fa-solid fa-globe text-blue-500"></i>
                      <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Package: {selectedCustomer.contact_form_service}</h1>
                    </label>

                  </div>
                  <div className=' flex flex-col lg:flex-row gap-2'>
                    <label className="my-3 flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto lg:w-[50%]">
                      <i class="fa-solid fa-layer-group text-cyan-400"></i>
                      <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Brand: {selectedCustomer.brand}</h1>
                    </label>
                    <label className="my-3 flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto lg:w-[50%]">
                      <i class="fa-solid fa-layer-group text-cyan-400"></i>
                      <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Service: {selectedCustomer.contact_form_product_service}</h1>
                    </label>
                    <label className="my-3 flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto lg:w-[50%]">
                      <i class="fa-regular fa-calendar-days text-teal-400"></i>
                      <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Created At: {selectedCustomer.createdAt}</h1>
                    </label>
                  </div>
                  <div className="my-3 bg-gray-50  text-black border-2 rounded-lg w-full p-3">
                    <p className='mb-4'><i class="fa-solid fa-message text-blue-500"></i> Message: </p>
                    <p className="grow bg-transparent  border-none focus:ring-0 focus:outline-none"> {selectedCustomer.contact_form_message} </p>
                  </div>
                  <div className=' flex flex-col lg:flex-row gap-2'>
                    <label className="my-3 flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto lg:w-[50%]">
                      <i class="fa-solid fa-file-invoice-dollar text-red-500"></i>
                      <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none " >Invoice #: </h1>
                    </label>
                    <label class="my-3 input input-bordered flex items-center bg-gray-50  text-black gap-2 w-full lg:w-[50%]">
                      <i class="fa-solid fa-coins text-yellow-500"></i>
                      <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Payment: {selectedCustomer.contact_form_payment_currency} {selectedCustomer.contact_form_payment} </h1>
                    </label>
                    <label class="my-3 input input-bordered flex items-center bg-gray-50  text-black gap-2 w-full lg:w-[50%]">
                      <i class="fa-solid fa-credit-card text-cyan-500"></i>
                      <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Payment Mode: {selectedCustomer.contact_form_payment_mode}</h1>
                    </label>
                    <label class="my-3 input input-bordered flex items-center bg-gray-50  text-black gap-2 w-full lg:w-[50%]">
                    <i class={selectedCustomer.contact_form_payment_status === 'Unpaid' ? 'fa-solid fa-circle-exclamation text-orange-500' : 'fa-solid fa-circle-check text-green-500'}></i>
                      <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Payment Status: {selectedCustomer.contact_form_payment_status}</h1>
                    </label>
               
                  </div>
                  <button className='bg-blue-800 p-3 my-5 text-white rounded-md' onClick={() => handleDisplay('dataTable')}><i class="fa-solid fa-caret-left mx-2"></i>Back</button>
                  <div>

                  </div>
                  {/* Invoice Section s*/}

                  {/* Imvoice Section e */}
                </div>
              </div>
            </div>
          </div>
        )
      }
      {/* EDIT FORM SECTION */}
      {
        display === 'editform' &&
        (
          <form onSubmit={handleFormSubmit}>
            <div className='my-10'>
              <div className='bg-gradient-to-r from-blue-700 to-blue-400 rounded-t-md p-4'>
                <h1 className='text-sm xl:text-xl text-white'>Edit Customer #{selectedCustomer._id}</h1>
              </div>
              <div className='bg-white p-4 rounded-b-md py-10'>
                <div>
                  <div>
                    {/* <div className='flex justify-start lg:justify-end'>
              <button className='bg-blue-800 rounded-lg px-2 py-3 text-white hover:bg-blue-500'> <i class="fa-solid fa-user-plus"></i> Customer</button>
            </div> */}
                    {/* <label className="my-3 flex items-center bg-gray-50 text-black  input input-bordered gap-2 w-full md:w-auto flex-grow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >ID: {selectedCustomer.contact_form_id}</h1>
            </label> */}
                    <div className=' flex flex-col lg:flex-row gap-2'>
                      <label className="my-3 flex items-center bg-transparent text-black input input-bordered gap-2 w-full md:w-auto lg:w-[50%]">
                        <i className="fa-solid fa-user text-blue-800"></i>
                        <h1>Name:</h1>
                        <input
                          className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                          name="contact_form_name"
                          value={selectedCustomer.contact_form_name}
                          onChange={handleInputChangeCustomers}
                        />
                      </label>
                      <label className="my-3 input input-bordered flex items-center bg-transparent text-black gap-2 w-full lg:w-[50%]">
                        <i className="fa-solid fa-envelope text-orange-500"></i>
                        <h1>Email:</h1>
                        <input
                          className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                          name="contact_form_email"
                          value={selectedCustomer.contact_form_email}
                          onChange={handleInputChangeCustomers}
                        />
                      </label>
                    </div>
                    <div className=' flex flex-col lg:flex-row gap-2'>
                      <label className="my-3 flex items-center bg-transparent text-black input input-bordered gap-2 w-full md:w-auto lg:w-[50%] ">
                        <i className="fa-solid fa-phone text-green-500"></i>
                        <h1>Phone:</h1>
                        <input
                          className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                          name="contact_form_phone"
                          value={selectedCustomer.contact_form_phone}
                          onChange={handleInputChangeCustomers}
                        />
                      </label>
                      <label className="my-3 flex items-center bg-transparent text-black input input-bordered gap-2 w-full md:w-auto lg:w-[50%]">
                        <i className="fa-solid fa-globe text-blue-500"></i>
                        <h1>Package:</h1>
                        <input
                          className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                          name="contact_form_service"
                          value={selectedCustomer.contact_form_service}
                          onChange={handleInputChangeCustomers}
                        />
                      </label>
                    </div>
                    <div className=' flex flex-col lg:flex-row gap-2'>
                      <label className="my-3 flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto lg:w-[50%]">
                        <i class="fa-solid fa-layer-group text-cyan-400"></i>
                        <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Brand: {selectedCustomer.brand}</h1>
                      </label>
                      <label className="my-3 flex items-center bg-gray-50  text-black input input-bordered gap-2 w-full md:w-auto lg:w-[50%]">
                        <i class="fa-regular fa-calendar-days text-teal-400"></i>
                        <h1 className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" >Created At: {selectedCustomer.createdAt}</h1>
                      </label>
                    </div>
                    <div className="my-3 bg-gray-50  text-black border-2 rounded-lg w-full p-3">
                      <p className='mb-4'><i class="fa-solid fa-message text-blue-500"></i> Message: </p>
                      <p className="grow bg-transparent  border-none focus:ring-0 focus:outline-none"> {selectedCustomer.contact_form_message} </p>
                    </div>
                    {/* INVOICE GENERATOR */}
                    <div>
                      <h1 className='text-xl mb-2 mt-5 font-bold'>Add Invoice</h1>
                      <div>
                        <div className="flex flex-wrap gap-2">
                          <label className="flex items-center bg-gray-100 text-black input input-bordered gap-2 w-full lg:w-auto flex-grow shadow-md">
                            <i className="fa-solid fa-file-invoice-dollar text-teal-500"></i>
                            <p className='border-r-2 px-2 '>INV#000</p>
                            <h1 className="grow bg-transparent border-none focus:ring-0 focus:outline-none"> 0001</h1>
                          </label>
                          <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full md:w-auto flex-grow shadow-md">
                            <i className="fa-regular fa-credit-card text-cyan-500"></i>
                            <select
                              className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                              onChange={handleCombinedChange}
                              name="contact_form_payment_mode"
                              value={selectedCustomer.contact_form_payment_mode || ''}
                            >
                              <option value="" disabled hidden>Payment Mode</option>
                              <option value="Stripe">Stripe</option>
                              <option value="Wise">Wise</option>
                              <option value="PayPal">PayPal</option>
                            </select>
                          </label>
                          <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full md:w-auto flex-grow shadow-md"
                          >
                            <i className="fa-solid fa-coins text-yellow-500"></i>
                            <select className="grow bg-transparent border-none focus:ring-0 focus:outline-none" onChange={handleCombinedChange}
                              name='contact_form_payment_currency'
                              value={selectedCustomer.contact_form_payment_currency || ''} >
                              <option value="" disabled selected hidden>Currency</option>
                              <option value="$">$ USD</option>
                              <option value="£">£ GBP</option>
                              <option value="€">€ EUR</option>
                              <option value="$">$ AUD</option>
                              <option value="$">$ CAD</option>
                            </select>
                          </label>
                        </div>
                        <div className="flex flex-wrap gap-2 my-6">
                          <div className='flex-grow'>

                            <p className='text-xs mt-2 mx-2 text-gray-400'>{brandMsg}</p>
                          </div>
                        </div>
                        <div>
                          {items.map(item => (
                            <div key={item.id} className="flex flex-wrap gap-2 my-3">
                              <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[28%] shadow-md">
                                <i className="fa-regular fa-square-plus text-blue-800"></i>
                                <select className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                                  name='contact_form_service'
                                  onChange={handleCombinedChange}>
                                  <option value="">{selectedCustomer.contact_form_service}</option>
                                  <option value="Web Development">Web Development</option>
                                  <option value="Logo Design">Logo Design</option>
                                  <option value="Social Media Marketing">Social Media Marketing</option>
                                  <option value="Branding">Branding</option>
                                  <option value="SEO">SEO Services</option>
                                </select>
                              </label>
                              {/* <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-auto shadow-md">
                                                <i className="fa-regular fa-square-plus text-blue-800"></i>
                                                <input
                                                    type="text"
                                                    className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                                                    placeholder={item.id > 1 ? 'Add Custom item' : 'Select Service'}
                                                    value={item.id > 1 ? item.customItem : customerDetail.customerService}
                                                    onChange={(e) => handleInputChange(item.id, 'customItem', e.target.value)}
                                                />
                                            </label> */}
                              <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-auto shadow-md">
                                <i className="fa-regular fa-square-plus text-blue-800"></i>
                                <input
                                onChange={handleInputChangeCustomers}
                                name='contact_form_product_service'
                                  type="text"
                                  className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                                  placeholder='Add Service'
                                />
                              </label>
                              <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[10%] shadow-md">
                                <i class="fa-solid fa-list-ol text-blue-800"></i>
                                <input
                                  type="number"
                                  className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                                  placeholder="Qty"
                                  value={item.itemQty}
                                  onChange={(e) => handleInputChange(item.id, 'itemQty', parseInt(e.target.value))}
                                />
                              </label>
                              <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[20%] shadow-md">
                                <i class="fa-regular fa-money-bill-1 text-green-500"></i>
                                <input
                                  type="number"
                                  className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                                  placeholder="Unit Price"
                                  value={item.unitCost}
                                  onChange={(e) => handleInputChange(item.id, 'unitCost', parseFloat(e.target.value))}
                                />
                              </label>
                              <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[10%] shadow-md">
                                <i class="fa-solid fa-percent text-orange-500"></i>
                                <input
                                  type="number"
                                  className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                                  placeholder="Tax"
                                  value={item.itemTax}
                                  onChange={(e) => handleInputChange(item.id, 'itemTax', parseFloat(e.target.value))}
                                />
                              </label>
                              <textarea
                                type="text"
                                className="grow bg-white py-2 w-full lg:w-[25%] text-black input input-bordered focus:ring-0 focus:outline-none shadow-md"
                                placeholder="Description" onChange={(e) => handleInputChange(item.id, 'itemDescription', e.target.value)}
                              ></textarea>
                              <button
                                type="button" data-tip='Remove'
                                className='tooltip tooltip-top rounded-lg border-2 border-blue-800 text-blue-800 text-xl font-bold px-4 shadow-md'
                                onClick={() => removeItem(item.id)}
                              >
                                x
                              </button>
                              {/* <div className='flex w-full justify-start my-6'>
                                                <h1 className='font-bold'> Item Details</h1>
                                            </div> */}
                              <div className='flex flex-col w-full gap-2 '>
                                {/* <div className='flex flex-col w-full lg:w-1/3 justify-start border-2 overflow-auto p-3  rounded-md bg-gray-100 shadow-md'>
                                                    <h1 className='text-black'><span className='font-semibold  text-blue-800'>Item Name : </span>{item.id > 1 ? item.customItem : customerDetail.customerService}</h1>

                                                    <p className='font-semibold text-blue-800'>Description: <span className='text-black font-normal'>{item.itemDescription}</span> </p>
                                                </div> */}
                                <div className='flex w-full justify-end mt-5 '>
                                  <div className='flex justify-end items-center'>
                                    <div>
                                      <div className='flex justify-between '>
                                        <p className='text-base text-gray-500 '>Qty = </p>
                                        <p className='text-base text-gray-500'> {item.itemQty} </p>
                                      </div>
                                      <div className='flex justify-between'>
                                        <p className=' text-base text-gray-500'>tax =  </p>
                                        <p className=' text-base text-gray-500'> {item.itemTax}% </p>
                                      </div>
                                      <div className='w-full border-b-2 '>

                                      </div>
                                      <div className='flex'>
                                        <p className='text-lg mx-1 font-bold text-blue-800 '>Amount = {item.totalCost}</p>
                                        <p className='text-green-500 text-lg mx-2 '>{currency}</p>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className='text-orange-500 text-sm'>{itemsAdd}</div>
                        <button
                          type="button"
                          data-tip='Add item'
                          className="tooltip border-2 text-blue-800 border-blue-800 p-3 my-5 shadow-md  rounded-md"
                          onClick={addItem}>
                          <i className="fa-regular fa-square-plus"></i> Add Item
                        </button>
                      </div>
                      <div className='bg-gray-200 w-full h-[2px] my-6 '></div>



                      {/* INVOICE DIV S */}
                      <div className='bg-white w-full lg:py-4 lg:px-10'>
                        <div className='my-8'>
                          <div className='flex items-center justify-between my-10'>
                            <h1 className='lg:text-center my-2 text-2xl font-semibold text-blue-800'>Invoice# <span className='font-normal text-black '>0120</span></h1>
                            <img src={brandLogo} className='h-16 w-auto' alt="" />
                          </div>
                          <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[28%] shadow-md">
                            <i className="fa-regular fa-square-plus text-blue-800"></i>
                            <select className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                              onChange={handleInputChangeCustomers}
                              name='contact_form_payment_status'>
                              <option selected disabled hidden value="">Payment Status</option>
                              <option value="Unpaid">Unpaid</option>
                              <option value="Paid">Paid</option>
                            </select>
                          </label>
                          {/* <h1 className='text-xl mb-2 font-bold text-blue-800'>Customer Details</h1> */}
                          {/* <div className='flex justify-start gap-6 flex-wrap'>
                                          <div className='flex gap-1'>
                                              <img src={customericon} alt="Customer" className='w-6 h-6' />
                                              <p className='text-blue-800 font-semibold'> Name: <span className='text-gray-500 font-normal'>{customerDetail.customerName}</span></p>
                                          </div>
                                          <div className='flex gap-1'>
                                              <img src={emailicon} alt="Email" className='w-6 h-6' />
                                              <p className='text-blue-800 font-semibold'>  Email: <span className='text-gray-500 font-normal'>{customerDetail.customerEmail}</span></p>
                                          </div>
                                          <div className='flex gap-1' >
                                              <img src={phoneicon} alt="Email" className='w-6 h-6' />
                                              <p className='text-blue-800 font-semibold'> Contact: <span className='text-gray-500 font-normal'>{customerDetail.customerMobile}</span></p>
                                          </div>
                                      </div> */}
                        </div>
                        <div className='border-b-2 border-dashed my-5'></div>
                        <div className='flex justify-between flex-wrap'>
                          <div>
                            <h1 className='text-xl mb-2 mt-5 font-bold text-blue-800'>Total Items:</h1>
                            {/* <h1 className='text-blue-800 font-semibold text-xl'>Items: </h1> */}
                            <h1 className='text-blue-500'>{customerDetail.customerService}</h1>
                            {items.map(item => (
                              <div key={item.id}>
                                <div className='flex gap-3'>
                                  {/* <img src={additemicon} alt="item" className='w-6 h-6' /> */}
                                  <h1 className='text-blue-500'>{item.customItem}</h1>
                                </div>
                                <div className='flex gap-3 w-96 break-words'>
                                  {/* <img src={descicon} alt="" className='w-6 h-6' /> */}
                                  <h1 className='italic text-gray-400'>Description: {item.itemDescription}</h1>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className='flex flex-col items-end'>
                            <h1 className='text-xl mb-2 mt-5 text-blue-800 font-bold'>Sub Total</h1>
                            <div className='flex justify-end'>
                              <p className='text-green-600 text-2xl'>{currency}</p>
                              <h1 className='text-2xl text-end font-semibold text-green-600'>
                                {discountedTotalAmount}
                              </h1>
                              <input
                                type="hidden"
                                name="contact_form_payment"
                                value={discountedTotalAmount}
                                onChange={handleInputChangeCustomers} // Ensure this function handles hidden inputs properly
                              />

                            </div>
                            <div className='items-center gap-2' style={{ display: discount > 0 ? 'flex' : 'none' }}>
                              <div className='flex gap-2'>
                                <img src={discounticon} alt="Discount" className='w-6 h-6' />
                                <h1>Discount</h1>
                              </div>
                              <p className='text-xl'>-{discount}</p>
                            </div>
                            <p className='text-sm text-blue-800'>Paid via: {paymentMethod}</p>
                          </div>
                        </div>
                        <div className='border-b-2 border-dashed my-5'></div>
                        {/* <div className='w-1/2 h-2 bg-orange-400 my-2'></div>
                                <div className='w-1/2 h-2 bg-blue-800'></div> */}
                      </div>
                      {/* INVOICE DIV E */}
                      <label className='flex justify-end px-10'>
                        Add Discount:
                        <input type="number" name="" id="" placeholder='discount' className='ml-2 border-2 rounded-md' value={discount} onChange={handleDiscount} />
                      </label>

                      <div className='flex justify-between px-10'>
                        <button
                          onClick={() => handleDisplay('dataTable')}
                          className="bg-blue-800 p-3 my-5 text-white rounded-md">
                          <i class="fa-solid fa-caret-left mx-2"></i>Back
                        </button>
                        <button type="submit" className="bg-blue-800 p-3 my-5 text-white rounded-md"
                          onClick={() => {
                            document.getElementById('my_modal_2').showModal();
                          }}>
                          Save and Submit
                        </button>


                        {/* <button type="button" onClick={captureAndSave} className='text-blue-500 font-semibold hidden lg:block'  ><i class="fa-solid fa-file-pdf text-red-500 text-xl"></i> Export</button> */}
                        {/* export button */}

                      </div>
                    </div>
                    {/* <button className='bg-blue-800 p-3 my-5 text-white rounded-md' ><i class="fa-solid fa-caret-left mx-2"></i>Back</button> */}
                    <div>


                    </div>

                  </div>
                </div>
              </div>
            </div>
          </form>

        )
      }
    </div >
  );
};

export default CustomersDataTable;