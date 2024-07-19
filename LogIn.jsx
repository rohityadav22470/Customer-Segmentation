import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const LogIn = () => {
  return (
    <div>
      <div className="main-container text-white h-[100vh] flex justify-center items-center w-full">
        <div className="container w-fit bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg relative">
          <h1 className="text-4xl text-white font-bold text-center mb-7">LogIn</h1>
          <form action="">
            <div className='relative my-6'>
              <label className="block relative">
                <input 
                  type="email" 
                  className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                  placeholder=' '
                />
                <span className="absolute left-0 -top-5 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-600">Your Email</span>
                <FontAwesomeIcon icon={faUser} className="text-white absolute right-0 top-4" />
              </label>
            </div>
            <div className='relative my-6'>
              <label className="block relative">
                <input 
                  type="password" 
                  className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                  placeholder=' '
                  minLength={8}
                />
                <span className="absolute left-0 -top-5 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-600">Your Password</span>
                <FontAwesomeIcon icon={faLock} className="text-white absolute right-0 top-4" />
              </label>
            </div>
            <div className="flex items-center justify-between my-4">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2"/>
                <label htmlFor="remember" className="text-sm">Remember me</label>
              </div>
              <span className="text-sm text-blue-500 hover:underline cursor-pointer">Forgot Password?</span>
            </div>
            <button type='submit' className="w-full py-2 my-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-800 transition duration-300">LogIn</button>
            <div className="text-center">
              <span className='m-4'>Don't have an account? &nbsp;<Link to="/register" replace={true} className="text-blue-500 hover:underline">Create Account</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
