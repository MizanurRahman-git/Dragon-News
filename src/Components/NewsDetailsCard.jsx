import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {

    return (
        <div className='border-1 border-gray-300 p-6 rounded-lg mt-8 space-y-4'>
            <img className='w-full h-[411px] object-cover rounded-lg' src={news.image_url} alt="" />
            <h1 className='font-bold text-[25px] text-[#403F3F]'>{news.title}</h1>
            <p className='text-accent'>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='flex items-center gap-1.5 bg-secondary w-fit text-white p-2 rounded-md cursor-pointer'> <GoArrowLeft /> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;