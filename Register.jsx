import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    setPasswordMatchError(value !== password && value !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }
    // Submit the form logic
  };

  return (
    <div className="main-container text-white h-[100vh] flex justify-center items-center">
      <div className="container w-fit bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg relative">
        <h1 className="text-4xl text-white font-bold text-center mb-7">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className='relative my-6'>
            <label htmlFor="email" className="block relative">
              <input 
                type="email" 
                id="email"
                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=' '
                value={email}
                onChange={handleEmailChange}
                required
              />
              <span className="absolute left-0 -top-5 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-600">Your Email</span>
              <FontAwesomeIcon icon={faUser} className="text-white absolute right-2 top-4" />
            </label>
          </div>
          <div className='relative my-6'>
            <label htmlFor="password" className="block relative">
              <input 
                type="password" 
                id="password"
                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=' '
                value={password}
                onChange={handlePasswordChange}
                minLength={8}
                required
              />
              <span className="absolute left-0 -top-5 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-600">Your Password</span>
              <FontAwesomeIcon icon={faLock} className="text-white absolute right-2 top-4" />
            </label>
          </div>
          <div className='relative my-6'>
            <label htmlFor="confirmPassword" className="block relative">
              <input 
                type="password" 
                id="confirmPassword"
                name="confirmPassword"
                className={`block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 ${passwordMatchError ? 'border-red-500' : 'border-gray-300'} appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`} 
                placeholder=' '
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                minLength={8}
                required
              />
              <span className="absolute left-0 -top-5 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-600">Confirm Password</span>
              <FontAwesomeIcon icon={faLock} className="text-white absolute right-2 top-4" />
            </label>
            {passwordMatchError && confirmPassword && (
              <p className="text-red-500 text-xs mt-1">Passwords do not match.</p>
            )}
          </div>
          <div className="flex items-center justify-between my-4">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2"/>
              <label htmlFor="remember" className="text-sm">Remember me</label>
            </div>
          </div>
          <button type='submit' className="w-full py-2 my-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-800 transition duration-300">Register</button>
          <div className="text-center">
            <span className='m-4'>Already have an account? &nbsp;<Link to="/login" replace={true} className="text-blue-500 hover:underline">LogIn</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
