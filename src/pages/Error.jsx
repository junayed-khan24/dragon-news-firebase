import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router';


const Error = () => {
    return (
         <div className='min-h-screen mx-auto flex items-center justify-center bg-gray-200'>
            <div className=''>
            <h1 className='text-center text-9xl font-bold text-gray-800'>404</h1>
            <h3 className='text-center text-xl font-bold text-gray-500 pt-8'>Page Not Found</h3>
            <Link to="/" className='btn animate-bounce bg-green-400 text-white text-center font-bold px-3 mt-4 items-center justify-center ml-16'> 
            <GoArrowLeft></GoArrowLeft>
            Go Home</Link>
            </div>
        </div>
    );
};

export default Error;