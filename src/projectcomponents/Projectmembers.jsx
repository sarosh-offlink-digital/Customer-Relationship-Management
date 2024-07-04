import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import member1img from '../src/profilepic.jpg';
import member2img from '../src/profilepic2.jpg';
import member3img from '../src/profilepic3.jpg';
import member4img from '../src/profilepic4.jpg';

const initialData = [
    { id: 1, memberName: 'Member 1', },
    { id: 2, memberName: 'Member 2', },
    { id: 3, memberName: 'Member 3', },
    { id: 4, memberName: 'Member 4', },
];

const imageMap = {
    1: member1img,
    2: member2img,
    3: member3img,
    4: member4img,
};

const Projectmembers = () => {
    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');

    const handleRemove = (id) => {
        setData(data.filter((member) => member.id !== id));
    };

    const filteredData = data.filter((member) =>
        Object.values(member).some((value) =>
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
        {
            name: 'Members',
            width: '100px',
            cell: (row) => (
                <div>
                    <img src={imageMap[row.id]} alt="" className="h-10 w-10 rounded-full" />
                </div>
            ),
        },
        { name: 'Member Name', selector: (row) => row.memberName, sortable: true },

        {
            name: 'Remove',
            cell: (row) => (
                <div>
                    <div className="bg-blue-500 hover:bg-blue-800 hover:scale-105 text-white px-3 py-2 rounded-md mx-2">
                        <button onClick={() => handleRemove(row.id)}>X</button>
                    </div>
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
                <div className="modal-box">
                    {/* modal content s */}
                    <div className="p-4 ">
                        <div className='rounded-t-lg border-b-2 border-l-2 border-r-2'>
                            <h1 className='bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white rounded-t-lg px-4 py-2 text-xl'><i class="fa-solid fa-filter text-sm mx-2"></i>Filter</h1>
                            <select className='border-2 py-2 m-2 rounded-lg cursor-pointer px-2' name="filter" id="filter" onChange={handleSelectChange}>
                                <option value="">All Members</option>
                                {data.map((row) => (
                                    <option key={row.id} value={row.memberName}>
                                        {row.memberName}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {/* modal content e */}
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            {/* modal end */}

            <div className="container w-[310px] lg:w-auto mx-auto lg:p-4 relative">
                <input
                    type="text"
                    placeholder="Search Members"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="border focus:border-blue-400 text-sm outline-transparent border-gray-300 w-36 lg:w-auto rounded-md px-1 py-1 mb-4 absolute z-30 right-2 top-3 lg:right-8 lg:top-7"
                />
                <div>
                    <div className=''>
                    <i className="fa-solid fa-circle-plus absolute z-30 text-white lg:left-32 lg:top-9 top-5 left-28 hover:scale-110 cursor-pointer " ></i>
                    </div>
                    <button className="absolute z-30 text-white lg:left-6 lg:top-8 top-4 left-3 hover:scale-110 cursor-pointer tooltip tooltip-info" data-tip='Filter' onClick={() => document.getElementById('my_modal_5').showModal()}><i class="fa-solid fa-filter"></i></button>
                </div>
                <DataTable
                    title="Members"
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
                                background: 'linear-gradient(to right, #1e3a8a, #2563eb, #60a5fa)',
                                opacity: 'var(--tw-bg-opacity)',
                                color: 'white',
                                borderTopLeftRadius: '10px',
                                borderTopRightRadius: '10px',
                                paddingLeft: '35px '
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

export default Projectmembers;
