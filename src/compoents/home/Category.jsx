// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import image1 from "/image/Rectangle 5.png";
import SectionTitle from "./../SectionTitle";

const Category = () => {
  return (
    <div>
      <div className="text-center">
        <SectionTitle
          heading={"---From 11:00am to 10:00pm---"}
          subHeading={"ORDER ONLINE"}
        ></SectionTitle>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-[450px] w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[450px] w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[450px] w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[450px] w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[450px] w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[450px] w-full" src={image1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
