import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams()
    const information = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([])

    // console.log(information)

    useEffect(()=> {
        if(id == "0"){
            setCategoryNews(information)
            return
        }
        else if(id == "1"){
            const filteredNews = information.filter((news) => news.others.is_today_pick == true)
            setCategoryNews(filteredNews)
        }
        else{
            const filteredNews = information.filter((news) => news.category_id == id)
            setCategoryNews(filteredNews)
        }
        
    },[information, id])
    
    return (
        <div>
            <h1 className='font-semibold text-[20px]'>Total <span className='text-secondary'>({categoryNews.length})</span> News Found</h1>

            <div className='grid grid-cols-1 gap-4'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}/>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;