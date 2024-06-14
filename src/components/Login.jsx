import React, { useRef } from 'react'
import logo from '../src/logo.png'
const Login = () => {
    const userName = useRef(null);
    const userPassword = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName.current.value)
        console.log(userPassword.current.value)
    };
    return (
        <div className="flex items-center justify-start w-screen bg-white   min-h-screen lg:bg-purple-950 lg:px-10 loginbg">
            <div className=" bg-white px-8 lg:rounded-2xl lg:shadow-md w-full max-w-2xl py-8  lg:mx-10">
                <div className='flex justify-center'>
                    <img src={logo} alt='logo' className='w-32 mb-2' />
                </div>
                <h3 className="text-2xl  text-purple-700 font-bold mb-9 text-center">Customer Relationship Management</h3>
                <form>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">

                        </label>
                        <input
                            className="shadow appearance-none bg-transparent border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            ref={userName}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        </label>
                        <input
                            className="shadow appearance-none bg-transparent border rounded-2xl w-full py-4 px-3 mb-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            ref={userPassword}
                        />
                    </div>
                    <div className='flex flex-wrap justify-between mb-14'>
                        <div className='flex '>
                            <input type='checkbox' />
                            <p className='text-sm font-bold ml-2 text-purple-700'>Remember Me</p>
                        </div>
                        <div>
                            <p className='text-sm font-bold text-purple-700 cursor-pointer'>Forgot Password?</p>
                        </div>
                    </div>
                    <div className="flex items-center text-center justify-between">
                        <a href="/dashboard"  className="bg-purple-950 w-full hover:scale-105 hover:bg-purple-700 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline">
                            Login
                        </a>
                    </div>
                    <div className='text-center'>
                        <p className=' text-purple-700  mt-5'>Go to <span className='font-bold cursor-pointer'>Website</span></p>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Login
