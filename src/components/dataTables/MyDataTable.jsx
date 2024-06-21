import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const MyDataTable = () => {
  const [apidata, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://captaindesignagency.com/LeadApi');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setApiData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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

  const columns = [
    { name: 'ID', selector: row => row.contact_form_id, sortable: true, width: '80px' },
    { name: 'Name', selector: row => row.contact_form_name, sortable: true, wrap: true },
    { name: 'Email', selector: row => row.contact_form_email, sortable: true, wrap: true },
    { name: 'Phone', selector: row => row.contact_form_phone, sortable: true, wrap: true },
    { name: 'Service', selector: row => row.contact_form_service, sortable: true, wrap: true },
    { name: 'Created At', selector: row => row.contact_form_created_at, sortable: true, wrap: true },
    {
      name: 'Actions',
      cell: row => (
        <div>
          <Link
            to={{
              pathname: "/leadform",
              state: { id: row.contact_form_id }
            }}
            className='bg-blue-500 hover:bg-blue-800 hover:scale-105 text-white p-2 rounded-md mx-2'
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </Link>
          <Link
            to={{
              pathname: "/customerform",
              state: { id: row.contact_form_id }
            }}
            className='bg-blue-500 hover:bg-blue-800 hover:scale-105 text-white p-2 rounded-md'
          >
            <i className="fa-regular fa-eye"></i>
          </Link>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <div className="container w-[370px] lg:w-auto mx-auto lg:p-4 relative">
      <input
        type="text"
        placeholder="Search Leads"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border focus:border-blue-400 text-sm outline-transparent border-gray-300 w-36 lg:w-auto rounded-md px-1 py-1 mb-4 absolute z-30 right-2 top-3 lg:right-8 lg:top-7"
      />
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
              background: 'linear-gradient(to right, #1e3a8a, #2563eb, #60a5fa);',
              opacity: 'var(--tw-bg-opacity)',
              color: 'white',
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
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
  );
};

export default MyDataTable;
