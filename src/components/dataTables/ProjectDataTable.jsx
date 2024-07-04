import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import projectMember1 from '../../src/profilepic2.jpg';

const data = [
    { id: 1, projectName: 'Test Project 1', brand: "Captain Design Agency", projectMembers: "Member1", deadline: '14-9-2024', completion: 100, status: "Finished" },
    { id: 2, projectName: 'Test Project 2', brand: "Captain Design Agency", projectMembers: "Member2", deadline: '20-6-2024', completion: 50, status: "Overdue" },
    { id: 3, projectName: 'Test Project 3', brand: "Captain Book Publishing", projectMembers: "Member3", deadline: '17-9-2024', completion: 10, status: "Cancelled" },
    { id: 4, projectName: 'Test Project 4', brand: "Captain Design Agency", projectMembers: "Member4", deadline: '19-9-2024', completion: 100, status: "Finished" },
    { id: 5, projectName: 'Test Project 5', brand: "Captain Design Agency", projectMembers: "Member5", deadline: '19-9-2024', completion: 35, status: "In Progress" },
    { id: 6, projectName: 'Test Project 6', brand: "Captain Book Publishing", projectMembers: "Member6", deadline: '20-9-2024', completion: 14, status: "On hold" },
    { id: 7, projectName: 'Test Project 7', brand: "Captain Book Publishing", projectMembers: "Member7", deadline: '26-9-2024', completion: 80, status: "In Progress" },
    { id: 8, projectName: 'Test Project 8', brand: "Captain Design Agency", projectMembers: "Member8", deadline: '1-10-2024', completion: 100, status: "Finished" },
    { id: 9, projectName: 'Test Project 9', brand: "Captain Design Agency", projectMembers: "Member9", deadline: '5-10-2024', completion: 86, status: "In Progress" },
    // Add more data here
];

