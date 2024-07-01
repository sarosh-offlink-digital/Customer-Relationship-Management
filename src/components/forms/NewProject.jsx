import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from '../shared_components/Header'
import FileUploader from '../shared_components/FileUploader';

const NewProject = () => {
  
  const [editorContent, setEditorContent] = useState('');
  const handleChange = (content) => {
    setEditorContent(content);
  };
  return (
    <div className='p-4'>
      <div className='mt-2'>
        <Header />
      </div>
      <div className='bg-gradient-to-r from-blue-700 to-blue-400 rounded-t-md p-4 mt-5' >
        <h1 className='text-sm xl:text-xl text-white '>Add Project</h1>
      </div>
      <div className='bg-white p-4 rounded-b-md py-10'>
        <div className="flex flex-col lg:flex-row gap-2">
          <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[50%] shadow-md">
            <i class="fa-solid fa-bars-progress text-green-500"></i>
            <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Project Name" />
          </label>
          <div className='w-full lg:w-[50%]'>
            <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full md:w-auto shadow-md">
              <i className="fa-solid fa-user text-blue-800"></i>
              <select
                className="grow bg-transparent border-none focus:ring-0 focus:outline-none ">
                <option value="" disabled selected hidden>Select Customer</option>
                <option value="Captain Design Agency">Alex Jones</option>
                <option value="Captain Book Publishing">Sierra </option>
              </select>
            </label>
            {/* <input type='checkbox' /> */}
            {/* <p className='text-xs mx-2 text-gray-400'>Customer will login using this email</p> */}
          </div>
        </div>
        <div className='flex justify-start items-center bg-white text-black my-5 gap-10 w-full md:w-auto'>
          <div className='flex flex-wrap'>
            <input className='mx-2' type="checkbox" />
            <h1 className='text-sm'>Customers can manage tasks on this project</h1>
          </div>
          <div className='flex flex-wrap'>
            <input className='mx-2' type="checkbox" />
            <h1 className='text-sm'>Allow manual time logs?</h1>
          </div>
        </div>
        <div>
          <div className='my-5'>
            <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full md:w-auto shadow-md">
              <i class="fa-solid fa-people-group text-amber-500"></i>
              <select
                className="grow bg-transparent border-none focus:ring-0 focus:outline-none">
                <option value="" disabled selected hidden>Select Members</option>
                <option value="">Sarosh Ahmed</option>
                <option value="">Yousaf Baqai </option>
              </select>
            </label>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[50%] shadow-md">
            <i class="fa-solid fa-hourglass-start"></i>
            <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Start Date" />
          </label>
          <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[50%] shadow-md">
            <i class="fa-solid fa-hourglass-end"></i>
            <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Dead Line" />
          </label>
          <div className='flex items-center flex-wrap w-full lg:w-[50%]'>
            <input className='mx-2' type="checkbox" />
            <h1 className='text-sm'>Allow manual time logs?</h1>
          </div>
        </div>
        <div className='my-5 w-full h-96 overflow-y-auto overflow-x-hidden border border-gray-300 rounded-lg p-2 shadow-md'>
          <ReactQuill
            value={editorContent}
            onChange={handleChange}
            modules={NewProject.modules}
            formats={NewProject.formats}
            placeholder="Project Description..."
            className="h-full"
          />
        </div>
        
        <div>
          <select className='bg-blue-500 text-white p-4 rounded-lg' name="" id="">
            <option hidden disabled selected>Select Status</option>
            <option className='bg-gray-50 text-black ' value=""> Not Started</option>
            <option className='bg-gray-50 text-black ' value=""> In progress</option>
            <option className='bg-gray-50 text-black ' value=""> Finished</option>
            <option className='bg-gray-50 text-black ' value=""> Overdue</option>
            <option className='bg-gray-50 text-black ' value=""> On Hold</option>
            <option className='bg-gray-50 text-black ' value=""> Cancelled</option>
            
          </select>
        </div>
        <div>
          <FileUploader/>
          
        </div>
        <button
          type="button"
          className="bg-blue-800 p-3 my-5 text-white rounded-md">
          Save and Submit
        </button>
      </div>
    </div>
  )
}
NewProject.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}

NewProject.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default NewProject
