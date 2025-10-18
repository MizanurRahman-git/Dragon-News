import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 bg-base-200 p-3'>
            <p className='bg-secondary text-base-100 py-2 px-3'>Latest</p>
            <Marquee className='flex gap-10 cursor-pointer' pauseOnHover={true}>
                <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut laboriosam eius dicta accusamus.</p>
                <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut laboriosam eius dicta accusamus.</p>
                </Marquee>
        </div>
    );
};

export default LatestNews;