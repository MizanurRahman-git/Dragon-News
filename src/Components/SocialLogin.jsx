import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-semibold text-[20px]'>Login With</h1>
            <div className='space-y-3 mt-6'>
                <button className='btn w-full btn-outline btn-secondary'><FcGoogle size={25} /> Login with Github</button>
                <button className='btn w-full btn-outline btn-primary'><FaGithub size={25} /> Login with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;