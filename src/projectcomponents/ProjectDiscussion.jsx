import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import DataTable from 'react-data-table-component';

const initialData = [
    { id: 1, title: 'Dummy title 1', description: 'this is a dummy description of the project' },

    // Add more data here
];

const ProjectDiscussion = () => {
    const [editorContent, setEditorContent] = useState('');
    const [title, setTitle] = useState('');
    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (content) => {
        setEditorContent(content);
    };

    const handleRemove = (id) => {
        setData(data.filter(member => member.id !== id));
    };

    const filteredData = data.filter(member =>
        Object.values(member).some(value =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = () => {
        const newEntry = {
            id: data.length + 1, // You might want a more robust ID generation strategy
            title: title,
            description: editorContent
        };
        setData([...data, newEntry]);
        setTitle('');
        setEditorContent('');
        document.getElementById('my_modal_3').close();
    };

    const columns = [
        { name: 'Title', selector: row => row.title, sortable: true },
        { name: 'Description', selector: row => row.description, sortable: true },
        {
            name: 'Remove',
            cell: row => (
                <div>
                    <div className='bg-blue-500 hover:bg-blue-800 hover:scale-105 text-white px-3 py-2 rounded-md mx-2'>
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
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box bg-white p-10">
                        <form method="dialog">
                            <h1 className=' text-sm'>Title</h1>
                            <input
                                type="text"
                                placeholder='Add Title Here'
                                className="flex items-center bg-white text-black input input-bordered gap-2 w-full shadow-md mb-10"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <h1 className='mt-7 text-sm'>Description</h1>
                            <ReactQuill
                                value={editorContent}
                                onChange={handleChange}
                                modules={ProjectDiscussion.modules}
                                formats={ProjectDiscussion.formats}
                                placeholder="Discussion..."
                                className="h-full"
                            />
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <button className="p-4 text-white bg-blue-800 hover:bg-blue-500 cursor-pointer mt-10 rounded-lg" onClick={handleSubmit}>Add</button>
                    </div>
                </dialog>
                <div className="container w-[310px] lg:w-auto mx-auto lg:p-4 relative">
                    <input
                        type="text"
                        placeholder="Search Discussions"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="border focus:border-blue-400 text-sm outline-transparent border-gray-300 w-36 lg:w-auto rounded-md px-1 py-1 mb-4 absolute z-30 right-2 top-3 lg:right-8 lg:top-7"
                    />
                    <button className="fa-solid fa-circle-plus absolute z-30 text-white lg:left-32 lg:top-9 top-5 left-28 hover:scale-110 cursor-pointer" onClick={() => document.getElementById('my_modal_3').showModal()}></button>

                    <DataTable
                        title="Discussions"
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
            </div>
        </div>
    )
}

ProjectDiscussion.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link',],
        ['clean']
    ],
    clipboard: {
        matchVisual: false,
    }
}
ProjectDiscussion.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link',
];

export default ProjectDiscussion;
