import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const data = [
  { id: 1, title: 'Alex Jones', companyname: "Swift.inc", date: '14-6-2024' },
  { id: 2, title: 'Sierra', companyname: "Classic Renovations", date: '16-6-2024' },
  { id: 3, title: 'Danny Devito', companyname: "Classic Co.", date: '17-6-2024' },
  { id: 4, title: 'Michael Scott', companyname: "MC Paper Co.", date: '19-6-2024' },
  { id: 5, title: 'David Wallace', companyname: "Dunder Mifflin", date: '19-6-2024' },
  { id: 6, title: 'Dwight K Schrute', companyname: "Schrute Farms", date: '20-6-2024' },
  // Add more data here
];

const MyDataTable = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleId = (id) => {
    setSelectedId(id);
  };

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const columns = [
    { name: 'Id', selector: row => row.id, sortable: true, width: '80px' },
    { name: 'Customer Name', selector: row => row.title, sortable: true, wrap: true },
    { name: 'Company Name', selector: row => row.companyname, sortable: true, wrap: true },
    { name: 'Created on', selector: row => row.date, sortable: true, width: '150px' },
    {
      name: 'Action',
      cell: row => (
        <div> 
          <Link
          to={{
            pathname: "/leadform",
            state: { id: row.id }
          }} 
          onClick={() => handleId(row.id)}
          className='bg-blue-500 hover:bg-blue-800 hover:scale-105 text-white p-2 rounded-md mx-2'
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </Link>
        <Link
        to={{
          pathname: "/customerform",
          state: { id: row.id }
        }} 
        onClick={() => handleId(row.id)}
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
    // {
    //   name: 'View',
    //   cell: row => (
    //     <Link
    //       to={{
    //         pathname: "/customerform",
    //         state: { id: row.id }
    //       }} 
    //       onClick={() => handleId(row.id)}
    //       className='bg-blue-800 hover:bg-blue-500 hover:scale-105 text-white p-2 rounded-md'
    //     >
    //       <i className="fa-regular fa-eye"></i>
    //     </Link>
    //   ),
    //   ignoreRowClick: true,
    //   allowOverflow: true,
    //   button: true,
    // },
    // Add more columns here
  ];
  return (
    <div className="container w-[370px] lg:w-auto mx-auto lg:p-4 relative">
       <input
        type="text"
        placeholder="Search Leads"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border w-36 lg:w-auto outline-transparent text-sm border-gray-300 rounded-md px-1 py-1 mb-4 absolute z-30 right-2 top-3 lg:right-8 lg:top-7"
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
