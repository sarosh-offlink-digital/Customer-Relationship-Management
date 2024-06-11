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

  const handleId = (id) => {
    setSelectedId(id);
  };

  const columns = [
    { name: 'Id', selector: row => row.id, sortable: true },
    { name: 'Customer Name', selector: row => row.title, sortable: true },
    { name: 'Company Name', selector: row => row.companyname, sortable: true },
    { name: 'Created on', selector: row => row.date, sortable: true },
    {
      name: 'Convert',
      cell: row => (
        <Link
        to={{
          pathname: "/leadform",
          state: { id: row.id }
        }} 
          onClick={() => handleId(row.id)}
          className='bg-blue-800 text-white p-2 rounded-md'
        >
          Action
        </Link>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: 'View',
      cell: row => (
        <Link
        to={{
          pathname: "/customerform",
          state: { id: row.id }
        }} 
          onClick={() => handleId(row.id)}
          className='bg-blue-800 text-white p-2 rounded-md'
        >
          Action
        </Link>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    // Add more columns here
  ];

  return (
    <div className="container mx-auto p-4 overflow-x-auto">
      <DataTable
        title="Leads"
        columns={columns}
        data={data}
        customStyles={{
          header: {
            style: {
              fontSize: '1.5rem',
              fontWeight: 'bold',
            },
          },
          headRow: {
            style: {
              backgroundColor: '#ffffff',
            },
          },
          rows: {
            style: {
              minHeight: '72px',
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
        }}
        className="table-auto w-full rounded-md"
      />
    </div>
  );
};

export default MyDataTable;
