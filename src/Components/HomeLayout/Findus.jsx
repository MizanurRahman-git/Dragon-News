import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Findus = () => {
    return (
        <div>
            <h1 className='font-semibold text-[20px]'>Find Us On</h1>
            <div className='join join-vertical w-full'>
                <button className='btn bg-base-100 justify-start join-item'><FaFacebook/> Facebook</button>
                <button className='btn bg-base-100 justify-start join-item'><FaTwitter/> Twitter</button>
                <button className='btn bg-base-100 justify-start join-item'><FaInstagram/> Instagram</button>
            </div>
        </div>
    );
};

export default Findus;