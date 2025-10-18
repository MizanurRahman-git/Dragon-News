import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='nav-left'></div>
            <div className='flex gap-4'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex items-center gap-4'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-8'>Log In</button>
            </div>
        </div>
    );
};

export default Navbar;