import React from 'react';
import image from '../images/the-pitt.avif';
import image1 from '../images/a-real-pain.avif';
import image2 from '../images/conclave.avif';
import image3 from '../images/on-call.avif';

const images = [image, image1, image2, image3];

const Popular = () => {
    return (
        <>
            <br />
            <div className='w-full min-h-screen bg-black py-10'>
                <h2 className='text-4xl md:text-7xl font-bold bg-gradient-to-b from-green-900 to-white bg-clip-text text-transparent text-center pt-10 md:pt-24'>Our New Movies</h2>
                <div className='flex flex-wrap justify-evenly mt-5 mx-0 w-full'>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            className='h-[350px] w-[250px] md:h-[450px] md:w-[300px] rounded-2xl m-2 md:ml-5 hover:opacity-50 transition duration-300'
                            src={img}
                            alt={`Movie ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Popular;
