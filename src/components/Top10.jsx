import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img7 from "../images/squid-game.avif";
import img8 from "../images/naruto.avif";
import img9 from "../images/juror-2.avif";
import img10 from "../images/trevor-noah-i-wish-you-would.avif";
import img11 from "../images/american-primeval.avif";

const images = [
  { src: img7, alt: "Squid Game" },
  { src: img8, alt: "Naruto" },
  { src: img9, alt: "Juror 2" },
  { src: img10, alt: "Trevor Noah: I Wish You Would" },
  { src: img11, alt: "American Primeval" },
];

const top10 = () => {
  return (
    <>
      <br />
      <h1 className='bg-black pt-5 text-white p-0 m-0 text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>Top 10 Best Movies</h1>
      <Swiper
        className='bg-black w-full'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="animate-fadeIn">
            <img className='w-[500px] ml-5 h-auto rounded-2xl mx-auto mt-5 max-h-[400px] max-w-[330px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px] m-4 object-cover object-center' src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default top10;
