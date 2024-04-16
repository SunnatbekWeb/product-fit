import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import SliderImage from "../../../assets/images/intro-carousel_image.png";

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={SliderImage.src} className="w-full h-[500px]" alt="Slider image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImage.src} className="w-full h-[500px]" alt="Slider image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImage.src} className="w-full h-[500px]" alt="Slider image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImage.src} className="w-full h-[500px]" alt="Slider image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImage.src} className="w-full h-[500px]" alt="Slider image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
