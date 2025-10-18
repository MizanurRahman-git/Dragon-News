import React from 'react';
import classroom from '../../assets/class.png'
import swimming from '../../assets/swimming.png'
import playground from '../../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-4 rounded-md'>
            <h1 className='font-semibold text-[20px]'>Q-Zone</h1>
            <div className='flex flex-col justify-center mt-5 space-y-4'>
                <img src={swimming} alt="" />
                <img src={classroom} alt="" />
                <img src={playground} alt="" />
                
            </div>
        </div>
    );
};

export default QZone;