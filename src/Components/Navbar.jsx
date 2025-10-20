import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userLogo from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';


const Navbar = () => {
    const {user, logOut} = use(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(res=>{
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='flex justify-between items-center'>
            <div className='nav-left'>{user && user.displayName}</div>
            <div className='flex gap-4'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex items-center gap-4'>
                <img className='w-12 rounded-full' src={user ? user.photoURL : userLogo} alt="" />
                {user ? (<button onClick={handleLogOut} className='btn btn-primary px-8'>Log Out</button>) : (<Link to="/auth/login" className='btn btn-primary px-8'>Log In</Link>)}
                
            </div>
        </div>
    );
};

export default Navbar;