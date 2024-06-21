import React, { useState } from 'react'
import Header from '../shared_components/Header';
const CustomerForm = () => {
    const [services, setServices] = useState([])
    const [itemsAdd, setItemsAdd] = useState('')
    const [currency, setCurrency] = useState('')
    const [unitCost, setUnitCost] = useState(0)
    const [itemQty, setItemQty] = useState(1)
    const [customItem, setCustomItem] = useState('')
    const [brandMsg, setBrandMsg] = useState('Please Select a Brand First (from Customer Details)')
    const [items, setItems] = useState([{ id: 1 }]);
    const handleServices = (serviceNumber) => {
        switch (serviceNumber) {
            default:

                break;
            case 1:
                setServices([
                    'Web Development',
                    'Logo Design',
                    'Social Media Marketing',
                    'Branding',
                    'SEO Services',
                ])
                break;
            case 2:
                setServices([
                    'GhostWriting',
                    'Book Editing',
                    'Book Publishing',
                    'Book Marketing',
                    'Book Cover Design',
                    'Biography Writing',
                    'Book Trailer',
                    'Children Book Writing',
                    'Comic Book Writing',
                    'Fiction Writing',
                    'Audio Book',
                ])
                break;

        }
    }
    const handleBrandChange = (event) => {
        const brand = event.target.value;
        if (brand === 'Captain Design Agency') {
            setBrandMsg('Captain Design Agency')
            handleServices(1);
        } else if (brand === 'Captain Book Publishing') {
            handleServices(2);
            setBrandMsg('Captain Book Publishing')
        }
    };

    const addItem = () => {
        if (items.length < 5) {
            setItems([...items, { id: items.length + 1 }]);


        }
        else {
            setItemsAdd('Max 5 items can be added')
        }
    };
    const removeItem = () => {
        if (items.length > 1) {
            setItems(items.slice(0, items.length - 1));
            setItemsAdd('')
        }
    };

    const handleUnitPrice = (e) => {
        let unitCost = parseFloat(e.target.value)
        let quantity = itemQty
        let total = unitCost*quantity
        setUnitCost(total)
    }
    const handleCurrency = (e) =>{
        setCurrency(e.target.value)
    }
    const handleQty = (e) =>{
        setItemQty(e.target.value)
    }
    const handleCustomItem = (e)=>{
        setCustomItem(e.target.value)
    }
    return (
        <div className='p-4'>
            <Header />
            <div className='my-10'>
                <div className='bg-gradient-to-r from-blue-700 to-blue-400 rounded-t-md p-4'>
                    <h1 className='text-sm xl:text-xl text-white '>Add Customer</h1>
                </div>
                <form action='' className='flex flex-col items-center lg:flex-row justify-start'>
                    <div className='bg-white p-4 rounded-b-md py-10 w-full border-2'>
                        <div>
                            <h1 className='text-xl mb-2 font-bold'>Customer Details</h1>
                            <div>
                                <div className="flex flex-wrap gap-2">
                                    <label className="flex items-center bg-white  text-black input input-bordered gap-2 w-full lg:w-[48%] ">
                                        <i class="fa-solid fa-user"></i>
                                        <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Customer Name" />
                                    </label>
                                    <div className='w-full lg:w-[48%]'>
                                        <label className="flex items-center bg-white  text-black input input-bordered gap-2 w-full md:w-auto ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                            </svg>
                                            <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Email" />
                                        </label>
                                        <p className='text-xs mx-2 text-gray-400'>Customer will login using this email</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 my-6">
                                    <label className="flex items-center bg-white  text-black input input-bordered gap-2 w-full lg:w-[48%] ">
                                        <i class="fa-solid fa-phone"></i>
                                        <input type="number" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Mobile" />
                                    </label>
                                    <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[48%] ">
                                        <i className="fa-solid fa-globe"></i>
                                        <select
                                            className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                                            onChange={handleBrandChange}>
                                            <option value="" disabled selected hidden>Brand</option>
                                            <option value="Captain Design Agency">Captain Design Agency</option>
                                            <option value="Captain Book Publishing">Captain Book Publishing</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gray-200 w-full h-[2px] my-20'></div>
                        <div>
                            <h1 className='text-xl mb-2 mt-5 font-bold'>Add Invoice</h1>
                            <div>
                                <div className="flex flex-wrap gap-2">
                                    <label className="flex items-center bg-white text-black  input input-bordered gap-2 w-full lg:w-auto flex-grow">
                                        <i class="fa-solid fa-file-invoice-dollar"></i>
                                        <p className='border-r-2 px-2'>INV#000</p>
                                        <input type="text" className="grow bg-transparent  border-none focus:ring-0 focus:outline-none" placeholder="Invoice" />
                                    </label>
                                    <label className="flex items-center bg-white  text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                        <i class="fa-regular fa-credit-card"></i>
                                        <select
                                            className="grow bg-transparent border-none focus:ring-0 focus:outline-none">
                                            <option value="" disabled selected hidden>Payment Mode</option>
                                            <option value="Stripe">Stripe</option>
                                            <option value="secondmethod">??</option>
                                        </select>
                                    </label>
                                    <label className="flex items-center bg-white text-black  input input-bordered gap-2 w-full md:w-auto flex-grow">
                                        <i class="fa-solid fa-coins"></i>
                                        <select
                                            className="grow bg-transparent border-none focus:ring-0 focus:outline-none" onChange={handleCurrency}>
                                            <option value="" disabled selected hidden>Currency</option>
                                            <option value="USD">$ USD</option>
                                            <option value="GBP">£ GBP</option>
                                            <option value="EUR">€ EUR</option>
                                            <option value="AUD">$ AUD</option>
                                            <option value="CAD">$ CAD</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="flex flex-wrap gap-2 my-6">
                                    <div className=' flex-grow'>
                                        <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[28%] ">
                                            <i class="fa-regular fa-square-plus"></i>
                                            <select className="grow bg-transparent border-none focus:ring-0 focus:outline-none">
                                                <option value="" disabled selected hidden>Add item</option>
                                                {services.map((service, index) => (
                                                    <option key={index} value={service}>{service}</option>
                                                ))}
                                            </select>
                                        </label>
                                        <p className='text-xs mx-2 text-gray-400'>{brandMsg}</p>
                                    </div>
                                </div>
                                <div>
                                    {items.map(item => (
                                        <div key={item.id} className="flex flex-wrap gap-2 my-3">
                                            <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-auto">
                                                <i className="fa-regular fa-square-plus"></i>
                                                <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Add Custom Item" value={customItem} onChange={handleCustomItem}/>
                                            </label>
                                            <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[10%]">
                                                <input type="number" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Qty" value={itemQty} onChange={handleQty}/>
                                            </label>
                                            <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[20%]">
                                                <input type="number" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Unit Price"  onChange={handleUnitPrice} />
                                            </label>
                                            <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[10%]">
                                                <input type="number" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Tax" />
                                            </label>
                                            <textarea type="text" className="grow bg-white py-2 w-full lg:w-[25%] text-black input input-bordered focus:ring-0 focus:outline-none" placeholder="Description"></textarea>
                                            <button type="button" className='rounded-lg border-2 border-blue-800 text-blue-800 text-xl font-bold px-4' onClick={removeItem}>x</button>
                                                <div className='flex w-full justify-end my-6'>
                                                <h1 className='font-bold'> Amount</h1>
                                                </div>
                                                <div className='flex w-full justify-end'>
                                                <h1 className='text-black'><span className='font-semibold text-blue-800'>Item Name: </span>{customItem}</h1>
                                                </div>
                                            <div className='flex w-full justify-end'>
                                                <div>
                                                  
                                                <div className='flex justify-between items-center'>
                                                <p className='text-xl mx-1 font-bold text-blue-800'>{unitCost}</p>
                                                    <p className='text-gray-500 text-sm'>x {itemQty}</p>
                                                    <p className='text-green-500 ml-6'>{currency}</p>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='text-orange-500 text-sm'>{itemsAdd}</div>
                                <button type="button" className="border-2 text-blue-800 border-blue-800 p-3 my-5  rounded-md" onClick={addItem}><i className="fa-regular fa-square-plus"></i> Add Item</button>
                                <div className='bg-gray-200 w-full h-[2px] my-6'></div>
                            </div>
                            <h1 className='text-xl mb-2 mt-5 font-bold'>Sub Amount</h1>
                            <p className='text-xl mx-1'>{unitCost}</p>
                            <p className='text-gray-500 '>{currency}</p>

                            <button type="button" className="bg-blue-800 p-3 my-5 text-white rounded-md" >Save and Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CustomerForm
