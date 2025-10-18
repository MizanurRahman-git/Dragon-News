import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5'>
            <img className='w-[600px]' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent'>{format(new Date(),"EEEE , MMMM  d, uuuu")}</p>
        </div>
    );
};

export default Header;