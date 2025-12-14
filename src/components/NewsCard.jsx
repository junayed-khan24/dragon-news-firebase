import React from 'react';
import { FaStar, FaRegEye, FaShareAlt, FaRegBookmark } from 'react-icons/fa';
import { format } from 'date-fns';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
    tags,
  } = news;

  return (
    <div className="bg-white rounded-lg  overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {format(new Date(author.published_date), 'yyyy-MM-dd')}
            </p>
          </div>
        </div>
        {/* Share icon placeholder */}
        <div className="text-gray-400 cursor-pointer hover:text-gray-600 flex gap-3">
            <FaRegBookmark></FaRegBookmark>
           <FaShareAlt></FaShareAlt>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-3 pb-2">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>

      {/* Image */}
      <div className='rounded-2xl'>
        <img src={thumbnail_url} alt="news thumbnail" className="p-3 w-full rounded-2xl" />
      </div>

      {/* Details */}
      <div className="px-4 py-3 text-sm text-gray-700">
        {details.length > 200
          ? `${details.slice(0, 200)}...`
          : details}
        <Link 
        to={`/news-details/${id}`} className="text-[#FF8C47] font-semibold ml-1 cursor-pointer">
          Read More</Link>
      </div>

      {/* Tags (Optional) */}
      <div className="px-4 text-xs text-gray-500 mb-2">
        Tags: {tags?.join(', ')}
      </div>

      {/* Footer: Rating and Views */}
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center text-orange-500">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar
              key={index}
              className={index < rating.number ? 'text-orange-500' : 'text-gray-300'}
            />
          ))}
          <span className="ml-2 text-sm text-gray-700">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
