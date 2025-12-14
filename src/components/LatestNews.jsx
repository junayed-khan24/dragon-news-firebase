import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>

            <Marquee pauseOnHover={true} speed={50} >
                 <p className='font-bold text-red-400'>Bangladesh's Export Earnings Show Strong Growth in Q1 2025,   Local Businesses Adapt to Rising Raw Material Costs </p>
            </Marquee>
           
        </div>
    );
};

export default LatestNews; 