const CustomersDataTable = () => {
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
    const handleSelectChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const columns = [
        { name: 'Id', selector: row => row.id, sortable: true, width: '60px' },
        { name: 'Project Name', selector: row => row.projectName, sortable: true },
        {
            name: 'Project Members',
            sortable: true,
            cell: row => (
                <div className='flex flex-wrap tooltip tooltip-info' data-tip='Add new member'>
                    <i className=" fa-regular fa-square-plus text-xl text-blue-500 cursor-pointer hover:text-blue-800 "></i>
                    <img src={projectMember1} alt="1" className='rounded-full mx-2 h-8 w-8' />
                </div>
            )
        },
        { name: 'Deadline', selector: row => row.deadline, sortable: true },
        {
            name: 'Completion',
            selector: row => row.status,
            sortable: true,
            cell: row => (
                <div >
                    {row.completion}%
                    <div className='bg-slate-300 rounded-lg w-14'>

                        <div className={`bg-blue-500 p-1 rounded-md text-white ${row.completion <= 0
                            ? 'w-0 bg-slate-300'
                            : row.completion <= 10
                                ? 'w-2'
                                : row.completion <= 10
                                    ? 'bg-rose-700'
                                    : row.completion <= 20
                                        ? 'w-4'
                                        : row.completion <= 40
                                            ? 'w-5'
                                            : row.completion <= 50
                                                ? 'w-7'
                                                : row.completion <= 70
                                                    ? 'w-9'
                                                    : row.completion <= 80
                                                        ? 'w-11'
                                                        : row.completion <= 90
                                                            ? 'w-12'
                                                            : row.completion <= 100
                                                                ? 'w-14'
                                                                : ''}`}>
                        </div>
                    </div>
                </div>



            )
        },
        { name: 'Brand', selector: row => row.brand, sortable: true },
        {
            name: 'Project Status',
            selector: row => row.status,
            sortable: true,
            cell: row => (
                <div className={`w-20 p-1 rounded-lg flex justify-center text-white ${row.status === 'Finished'
                    ? 'bg-teal-500'
                    : row.status === 'On hold'
                        ? 'bg-gray-500'
                        : row.status === 'Cancelled'
                            ? 'bg-rose-700'
                            : row.status === 'Overdue'
                                ? 'bg-red-500'
                                : row.status === 'Not Started'
                                    ? 'bg-orange-500'
                                    : row.status === 'In Progress'
                                        ? 'bg-cyan-500'
                                        : ''}`}>
                    {row.status}
                </div>

            )
        },
        {
            name: 'Action',
            cell: row => (
                <div>
                    <Link
                        to={{
                            pathname: "/projectform",
                            state: { id: row.id }
                        }}
                        onClick={() => handleId(row.id)}
                        data-tip="View & Edit"
                        className='tooltip tooltip-info bg-blue-500 hover:bg-blue-800 hover:scale-105 text-white p-2 rounded-md mx-2'
                    >
                        <i className="fa-regular fa-pen-to-square"></i>
                    </Link>
                    {/* <Link
                        to={{
                            pathname: "/customerform",
                            state: { id: row.id }
                        }}
                        onClick={() => handleId(row.id)}
                        className='bg-blue-500 hover:bg-blue-800 hover:scale-105 text-white p-2 rounded-md'
                    >
                        <i className="fa-regular fa-eye"></i>
                    </Link> */}
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    return (
        <div>
            {/* modal start */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white p-0 pb-5">
                    {/* modal content s */}
                    <div className="">
                        <div className='rounded-t-lg relative'>
                            <h1 className='bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white rounded-t-lg px-4 py-2 text-xl'><i class="fa-solid fa-filter text-sm mx-2"></i>Filter</h1>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className=" text-white absolute right-3 top-2 tooltip tooltip-left tooltip-info" data-tip="Close"><i class="fa-solid fa-circle-xmark text-xl"></i></button>
                                </form>
                            </div>
                            <select className='border-2 py-2 m-2 rounded-lg cursor-pointer px-2' name="filter" id="filter" onChange={handleSelectChange}>
                                <option value="">All Projects</option>
                                {data.map((row) => (
                                    <option key={row.id} value={row.projectName}>
                                        {row.projectName}
                                    </option>
                                ))}
                            </select>
                            <select className='border-2 py-2 m-2 rounded-lg cursor-pointer px-2' name="filter" id="filter" onChange={handleSelectChange}>
                                <option value="">All Brands</option>
                                {data.map((row) => (
                                    <option key={row.id} value={row.brand}>
                                        {row.brand}
                                    </option>
                                ))}
                            </select>
                            <select className='border-2 py-2 m-2 rounded-lg cursor-pointer px-2' name="filter" id="filter" onChange={handleSelectChange}>
                                <option value="">All Members</option>
                                {data.map((row) => (
                                    <option key={row.id} value={row.projectMembers}>
                                        {row.projectMembers}
                                    </option>
                                ))}
                            </select>
                            <select className='border-2 py-2 m-2 rounded-lg cursor-pointer px-2' name="filter" id="filter" onChange={handleSelectChange}>
                                <option value="">All Deadlines</option>
                                {data.map((row) => (
                                    <option key={row.id} value={row.deadline}>
                                        {row.deadline}
                                    </option>
                                ))}
                            </select>
                            <select className='border-2 py-2 m-2 rounded-lg cursor-pointer px-2' name="filter" id="filter" onChange={handleSelectChange}>
                                <option value="">All Status</option>
                                {data.map((row) => (
                                    <option key={row.id} value={row.status}>
                                        {row.status}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {/* modal content e */}

                </div>
            </dialog>
            {/* modal end */}
            <div className="container w-[370px] lg:w-auto mx-auto lg:p-4 relative">
                <input
                    type="text"
                    placeholder="Search Projects"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="border focus:border-blue-400 text-sm outline-transparent border-gray-300 w-36 lg:w-auto rounded-md px-1 py-1 mb-4 absolute z-30 right-2 top-3 lg:right-8 lg:top-7"
                />
                <div>
                    <button className="absolute z-30 text-white lg:left-6 lg:top-8 top-4 left-3 hover:scale-110 cursor-pointer tooltip tooltip-info" data-tip='Filter' onClick={() => document.getElementById('my_modal_5').showModal()}><i class="fa-solid fa-filter"></i></button>

                    <Link to='/newproject' data-tip='Add new project ' className='tooltip tooltip-info tooltip-info-right  absolute z-30 text-white lg:left-32 lg:top-8 top-4 left-28 hover:scale-110'><i className="fa-solid fa-circle-plus "></i></Link>
                </div>

                <DataTable
                    title="Projects"
                    columns={columns}
                    data={filteredData}
                    pagination={true}
                    paginationPerPage={10}
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
                                paddingLeft: '35px',
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
    );
};

export default CustomersDataTable;
