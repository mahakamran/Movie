import React from 'react';
import img from '../images/image1.png';
import Popular from '../components/popular';
import Top10 from '../components/top10';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    return (
        <>
            <div className='w-full h-[640px] bg-red-800 absolute'>
                <img className='w-full h-full object-cover' src={img} alt="" />
            </div>
            <div className='w-full h-[640px] bg-transparent relative flex flex-col items-center justify-center'>
                <h1 className='text-white text-4xl md:text-6xl lg:text-8xl font-bold text-center pt-20 md:pt-40 lg:pt-60'>
                    Your One-Stop
                </h1>
                <h1 className='text-white text-4xl md:text-6xl lg:text-8xl font-bold text-center pt-3'>
                    Movie Destination
                </h1>
                <button className='bg-green-700 text-white text-xl md:text-2xl font-semibold px-5 py-3 rounded mt-5 active:bg-green-600'>
                    Discover more movies
                </button>
            </div>
            <Popular />
            <Top10 />
        </>
    );
};

export default Home;

