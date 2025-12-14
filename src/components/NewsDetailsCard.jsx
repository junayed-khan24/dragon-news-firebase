import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    // console.log(news);
    return (
        <div className='space-y-5'>
            <img className='w-full h-[400px] object-cover rounded-md' src={news.image_url} alt="" />
            <h2 className='text-2xl font-bold'>{news.title}</h2>
            <p className='text-gray-600'>{news.details}</p>
            <Link className="btn btn-secondary animate-pulse" to={`/category/${news.category_id}`}>
            <IoArrowBackOutline size={22}></IoArrowBackOutline>
            Back To Category 
            </Link>
        </div>
    );
};

export default NewsDetailsCard;