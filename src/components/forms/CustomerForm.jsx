import React, { useRef, useState } from 'react';
import Header from '../shared_components/Header';
import * as htmlToImage from 'html-to-image';
// import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import cdalogo from '../../src/cda.png'
import cbplogo from '../../src/cbp.png'
import customericon from '../../src/customericon.png'
import emailicon from '../../src/emailicon.png'
import phoneicon from '../../src/telephone.png'
import additemicon from '../../src/add-item.png'
import descicon from '../../src/description.png'
import discounticon from '../../src/discount.png'
const CustomerForm = ({ id }) => {

    const nodeRef = useRef(null);
    const [services, setServices] = useState([]);
    const [itemsAdd, setItemsAdd] = useState('');
    const [brandLogo, setBrandLogo] = useState(cdalogo)
    const [currency, setCurrency] = useState('');
    const [customerDetail, setCustomerDetail] = useState(
        {
            customerName: '',
            customerEmail: '',
            customerMobile: null,
            customerService: '',

        }
    )
    const [discount, setDiscount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('')
    const [brandMsg, setBrandMsg] = useState('Please Select a Brand First (from Customer Details)');
    const [items, setItems] = useState([{ id: 1, customItem: '', itemQty: 1, unitCost: 0, totalCost: 0, itemDescription: '' }]);

    const handleCustomerDetail = (field) => (e) => {
        switch (field) {
            case 'customerName':
                setCustomerDetail({
                    customerName: e.target.value,
                    customerEmail: customerDetail.customerEmail,
                    customerMobile: customerDetail.customerMobile,
                    customerService: customerDetail.customerService
                });
                break;
            case 'customerEmail':
                setCustomerDetail({
                    customerName: customerDetail.customerName,
                    customerEmail: e.target.value,
                    customerMobile: customerDetail.customerMobile,
                    customerService: customerDetail.customerService
                });
                break;
            case 'customerMobile':
                setCustomerDetail({
                    customerName: customerDetail.customerName,
                    customerEmail: customerDetail.customerEmail,
                    customerMobile: e.target.value,
                    customerService: customerDetail.customerService
                });
                break;
            case 'customerService':
                setCustomerDetail({
                    customerName: customerDetail.customerName,
                    customerEmail: customerDetail.customerEmail,
                    customerMobile: customerDetail.customerMobile,
                    customerService: e.target.value,
                });
                break;
            default:
                break;
        }
    };
    const handleServices = (serviceNumber) => {
        switch (serviceNumber) {
            case 1:
                setBrandLogo(cdalogo)
                setServices([
                    'Web Development',
                    'Logo Design',
                    'Social Media Marketing',
                    'Branding',
                    'SEO Services',
                    'Custom',
                ]);
                break;
            case 2:
                setBrandLogo(cbplogo)
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
                    'Custom',
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
            setItems([...items, { id: items.length + 1, customItem: '', itemQty: 1, unitCost: 0, totalCost: 0, itemTax: 0, itemDescription: '' }]);
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
                    let taxPercentage = parseFloat(updatedItem.itemTax) / 100 || 0;
                    let subtotal = parseFloat(updatedItem.unitCost) * parseFloat(updatedItem.itemQty) || 0;
                    let taxAmount = subtotal * taxPercentage;
                    updatedItem.totalCost = subtotal + taxAmount;
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
    const handlePaymentMethod = (e) => {
        setPaymentMethod(e.target.value)
    }

    const totalAmount = items.reduce((total, item) => total + item.totalCost, 0);


    const discountedTotalAmount = totalAmount - discount;


    const captureAndSave = async () => {
        try {
            const dataUrl = await htmlToImage.toPng(nodeRef.current);

            // saveAs(dataUrl, 'customer-invoice.png');

            const pdf = new jsPDF();
            const imgWidth = pdf.internal.pageSize.getWidth();
            const imgHeight = nodeRef.current.clientHeight * imgWidth / nodeRef.current.clientWidth;

            pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('customer-invoice.pdf');
        } catch (error) {
            console.error('Error capturing image:', error);
        }
    };

    return (
        <div className='p-4'>
            <Header />
            <div className='my-10'>
                <div className='bg-gradient-to-r from-blue-700 to-blue-400 rounded-t-md p-4 '>
                    <h1 className='text-sm xl:text-xl text-white '>Add Customer</h1>
                </div>
                <form action='' className='flex flex-col items-center lg:flex-row justify-start'>
                    <div className='bg-white p-4 rounded-b-md py-10 w-full border-2'>
                        <div>
                            <h1 className='text-xl mb-2 font-bold'>Customer Details</h1>
                            <div>
                                <div className="flex flex-wrap gap-2">
                                    <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[48%] shadow-md">
                                        <i className="fa-solid fa-user text-blue-800"></i>
                                        <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder='Customer Name' value={customerDetail.customerName} onChange={handleCustomerDetail('customerName')} />
                                    </label>
                                    <div className='w-full lg:w-[48%]'>
                                        <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full md:w-auto shadow-md">
                                            <i className="fa-solid fa-envelope text-orange-500"></i>
                                            <input type="text" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder='Customer Email' value={customerDetail.customerEmail} onChange={handleCustomerDetail('customerEmail')} />
                                        </label>
                                        <p className='text-xs mt-2 mx-2 text-gray-400'>Customer will login using this email</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 my-6">
                                    <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[48%] shadow-md">
                                        <i className="fa-solid fa-phone text-green-500"></i>
                                        <input type="number" className="grow bg-transparent border-none focus:ring-0 focus:outline-none" placeholder='Customer Contact' value={customerDetail.customerMobile} onChange={handleCustomerDetail('customerMobile')} />
                                    </label>
                                    <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[48%] shadow-md">
                                        <i class="fa-solid fa-layer-group text-cyan-400"></i>
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
                                    <label className="flex items-center bg-gray-100 text-black input input-bordered gap-2 w-full lg:w-auto flex-grow shadow-md">
                                        <i className="fa-solid fa-file-invoice-dollar text-teal-500"></i>
                                        <p className='border-r-2 px-2 '>INV#000</p>
                                        <h1 className="grow bg-transparent border-none focus:ring-0 focus:outline-none"> 0120</h1>
                                    </label>
                                    <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full md:w-auto flex-grow shadow-md">
                                        <i className="fa-regular fa-credit-card text-cyan-500"></i>
                                        <select className="grow bg-transparent border-none focus:ring-0 focus:outline-none" onChange={handlePaymentMethod}>
                                            <option value="" disabled selected hidden>Payment Mode</option>
                                            <option value="Stripe">Stripe</option>
                                            <option value="Wise">Wise</option>
                                            <option value="PayPal">PayPal</option>
                                        </select>
                                    </label>
                                    <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full md:w-auto flex-grow shadow-md">
                                        <i className="fa-solid fa-coins text-yellow-500"></i>
                                        <select className="grow bg-transparent border-none focus:ring-0 focus:outline-none" onChange={handleCurrency} >
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
                                        <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[28%] shadow-md">
                                            <i className="fa-regular fa-square-plus text-blue-800"></i>
                                            <select className="grow bg-transparent border-none focus:ring-0 focus:outline-none" onChange={handleCustomerDetail('customerService')}>
                                                <option value="" disabled selected hidden>Add item</option>
                                                {services.map((service, index) => (
                                                    <option key={index} value={service}>{service}</option>
                                                ))}
                                            </select>
                                        </label>
                                        <p className='text-xs mt-2 mx-2 text-gray-400'>{brandMsg}</p>
                                    </div>
                                </div>
                                <div>
                                    {items.map(item => (
                                        <div key={item.id} className="flex flex-wrap gap-2 my-3">
                                            <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-auto shadow-md">
                                                <i className="fa-regular fa-square-plus text-blue-800"></i>
                                                <input
                                                    type="text"
                                                    className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                                                    placeholder={item.id > 1 ? 'Add Custom item' : 'Select Service'}
                                                    value={item.id > 1 ? item.customItem : customerDetail.customerService}
                                                    onChange={(e) => handleInputChange(item.id, 'customItem', e.target.value)}
                                                />
                                            </label>

                                            <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[10%] shadow-md">
                                                <i class="fa-solid fa-list-ol text-blue-800"></i>
                                                <input
                                                    type="number"
                                                    className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                                                    placeholder="Qty"
                                                    value={item.itemQty}
                                                    onChange={(e) => handleInputChange(item.id, 'itemQty', parseInt(e.target.value))}
                                                />
                                            </label>
                                            <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[20%] shadow-md">
                                                <i class="fa-regular fa-money-bill-1 text-green-500"></i>
                                                <input
                                                    type="number"
                                                    className="grow bg-transparent border-none focus:ring-0 focus:outline-none"
                                                    placeholder="Unit Price"
                                                    value={item.unitCost}
                                                    onChange={(e) => handleInputChange(item.id, 'unitCost', parseFloat(e.target.value))}
                                                />
                                            </label>
                                            <label className="flex items-center bg-white text-black input input-bordered gap-2 w-full lg:w-[10%] shadow-md">
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
                                                className="grow bg-white py-2 w-full lg:w-[25%] text-black input input-bordered focus:ring-0 focus:outline-none shadow-md"
                                                placeholder="Description" onChange={(e) => handleInputChange(item.id, 'itemDescription', e.target.value)}
                                            ></textarea>
                                            <button
                                                type="button"
                                                className='rounded-lg border-2 border-blue-800 text-blue-800 text-xl font-bold px-4 shadow-md'
                                                onClick={() => removeItem(item.id)}
                                            >
                                                x
                                            </button>
                                            <div className='flex w-full justify-start my-6'>
                                                <h1 className='font-bold'> Item Details</h1>
                                            </div>
                                            <div className='flex flex-col w-full gap-2 '>
                                                <div className='flex flex-col w-full lg:w-1/3 justify-start border-2 overflow-auto p-3  rounded-md bg-gray-100 shadow-md'>
                                                    <h1 className='text-black'><span className='font-semibold  text-blue-800'>Item Name : </span>{item.id > 1 ? item.customItem : customerDetail.customerService}</h1>

                                                    <p className='font-semibold text-blue-800'>Description: <span className='text-black font-normal'>{item.itemDescription}</span> </p>
                                                </div>
                                                <div className='flex w-full lg:w-1/3 justify-start  '>
                                                    <div className=''>
                                                        <div className='flex justify-between items-center'>
                                                            <div className=''>

                                                                <p className='text-gray-500 text-sm'>Qty {item.itemQty} x</p>

                                                            </div>
                                                            <p className='text-xl mx-1 font-bold text-blue-800 '>{item.totalCost}</p>
                                                            <p className='text-green-500 text-xl mx-2 '>{currency}</p>
                                                        </div>
                                                        <p className='text-gray-500 '>tax: {item.itemTax}%</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='text-orange-500 text-sm'>{itemsAdd}</div>
                                <button
                                    type="button"
                                    className="border-2 text-blue-800 border-blue-800 p-3 my-5 shadow-md  rounded-md"
                                    onClick={addItem}>
                                    <i className="fa-regular fa-square-plus"></i> Add Item
                                </button>
                            </div>
                            <div className='bg-gray-200 w-full h-[2px] my-6 '></div>



                            {/* INVOICE DIV S */}
                            <div id={id} ref={nodeRef} className='bg-white w-full lg:py-4 lg:px-10'>
                                <div className='my-8'>
                                    <div className='flex items-center justify-between my-10'>
                                        <h1 className='lg:text-center my-2 text-2xl font-semibold text-blue-800'>Invoice# <span className='font-normal text-black '>0120</span></h1>
                                        <img src={brandLogo} className='h-16 w-auto' alt="" />
                                    </div>
                                    <h1 className='text-xl mb-2 font-bold text-blue-800'>Customer Details</h1>
                                    <div className='flex justify-start gap-6 flex-wrap'>
                                        <div className='flex gap-1'>
                                            <img src={customericon} alt="Customer" className='w-6 h-6' />
                                            <p className='text-blue-800 font-semibold'> Name: <span className='text-gray-500 font-normal'>{customerDetail.customerName}</span></p>
                                        </div>
                                        <div className='flex gap-1'>
                                            <img src={emailicon} alt="Email" className='w-6 h-6' />
                                            <p className='text-blue-800 font-semibold'>  Email: <span className='text-gray-500 font-normal'>{customerDetail.customerEmail}</span></p>
                                        </div>
                                        <div className='flex gap-1' >
                                            <img src={phoneicon} alt="Email" className='w-6 h-6' />
                                            <p className='text-blue-800 font-semibold'> Contact: <span className='text-gray-500 font-normal'>{customerDetail.customerMobile}</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-b-2 border-dashed my-5'></div>
                                <div className='flex justify-between flex-wrap'>
                                    <div>
                                        <h1 className='text-xl mb-2 mt-5 font-bold text-blue-800'>Total Items:</h1>
                                        {/* <h1 className='text-blue-800 font-semibold text-xl'>Items: </h1> */}
                                        <h1 className='text-blue-500'>{customerDetail.customerService}</h1>
                                        {items.map(item => (
                                            <div key={item.id}>
                                                <div className='flex gap-3'>
                                                    {/* <img src={additemicon} alt="item" className='w-6 h-6' /> */}
                                                    <h1 className='text-blue-500'>{item.customItem}</h1>
                                                </div>
                                                <div className='flex gap-3'>
                                                    {/* <img src={descicon} alt="" className='w-6 h-6' /> */}
                                                    <h1 className='italic text-gray-400'>Description: {item.itemDescription}</h1>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <h1 className='text-xl mb-2 mt-5 text-blue-800 font-bold'>Sub Total</h1>
                                        <div className='flex justify-end'>
                                            <p className='text-green-600 text-2xl'>{currency}</p>
                                            <p className='text-2xl font-semibold text-green-600'>{discountedTotalAmount}</p>
                                        </div>
                                        <div className='items-center gap-2' style={{ display: discount > 0 ? 'flex' : 'none' }}>
                                            <div className='flex gap-2'>
                                                <img src={discounticon} alt="Discount" className='w-6 h-6' />
                                                <h1>Discount</h1>
                                            </div>
                                            <p className='text-xl'>-{discount}</p>
                                        </div>
                                        <p className='text-sm text-blue-800'>Paid via: {paymentMethod}</p>
                                    </div>
                                </div>
                                <div className='border-b-2 border-dashed my-5'></div>
                                {/* <div className='w-1/2 h-2 bg-orange-400 my-2'></div>
                                <div className='w-1/2 h-2 bg-blue-800'></div> */}
                            </div>
                            {/* INVOICE DIV E */}
                            <label className='flex justify-end px-10'>
                                Add Discount:
                                <input type="number" name="" id="" placeholder='discount' className='ml-2 border-2 rounded-md' value={discount} onChange={handleDiscount} />
                            </label>

                            <div className='flex justify-between px-10'>

                                <button
                                    type="button"
                                    className="bg-blue-800 p-3 my-5 text-white rounded-md">
                                    Save and Submit
                                </button>
                                <button type="button" onClick={captureAndSave} className='text-blue-500 font-semibold'><i class="fa-solid fa-file-pdf text-red-500 text-xl"></i> Export</button>
                                {/* export button */}

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CustomerForm;
