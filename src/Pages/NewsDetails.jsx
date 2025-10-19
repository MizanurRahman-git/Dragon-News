import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const info = useLoaderData();
    const {id} = useParams();
    const [news , setNews] = useState({})

    useEffect(() => {
        const singleNews = info.find(data => data.id == id);
        setNews(singleNews)
    },[info, id])

    return (
        <div className='mt-5'>
            <header>
                <Header/>
            </header>
            <main className='grid grid-cols-12 w-11/12 mx-auto gap-5 py-4'>
                <section className='col-span-9'>
                    <h1 className='font-semibold text-[20px] text-[#403F3F]'>Dragon News</h1>
                    <NewsDetailsCard news={news}/>
                </section>
                <aside className='col-span-3'>
                    <RightAside/>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;