import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';
import Loading from '../Components/Loading';

const HomeLayout = () => {
    const {state} = useNavigation();

    return (
        <div>
            <header>
                <Header/>
                <section className='w-11/12 mx-auto my-4'>
                    <LatestNews/>
                </section>
                <nav className='w-11/12 mx-auto my-4'>
                    <Navbar/>
                </nav>
                
            </header>
            <main className='w-11/12 mx-auto my-4 gap-7 grid grid-cols-12'>
                <aside className='col-span-3 top-0 sticky h-fit'>
                    <LeftAside/>
                </aside>
                <section className='col-span-6'>
                   {state == "loading" ? <Loading/> : <Outlet/>} 
                </section>
                <aside className='col-span-3 top-0 sticky h-fit'>
                    <RightAside/>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;