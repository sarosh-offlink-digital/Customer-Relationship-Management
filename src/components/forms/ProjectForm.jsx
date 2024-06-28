import React, { useState, useEffect, useRef } from 'react'
import Header from '../shared_components/Header'
import member1 from '../../src/profilepic.jpg'
import member2 from '../../src/profilepic2.jpg'
import { Chart } from 'react-google-charts';


const ProjectForm = () => {
  const gstcRef = useRef(null);
  const [displayTabs, setDisplayTabs] = useState('Overview')
  const handleRendering = (tabs) => {
    setDisplayTabs(tabs)
  }
  const data = [
    [
      { type: 'string', label: 'Task ID' },
      { type: 'string', label: 'Task Name' },
      { type: 'string', label: 'Resource' },
      { type: 'date', label: 'Start Date' },
      { type: 'date', label: 'End Date' },
      { type: 'number', label: 'Duration' },
      { type: 'number', label: 'Percent Complete' },
      { type: 'string', label: 'Dependencies' },
    ],
    ['Task 1', 'Task 1', 'Resource 1', new Date(2024, 6, 1), new Date(2024, 6, 5), null, 20, null],
    ['Task 2', 'Task 2', 'Resource 2', new Date(2024, 6, 6), new Date(2024, 6, 10), null, 10, 'Task 1'],
    ['Task 3', 'Task 3', 'Resource 2', new Date(2024, 6, 6), new Date(2024, 6, 10), null, 5, 'Task 2'],
    ['Task 4', 'Task 4', 'Resource 2', new Date(2024, 6, 6), new Date(2024, 6, 10), null, 60, 'Task 3'],
  ];

  const options = {
    height: 400,
    gantt: {
      trackHeight: 50,
      palette: [
        {
          "color": "#d6d6d6",
          "dark": "#2a31bf",
          "light": "#53cfb0"
        },
        {
          "color": "#d6d6d6",
          "dark": "#2a31bf",
          "light": "#53cfb0"
        }
      ]
    },
  };
  return (
    <div className='p-4'>
      <div className='mt-2'>
        <Header />
      </div>
      <div className='bg-gradient-to-r from-blue-700 to-blue-400 rounded-t-md p-4 mt-6'>
        <h1 className='text-sm xl:text-xl text-white'>Project # 0001</h1>
      </div>
      <div className='bg-white p-4 rounded-b-md py-10'>
        <div className='flex lg:flex-row flex-col justify-between'>
          <button className={`flex-grow pb-5 ${displayTabs === 'Overview' ? 'border-blue-500' : 'border-gray-200'} border-b-2`} onClick={() => { handleRendering('Overview') }}><i class="fa-solid fa-border-all mx-2 text-blue-500" ></i>Overview</button>
          <button className={`flex-grow pb-5 ${displayTabs === 'Members' ? 'border-blue-500' : 'border-gray-200'} border-b-2`} onClick={() => { handleRendering('Members') }}><i class="fa-solid fa-user-group mx-2 text-orange-500" ></i>Members</button>
          <button className={`flex-grow pb-5 ${displayTabs === 'Tasks' ? 'border-blue-500' : 'border-gray-200'} border-b-2`} onClick={() => { handleRendering('Tasks') }}><i class="fa-solid fa-bars-progress mx-2 text-rose-500" ></i>Tasks</button>
          <button className={`flex-grow pb-5 ${displayTabs === 'Files' ? 'border-blue-500' : 'border-gray-200'} border-b-2`} onClick={() => { handleRendering('Files') }}><i class="fa-solid fa-file-lines mx-2 text-yellow-500" ></i> Files</button>
          <button className={`flex-grow pb-5 ${displayTabs === 'Discussion' ? 'border-blue-500' : 'border-gray-200'} border-b-2`} onClick={() => { handleRendering('Discussion') }}><i class="fa-solid fa-comments mx-2 text-green-500" ></i>Discussion</button>
          <button className={`flex-grow pb-5 ${displayTabs === 'Chart' ? 'border-blue-500' : 'border-gray-200'} border-b-2`} onClick={() => { handleRendering('Chart') }}><i class="fa-solid fa-chart-gantt mx-2 text-teal-500" ></i>Gantt Chart</button>
          <button className={`flex-grow pb-5 ${displayTabs === 'Notes' ? 'border-blue-500' : 'border-gray-200'} border-b-2`} onClick={() => { handleRendering('Notes') }}><i class="fa-solid fa-note-sticky mx-2 text-indigo-500" ></i>Notes</button>
        </div>
        {displayTabs === 'Overview' &&
          (
            <div className='my-10 mx-5'>
              <div className=''>
                <h1 className='text-xl my-6 mb-2 font-semibold'><i class="fa-solid fa-bars-progress mr-5 text-blue-500"></i>Project Details:</h1>
                <div className='my-6'>
                  <p className='text-gray-500'>Make this website on wordpress Make this website on wordpress Make this website on wordpress Make this website on wordpress</p>
                  <p className='text-gray-500'>Make this website on wordpress Make this website on wordpress Make this website on wordpress Make this website on wordpress</p>
                </div>
                <div>
                  <h1 className='text-xl mt-10 mb-2 font-semibold'><i class="fa-solid fa-clipboard mr-5 text-green-500"></i>Project Notes:</h1>
                  <div className='flex justify-center flex-col mt-6 gap-6'>
                    {/* box 1 */}
                    <div className='break-words'>
                      <h1 className='border-2  rounded-t-md py-2 text-white font-semibold text-xl bg-blue-800'><i class="fa-solid fa-list mx-5 text-teal-500"></i>Customer Details</h1>
                      <div className='border-t-0  border-2 p-4'>
                        <div className='flex gap-4 flex-wrap'>
                          <div className='flex gap-4'>
                            <p className='font-semibold'><i class="fa-solid fa-user px-5 text-blue-500 "></i>Customer Name:</p>
                            <p>Alex Jones</p>
                          </div>
                          <div className='flex gap-4'>
                            <p className='font-semibold'><i class="fa-solid fa-envelope mx-5 text-orange-500"></i>Customer Email:</p>
                            <p>Alexjones@test.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* box 2 */}
                    <div className='break-words'>
                      <h1 className='border-2  rounded-t-md py-2 text-white font-semibold text-xl bg-blue-800'><i class="fa-solid fa-stopwatch mx-5 text-rose-500"></i>Active Timer</h1>
                      <div className='border-t-0  border-2 p-4'>
                        <p className='text-gray-500'>No active Timer</p>
                      </div>
                    </div>
                    {/* box 3 */}
                    <div className='break-words'>
                      <div className='flex justify-between items-center  bg-blue-800 border-2  rounded-t-md'>
                        <h1 className=' py-2 text-white font-semibold text-xl '><i class="fa-solid fa-user-group text-indigo-500 mx-5"></i>Members</h1>
                        <h1 className='mx-6 rounded-full bg-white text-blue-800 font-bold px-3 py-1'>4</h1>
                      </div>
                      <div className='border-t-0 flex justify-between flex-wrap border-2 p-4'>
                        <div >
                          <div className='flex justify-start gap-2'>
                            <img src={member1} className='h-8 w-8 rounded-full' alt="" />
                            <img src={member2} className='h-8 w-8 rounded-full' alt="" />
                            <img src={member1} className='h-8 w-8 rounded-full' alt="" />
                            <img src={member2} className='h-8 w-8 rounded-full' alt="" />

                          </div>
                          <button className='mt-5 bg-blue-800 text-white p-2 rounded-lg my-5'><i class="fa-solid fa-circle-plus"></i> Add more</button>
                        </div>
                        <div className='bg-gray-100 py-2 px-5 rounded-lg w-full lg:w-auto border-2'>
                          <h1 className='border-b-2'><span className='text-xl text-orange-500 '>0 </span >Open Tasks</h1>
                          <h1 className='border-b-2'><span className='text-xl text-green-500 '>0 </span >Days Left</h1>
                          <h1 className='border-b-2'><span className='text-xl text-blue-500 '>0 </span >Hours Logged</h1>
                        </div>
                      </div>
                    </div>
                    {/* box 4 */}
                    <div className='break-words'>
                      <h1 className='border-2  rounded-t-md py-2 text-white font-semibold text-xl bg-blue-800'><i class="fa-solid fa-timeline mx-5 text-lime-500"></i>Activity Timeline</h1>
                      <div className='border-t-0  border-2 p-4'>
                        <p className='text-gray-500'>No active Timer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        {displayTabs === 'Members' &&
          (
            <div className='my-10 mx-5'>
              <div>
                <h1 className='text-xl my-6 mb-2 font-semibold'><i class="fa-solid fa-bars-progress mr-5 text-blue-500"></i>Members Details:</h1>
              </div>
            </div>
          )}
        {displayTabs === 'Tasks' &&
          (
            <div className='my-5'>Tasks</div>
          )}
        {displayTabs === 'Files' &&
          (
            <div className='my-5'>Files</div>
          )}
        {displayTabs === 'Discussion' &&
          (
            <div className='my-5'>Discussion</div>
          )}
        {displayTabs === 'Chart' &&
          (
            <div className='my-5'>Chart
              <Chart
                chartType="Gantt"
                width="auto"
                height="400px"
                data={data}
                options={options}
              />
            </div>
          )}
        {displayTabs === 'Notes' &&
          (
            <div className='my-5'>Notes</div>
          )}
      </div>
    </div>
  )
}

export default ProjectForm
