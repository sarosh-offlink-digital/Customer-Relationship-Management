import React, { useState } from 'react';
import Header from '../shared_components/Header';

const CustomerForm = () => {
    const [services, setServices] = useState([]);
    const [itemsAdd, setItemsAdd] = useState('');
    const [currency, setCurrency] = useState('');
    const [discount, setDiscount] = useState(0);
    const [brandMsg, setBrandMsg] = useState('Please Select a Brand First (from Customer Details)');
    const [items, setItems] = useState([{ id: 1, customItem: '', itemQty: 1, unitCost: 0, totalCost: 0 }]);

    const handleServices = (serviceNumber) => {
        switch (serviceNumber) {
            case 1:
                setServices([
                    'Web Development',
                    'Logo Design',
                    'Social Media Marketing',
                    'Branding',
                    'SEO Services',
                ]);
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
                ]);
                break;
            default:
                break;
        }
    };

    const handleBrandChange = (event) => {
        const brand = event.target.value;
        if (brand === 'Captain Design Agency') {
            setBrandMsg('Captain Design Agency');
            handleServices(1);
        } else if (brand === 'Captain Book Publishing') {
            handleServices(2);
            setBrandMsg('Captain Book Publishing');
        }
    };

    const addItem = () => {
        if (items.length < 5) {
            setItems([...items, { id: items.length + 1, customItem: '', itemQty: 1, unitCost: 0, totalCost: 0, itemTax: 0 }]);
        } else {
            setItemsAdd('Max 5 items can be added');
        }
    };

    const removeItem = (id) => {
        if (items.length > 1) {
            setItems(items.filter(item => item.id !== id));
            setItemsAdd('');
        }
    };

    const handleInputChange = (id, field, value) => {
        const newItems = items.map(item => {
            if (item.id === id) {
                let updatedItem = { ...item, [field]: value };

                if (field === 'unitCost' || field === 'itemQty' || field === 'itemTax') {
                    if (item.itemTax > 0) {
                        let taxPercentage = updatedItem.itemTax / 100;
                        let subtotal = updatedItem.unitCost * updatedItem.itemQty;
                        let taxAmount = subtotal * taxPercentage;
                        updatedItem.totalCost = subtotal + taxAmount;
                    } else {
                        let subtotal = updatedItem.unitCost * updatedItem.itemQty;
                        updatedItem.totalCost = subtotal;
                    }
                }

                return updatedItem;
            }
            return item;
        });

        setItems(newItems);
    };

    const handleCurrency = (e) => {
        setCurrency(e.target.value);
    };

    const handleDiscount = (e) => {
        setDiscount(e.target.value);
    };

    const totalAmount = items.reduce((total, item) => total + item.totalCost, 0);


    const discountedTotalAmount = totalAmount - discount;

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
                                    <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[48%]">
                                        <i className="fa-solid fa-user text-blue-800"></i>
                                        <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Customer Name" />
                                    </label>
                                    <div className='w-full lg:w-[48%]'>
                                        <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full md:w-auto">
                                            <i className="fa-solid fa-envelope text-orange-500"></i>
                                            <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Email" />
                                        </label>
                                        <p className='text-xs mx-2 text-gray-400'>Customer will login using this email</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 my-6">
                                    <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[48%]">
                                        <i className="fa-solid fa-phone text-green-500"></i>
                                        <input type="number" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Mobile" />
                                    </label>
                                    <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[48%]">
                                        <i className="fa-solid fa-globe text-blue-500"></i>
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
                                    <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-auto flex-grow">
                                        <i className="fa-solid fa-file-invoice-dollar text-teal-500"></i>
                                        <p className='border-r-2 px-2 '>INV#000</p>
                                        <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="Invoice" />
                                    </label>
                                    <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                        <i className="fa-regular fa-credit-card text-cyan-500"></i>
                                        <select className="grow bg-transparent border-none focus:ring-0 focus:outline-none">
                                            <option value="" disabled selected hidden>Payment Mode</option>
                                            <option value="Stripe">Stripe</option>
                                            <option value="secondmethod">??</option>
                                        </select>
                                    </label>
                                    <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full md:w-auto flex-grow">
                                        <i className="fa-solid fa-coins text-yellow-500"></i>
                                        <select className="grow bg-transparent border-none focus:ring-0 focus:outline-none" onChange={handleCurrency}>
                                            <option value="" disabled selected hidden>Currency</option>
                                            <option value="$">$ USD</option>
                                            <option value="£">£ GBP</option>
                                            <option value="€">€ EUR</option>
                                            <option value="$">$ AUD</option>
                                            <option value="$">$ CAD</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="flex flex-wrap gap-2 my-6">
                                    <div className='flex-grow'>
                                        <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[28%]">
                                            <i className="fa-regular fa-square-plus text-blue-800"></i>
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
                                                <i className="fa-regular fa-square-plus text-blue-800"></i>
                                                <input
                                                    type="text"
                                                    className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                                                    placeholder="Add Custom Item"
                                                    value={item.customItem}
                                                    onChange={(e) => handleInputChange(item.id, 'customItem', e.target.value)} 
                                                />
                                            </label>

                                            <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[10%]">
                                            <i class="fa-solid fa-list-ol text-blue-800"></i>
                                                <input
                                                    type="number"
                                                    className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                                                    placeholder="Qty"
                                                    value={item.itemQty}
                                                    onChange={(e) => handleInputChange(item.id, 'itemQty', parseInt(e.target.value))}
                                                />
                                            </label>
                                            <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[20%]">
                                            <i class="fa-regular fa-money-bill-1 text-green-500"></i>
                                                <input
                                                    type="number"
                                                    className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                                                    placeholder="Unit Price"
                                                    value={item.unitCost}
                                                    onChange={(e) => handleInputChange(item.id, 'unitCost', parseFloat(e.target.value))}
                                                />
                                            </label>
                                            <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[10%]">
                                            <i class="fa-solid fa-percent text-orange-500"></i>
                                                <input
                                                    type="number"
                                                    className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                                                    placeholder="Tax"
                                                    value={item.itemTax}
                                                    onChange={(e) => handleInputChange(item.id, 'itemTax', parseFloat(e.target.value))}
                                                />
                                            </label>
                                            <textarea
                                                type="text"
                                                className="grow bg-white py-2 w-full lg:w-[25%] text-black input input-bordered focus:ring-0 focus:outline-none"
                                                placeholder="Description"
                                            ></textarea>
                                            <button
                                                type="button"
                                                className='rounded-lg border-2 border-blue-800 text-blue-800 text-xl font-bold px-4'
                                                onClick={() => removeItem(item.id)}
                                            >
                                                x
                                            </button>
                                            <div className='flex w-full justify-start my-6'>
                                                <h1 className='font-bold'> Item Details</h1>
                                            </div>
                                            <div className='flex flex-col w-full gap-2'>
                                                <div className='flex w-full lg:w-1/3 justify-start border-2 overflow-auto p-3  rounded-md bg-gray-100 '>
                                                    <h1 className='text-black'><span className='font-semibold text-blue-800'>Item Name : </span>{item.customItem}</h1>
                                                </div>
                                                <div className='flex w-full lg:w-1/3 justify-start  '>
                                                    <div>
                                                        <div className='flex justify-between items-center'>
                                                            <div className=''>
                                                                
                                                            <p className='text-gray-500 text-sm'> {item.itemQty} x</p>

                                                            </div>
                                                            <p className='text-xl mx-1 font-bold text-blue-800'>{item.totalCost}</p>
                                                            <p className='text-green-500 text-xl mx-2'>{currency}</p>
                                                        </div>
                                                            <p>tax: {item.itemTax}%</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='text-orange-500 text-sm'>{itemsAdd}</div>
                                <button
                                    type="button"
                                    className="border-2 text-blue-800 border-blue-800 p-3 my-5 rounded-md"
                                    onClick={addItem}
                                >
                                    <i className="fa-regular fa-square-plus"></i> Add Item
                                </button>
                                <div className='bg-gray-200 w-full h-[2px] my-6'></div>
                            </div>
                            <div className='flex justify-between flex-wrap'>
                                <div>
                                    <h1 className='text-xl mb-2 mt-5 font-bold text-blue-800'>Total Items</h1>
                                    <h1 className='text-blue-800'>Items: </h1>
                                    {items.map(item => (
                                        <div key={item.id}>
                                            <h1><span className='text-blue-800'>{item.id} :</span> {item.customItem}</h1>
                                        </div>
                                    ))}
                                </div>
                                <div className=''>
                                <h1 className='text-xl mb-2 mt-5 font-bold'>Total Amount</h1>
                                    <div className='flex justify-start'>
                                    <p className='text-green-500 text-xl mx-2'>{currency}</p>
                                    <p className='text-xl mx-1'>{discountedTotalAmount}</p>
                                    </div>
                                   <label className=''>
                                   <i class="fa-solid fa-tag"></i> Discount:
                                    <input type="number" name="" id="" placeholder='discount' className='ml-2 w-1/2 border-2 rounded-md' value={discount} onChange={handleDiscount}/>
                                   </label>
                                </div>

                            </div>

                            <button
                                type="button"
                                className="bg-blue-800 p-3 my-5 text-white rounded-md">
                                Save and Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CustomerForm;
