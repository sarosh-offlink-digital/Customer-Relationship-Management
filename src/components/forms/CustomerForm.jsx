import React from 'react'
import Header from '../shared_components/Header';
const CustomerForm = () => {
    return (
        <div className='p-4'>
            <Header />
            <div className='my-10'>
                <div className='bg-gradient-to-r from-blue-700 to-blue-400 rounded-t-md p-4'>
                    <h1 className='text-sm xl:text-xl text-white'>Add Customer</h1>
                </div>
                <form action='' className='flex flex-col items-center lg:flex-row justify-start'>
                    <div className='bg-white p-4 rounded-b-md py-10 w-full border-2'>
                        <div>
                            <h1 className='text-xl mb-2'>Customer Details</h1>
                            <div>
                                <div className="flex flex-wrap gap-4">
                                    <label className="flex items-center bg-white text-black  input input-bordered gap-2 w-full md:w-auto flex-grow">
                                        <i class="fa-solid fa-building"></i>
                                        <input type="text" className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" placeholder="Company Name" />
                                    </label>
                                    <label className="flex items-center bg-white  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                        <i class="fa-solid fa-user"></i>
                                        <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Customer Name" />
                                    </label>
                                    <label className="flex items-center bg-white  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                        </svg>
                                        <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Email" />
                                    </label>
                                    <label className="flex items-center bg-white  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                        <i class="fa-solid fa-phone"></i>
                                        <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Mobile" />
                                    </label>
                                    <label className="flex items-center bg-white  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                        <i class="fa-solid fa-pen-nib"></i>
                                        <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Service" />
                                    </label>
                                    <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                        <i className="fa-solid fa-globe"></i>
                                        <select className="grow bg-transparent border-none focus:ring-0 focus:outline-none">
                                            <option value="" disabled selected hidden>Brand</option>
                                            <option value="Captain Design Agency">Captain Design Agency</option>
                                            <option value="Captain Book Publishing">Captain Book Publishing</option>
                                        </select>
                                    </label>

                                    <label className=" flex items-center bg-white  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                        <i class="fa-solid fa-comment"></i>
                                        <input type="text" className=" grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Comment" />
                                    </label>
                                </div>

                            </div>
                        </div>
                        <div>
                            <h1 className='text-xl mb-2 mt-5'>Add Invoice</h1>
                            <div>
                                <div className="flex flex-wrap gap-4">
                                    <label className="flex items-center bg-white text-black  input input-bordered gap-2 w-full md:w-auto flex-grow">
                                        <i class="fa-solid fa-file-invoice-dollar"></i>
                                        <input type="text" className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" value="INV#1112" />
                                    </label>
                                    <label className="flex items-center bg-white  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                        <i class="fa-regular fa-credit-card"></i>
                                        <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Payment Modes" />
                                    </label>
                                    <label className="flex items-center bg-white text-black  input input-bordered gap-2 w-full md:w-auto flex-grow">
                                    <i class="fa-solid fa-dollar-sign"></i>
                                        <input type="text" className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" value="Currency USD" />
                                    </label>
                                    <label className="flex items-center bg-white  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                        </svg>
                                        <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Payment Modes" />
                                    </label>
                                    <label className=" flex items-center bg-white  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                        <i class="fa-solid fa-comment"></i>
                                        <input type="text" className=" grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Comment" />
                                    </label>
                                    <label className=" flex items-center bg-white  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                    <i class="fa-regular fa-square-plus"></i>
                                        <input type="text" className=" grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Add Items" />
                                    </label>
                                    <label className=" flex items-center bg-white  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                    <i class="fa-solid fa-cart-plus"></i>
                                        <input type="text" className=" grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Items" />
                                    </label>
                                    <label className=" flex items-center bg-white  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                    <i class="fa-solid fa-list-ol"></i>
                                        <input type="number" className=" grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Quantity" />
                                    </label>
                                    <label className=" flex items-center bg-white  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                    <i class="fa-regular fa-money-bill-1"></i>
                                        <input type="number" className=" grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Unit Price" />
                                    </label>
                                    <label className=" flex items-center bg-white  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                    <i class="fa-solid fa-sack-dollar"></i>
                                        <input type="number" className=" grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Tax" />
                                    </label>
                                    <label className=" flex items-center bg-white  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                    <i class="fa-solid fa-money-check-dollar"></i>
                                        <input type="number" className=" grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Amount" />
                                    </label>
                                    <label className=" flex items-center bg-white  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                    <i class="fa-solid fa-file-lines"></i>
                                        <input type="text" className=" grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Description" />
                                    </label>

                                </div>

                            </div>
                        </div>
                        <button type='submit' className='bg-blue-800 p-3 my-5 text-white rounded-md'>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default CustomerForm
